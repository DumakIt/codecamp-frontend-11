import Head from "next/head";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(): JSX.Element {
  const [aaa, setAAA] = useState("이태원 맛집");
  const SearchLocation = () => {
    setAAA("코드캠프");
  };

  useEffect(() => {
    const mapContainer = document.getElementById("map");

    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
      isPanto: true,
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(aaa, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();

        var marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(data[0].y, data[0].x),
        });
        bounds.extend(new window.kakao.maps.LatLng(data[0].y, data[0].x));
        map.setBounds(bounds);
        console.log(marker);

        window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          const latlng = mouseEvent.latLng;

          marker.setPosition(latlng);
        });
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bd267c3409ad63bff12f4bc9683e42a5&libraries=services"></script>
      </Head>

      <div id="map" style={{ width: 500, height: 400 }}></div>
      <button type="button" onClick={SearchLocation}>
        dasdas
      </button>
    </div>
  );
}
