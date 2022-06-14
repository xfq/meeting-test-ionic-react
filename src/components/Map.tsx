import React, { useRef, useEffect } from 'react';
import { Location } from '../models/Location';
import AMapLoader from '@amap/amap-jsapi-loader';

interface MapProps {
  locations: Location[]
  mapCenter: Location
}

const Map: React.FC<MapProps> = ({ mapCenter, locations }) => {
  // const mapEle = useRef<HTMLDivElement>(null);
  // const map = useRef<google.maps.Map>();

  useEffect(() => {
    AMapLoader.load({
      key: "82b99255e536112eb7b1a451cfcb7469", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        var marker, map = new AMap.Map("map-container", {
          resizeEnable: true,
          zoom: 15, //级别
          // center: [mapCenter.lat, mapCenter.lng], //中心点坐标
          center: [116.35178167430497, 39.980318073213354], //中心点坐标
          // center: [116.397428, 39.90923] //初始化地图中心点
        });

        marker = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [116.35178167430497, 39.980318073213354]
      });
      marker.setMap(map);

      })
      .catch((e) => {
        document.getElementById('map-container')!.innerHTML = '<h1 style="text-align:center;">地图初始化失败！</h1>';

        console.log(e);
      });
  }, [mapCenter, locations]);

  return (
    <div id="map-container" className="map-canvas show-map"></div>
  );
}

export default Map;
