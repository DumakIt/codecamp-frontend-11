import { Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props): JSX.Element {
  const [keyword, setKeyword] = useState("서울 시청");
  const [position, setPosition] = useState({ lat: 37.56682195069747, lng: 126.97865508922976 });

  const [MapCenter, setMapCenter] = useState({
    center: { lat: 37.56682195069747, lng: 126.97865508922976 },
    isPanto: true,
  });
  const { changeIsToggle, isToggle } = useSetIsToggle();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=bd267c3409ad63bff12f4bc9683e42a5&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        changeIsToggle();
      });
    };
  }, []);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value ?? keyword);
  };

  const onClickKeywordSearch = () => {
    try {
      const ps = new window.kakao.maps.services.Places();
      const placesSearchCB = (data: any, status: kakao.maps.services.Status) => {
        if (status === kakao.maps.services.Status.OK) {
          const searchResult = data[0];

          setMapCenter((prev) => ({
            ...prev,
            center: { lat: searchResult.y, lng: searchResult.x },
          }));
          setPosition({ lat: searchResult.y, lng: searchResult.x });
        }
      };
      ps.keywordSearch(keyword, placesSearchCB);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "검색어를 확인후 다시한번 시도해 주세요",
        });
    }
  };

  const onClickMapMarker = (_t: any, mouseEvent: any) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };
  return (
    <div>
      {isToggle ? (
        <Map center={MapCenter.center} isPanto={MapCenter.isPanto} level={3} style={{ width: "100%", height: "360px" }} onClick={onClickMapMarker}>
          {position && <MapMarker position={position} />}
        </Map>
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
