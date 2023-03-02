import { Modal } from "antd";
import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IUseditemAddress } from "../../../commons/types/generated/types";
import { IFormData } from "../../units/UsedMarket/create/body/ItemCreateBody";
import { useEffectKakaoMapLoad } from "../hooks/custom/useEffectKakaoMapLoad";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapProps {
  setValue: UseFormSetValue<IFormData>;
  data?: Maybe<IUseditemAddress>;
  isEdit?: boolean;
}

export default function KakaoMap(props: IKakaoMapProps): JSX.Element {
  const [keyword, setKeyword] = useState("서울 시청");
  const [position, setPosition] = useState(props.isEdit ? { lat: props.data?.lat, lng: props.data?.lng } : { lat: 37.56682195069747, lng: 126.97865508922976 });
  const [MapCenter, setMapCenter] = useState({
    center: props.isEdit ? { lat: props.data?.lat, lng: props.data?.lng } : { lat: 37.56682195069747, lng: 126.97865508922976 },
    isPanto: true,
  });

  const [isToggle, changeIsToggle] = useSetIsToggle();
  useEffectKakaoMapLoad(changeIsToggle);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value ?? keyword);
  };

  const onClickKeywordSearch = () => {
    try {
      const ps = new window.kakao.maps.services.Places();
      const placesSearchCB = (data: any, status: kakao.maps.services.Status) => {
        if (status === kakao.maps.services.Status.OK) {
          const searchResult = data[0];

          setMapCenter({
            isPanto: true,
            center: { lat: searchResult.y, lng: searchResult.x },
          });
          setPosition({ lat: searchResult.y, lng: searchResult.x });
          props.setValue("useditemAddress", { lat: searchResult.y, lng: searchResult.x });
        }
      };
      ps.keywordSearch(keyword, placesSearchCB);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "확인후 다시한번 시도해 주세요",
        });
    }
  };

  const onClickMapMarker = (_t: any, mouseEvent: any) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    props.setValue("useditemAddress", { lat: mouseEvent.latLng.getLat(), lng: mouseEvent.latLng.getLng() });
  };
  return (
    <div>
      {isToggle ? (
        <div>
          <Map center={MapCenter.center} isPanto={MapCenter.isPanto} level={3} style={{ width: "500px", height: "360px" }} onClick={onClickMapMarker}>
            {position && <MapMarker position={position} />}
          </Map>
        </div>
      ) : (
        <></>
      )}
      <input type="text" onChange={onChangeKeyword} />

      <button type="button" onClick={onClickKeywordSearch}>
        검색하기
      </button>
    </div>
  );
}
