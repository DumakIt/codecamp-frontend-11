import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
      isPanto: true,
    };

    const map = new window.kakao.maps.Map(container, options);

    var ps = new window.kakao.maps.services.Places();
    ps.keywordSearch("서울시청", placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === window.kakao.maps.services.Status.OK) {
        var bounds = new window.kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    const marker = new window.kakao.maps.Marker({
      position: map.getCenter(),
    });

    marker.setMap(map);
    window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng;

      marker.setPosition(latlng);
    });
  }, []);

  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bd267c3409ad63bff12f4bc9683e42a5"></script>
      </Head>

      <div id="map" style={{ width: 500, height: 400 }}></div>
      {/* <button onClick={SearchLocation}>dasdas</button> */}
    </div>
  );
}
