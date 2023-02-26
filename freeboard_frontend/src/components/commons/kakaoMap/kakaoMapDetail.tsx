import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffectKakaoMapLoad } from "../hooks/custom/useEffectKakaoMapLoad";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";

interface IKakaoMapDetailProps {
  address: { lat: number; lng: number };
}

export default function KakaoMapDetail(props: IKakaoMapDetailProps): JSX.Element {
  const [isToggle, changeIsToggle] = useSetIsToggle();
  useEffectKakaoMapLoad(changeIsToggle);
  console.log(props.address);

  return (
    <div>
      {isToggle && props.address ? (
        <div>
          <Map
            center={{
              lat: props.address.lat,
              lng: props.address.lng,
            }}
            isPanto={true}
            level={3}
            style={{ width: "500px", height: "360px" }}
          >
            <MapMarker
              position={{
                lat: props.address.lat,
                lng: props.address.lng,
              }}
            />
          </Map>
        </div>
      ) : (
        <div>지도를 가져오는중...</div>
      )}
    </div>
  );
}
