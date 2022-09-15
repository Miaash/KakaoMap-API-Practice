/*global kakao*/
import React, { useEffect } from "react";
import { markerdata } from "./markerData";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    // 지도를 표시할 div
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.54726710211632, 127.04176772063606), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(container, options); // 지도 생성
    // 마커 생성 -> marker.serMap(map)을 사용하지 않고 markerdata를 map()메서드를 사용해 뿌려준다.
    markerdata.map((el) => {
      const marker = new kakao.maps.Marker({
        map: map, // 마커가 표시될 지도
        position: new kakao.maps.LatLng(el.lat, el.lng), // 마커가 표시될 위치
        title: el.title, // 마커에 hover시 나타날 title
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: el.title, //윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        infowindowOpen(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        infowindowClose(infowindow)
      );
    });

    // 인포윈도우를 나타내는 클로저함수
    function infowindowOpen(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저 함수
    function infowindowClose(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return (
    <div>
      <div id="map" style={{ width: "700px", height: "500px" }}></div>
    </div>
  );
}
