// /*
//  * @Description: 更改前请留下你的姓名
//  * @Author: Tokyo
//  * @Date: 2021-05-06 18:01:19
//  * @LastEditTime: 2021-05-06 19:45:28
//  * @LastEditors: Tokyo
//  * @FilePath: \Tokyo_Shelf\config\cesiumConfig.ts
//  */
// import * as Cesium from 'cesium';
// import { createViewer } from '@/utils/cesium';
// import {
//   createGoogleMapsByUrl,
//   creatTiandituImgLabelProvider,
// } from '@/utils/LoadGeoJson';
// const viewer: Cesium.Viewer = new Cesium.Viewer('cesiumContainer', {
//   // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
//   //   url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
//   // }),
//   imageryProvider: createGoogleMapsByUrl(),
//   homeButton: false, // HomeButton小部件
//   selectionIndicator: false, // selectionIndicator小部件
//   baseLayerPicker: false, // 基础图层部件
//   vrButton: false, // vr部件
//   animation: false, // 时钟表
//   timeline: false, // 时钟条
//   fullscreenButton: false, // 全屏部件
//   navigationHelpButton: false, // 导航部件
//   geocoder: false, // Geocoder小部件
//   infoBox: false, // 是否显示点击要素之后显示的信息
//   // showRenderLoopErrors: false,  // 如果为true，则在发生渲染循环错误时，此小部件将自动向包含错误的用户显示HTML面板
//   shouldAnimate: true, // true如果时钟默认情况下应尝试延长仿真时间
//   sceneModePicker: false, // 场景模式之间切换
// });

// viewer.imageryLayers.addImageryProvider(creatTiandituImgLabelProvider());
// export default viewer;
