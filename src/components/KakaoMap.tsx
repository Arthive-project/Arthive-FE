/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KaKaoMapProps {
  LAT: number;
  LOT: number;
  onAddressChange: (address: string) => void;
}

const KaKaoMap: React.FC<KaKaoMapProps> = ({ LAT, LOT, onAddressChange }) => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new window.kakao.maps.LatLng(LOT, LAT),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      // 좌표를 주소로 변환하는 함수
      const geocoder = new window.kakao.maps.services.Geocoder();
      const coord = new window.kakao.maps.LatLng(LOT, LAT);

      geocoder.coord2Address(
        coord.getLng(),
        coord.getLat(),
        (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const address = result[0].address.address_name;
            onAddressChange(address);

            // 인포윈도우로 주소 정보를 표시
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:200px;text-align:center;padding:6px 0;font-size: 14px;">${address}</div>`,
              position: new window.kakao.maps.LatLng(LOT, LAT),
              zIndex: 1,
            });

            infowindow.open(map);

            // 마커 생성
            const marker = new window.kakao.maps.Marker({
              position: coord,
              map: map,
            });

            // 마커 클릭 시 인포윈도우 표시
            window.kakao.maps.event.addListener(marker, 'click', function () {
              infowindow.open(map, marker);
            });
          }
        }
      );
    }
  }, [LAT, LOT, onAddressChange]);

  return (
    <div
      css={kakaomap}
      id='map'
      style={{ width: '700px', height: '400px' }}
    ></div>
  );
};

export default KaKaoMap;

const kakaomap = css`
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
`;
