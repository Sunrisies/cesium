<template>
  <div id="cesiumContainer"></div>
  <div class="absolute top-3 left-3">
    <el-button type="primary" @click="updateMap(title[0])">{{ title[0].title }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as Cesium from 'cesium'
const LngLat = ref([])
// 获取当前的经纬度
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (event) => {
      console.log(event.coords.latitude + ', ' + event.coords.longitude)
      LngLat.value = [event.coords.longitude, event.coords.latitude]
    },
    function geoError(event) {
      console.log('Error code ' + event.code + '. ' + event.message)
    }
  )
}
let viewer: Cesium.Viewer = ref(null)
type TMapType = 'vec' | 'cva' | 'img' | 'cia' | 'ter' | 'cta' | 'ibo' | 'eva' | 'eia'

type Buttons = {
  title: string
  layer: TMapType
  layout:any
}
const title = ref<Buttons[]>([{ title: '添加天地图影像底图', layer: 'cva',layout:null }])
onMounted(() => {
  viewer.value = new Cesium.Viewer('cesiumContainer', {
    animation: false, // 关闭动画效果
    baseLayerPicker: false, // 关闭底图切换按钮
    fullscreenButton: false, // 关闭全屏按钮
    geocoder: false, // 关闭地理编码器
    homeButton: false, // 关闭默认的地图导航按钮
    infoBox: false, // 关闭信息框
    sceneModePicker: false, // 关闭场景模式切换按钮
    selectionIndicator: false, // 关闭选中指示器
    timeline: false, // 关闭时间轴
    navigationHelpButton: false, // 关闭帮助按钮
    navigationInstructionsInitiallyVisible: false, // 隐藏导航提示
    scene3DOnly: true, // 仅显示三维场景
    shouldAnimate: true, // 开启动画效果
    clock: new Cesium.Clock() // 开启时钟
  })
  viewer.value.scene.globe.enableLighting = true // 开启光照
  viewer.value.scene.globe.depthTestAgainstTerrain = true // 开启深度测试
  viewer.value.scene.debugShowFramesPerSecond = true // 显示帧率
  setTimeout(() => {
    console.log(LngLat.value)
    viewer.value.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(LngLat.value[0], LngLat.value[1], 1000), // 飞行到当前经纬度
      duration: 1, // 飞行时间
      orientation: {
        heading: Cesium.Math.toRadians(0), // 航向角度
        pitch: Cesium.Math.toRadians(-90), // 俯仰角度
        roll: 0 // 翻滚角度
      }
    })
  }, 50)
  // var tencentImageryProvider = new Cesium.UrlTemplateImageryProvider({
  //   url: 'https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=400',
  //   customTags: {
  //     sx: function (imageryProvider, x, y, level) {
  //       return x >> 4
  //     },
  //     sy: function (imageryProvider, x, y, level) {
  //       return ((1 << level) - y) >> 4
  //     }
  //   }
  // })
})
/**
 * 为cesimu添加天地图的底图
 * @param viewer
 * @param layer
 * vec：矢量底图、cva：矢量标注、img：影像底图、cia：影像标注
 * ter：地形晕渲、cta：地形标注、eva：矢量英文标注、eia：影像英文标注
 */
const updateMap = (item: Buttons) => {
  // 添加天地图影像注记底图
  if (item.title !== '添加天地图影像底图') {
    item.title = '添加天地图影像底图'
    // 删除
    console.log(viewer.value.imageryLayers,item.layout)
    viewer.value.imageryLayers.remove(item.layout)
    return
  }
  item.layout = new Cesium.WebMapTileServiceImageryProvider({
    url: `http://t0.tianditu.gov.cn/${item.layer}_w/wmts?tk=d434002ddef854e56c24ce68e885a55b`,
    layer:item.layer,
    style: 'default',
    tileMatrixSetID: 'w',
    format: 'tiles',
    maximumLevel: 18
  })
  item.title = '刪除天地图影像底图'
  viewer.value.imageryLayers.addImageryProvider(item.layout)
}
</script>
<style>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
