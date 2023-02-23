import { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props): JSX.Element {
  const [search, setSearch] = useState("서울 시청");
  const searchRef = useRef<HTMLInputElement>(null);
  const SearchLocation = () => {
    setSearch(searchRef.current?.value ?? search);
  };
  const [isopen, setIsopen] = useState(false);
  const [state, setState] = useState({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=bd267c3409ad63bff12f4bc9683e42a5&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        setIsopen(true);
      });
    };
  }, []);

  return (
    <div>
      {isopen ? <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}></Map> : <></>}
      <input type="text" ref={searchRef} />
      <button type="button" onClick={SearchLocation}>
        검색하기
      </button>
    </div>
  );
}
