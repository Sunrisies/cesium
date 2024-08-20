<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
  <div class="absolute top-3 left-3">
    <el-button type="primary" @click="updateMap(title[0])">{{ title[0].title }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UseCesium from '@/hooks/useCesium'
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
const title = ref<Buttons[]>([{ title: '添加天地图影像底图', layer: 'cva', layout: null }])
const cesiumContainer = ref<HTMLDivElement | null>(null)
onMounted(() => {
  setTimeout(async () => {
    const map = new UseCesium(cesiumContainer.value)
    const viewer = map.initMap()
    // ArcGISTiledElevationTerrainProvider(viewer)
    //  await CesiumTerrainProvider(viewer)
    //  await EllipsoidTerrainProvider(viewer)
    // VRTheWorldTerrainProvider(viewer)
    // ImageryLayerCollection(viewer)
    ImageryLayer(viewer)
  }, 50)
})
const errorEvent = (terrainProvider) => {
  terrainProvider.errorEvent.addEventListener(function (error) {
    // 当加载地形数据时发生错误时，这里的回调函数会被调用
    console.error('地形数据加载错误:', error)
    // 你可以在这里添加更多的错误处理逻辑，比如显示一个错误消息给用户
  })
}
const ArcGISTiledElevationTerrainProvider = async (viewer) => {
  const terrainProvider = await Cesium.ArcGISTiledElevationTerrainProvider.fromUrl(
    'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
    {
      token: 'KED1aF_I4UzXOHy3BnhwyBHU4l5oY6rO6walkmHoYqGp4XyIWUd5YZUC1ZrLAzvV40pR6gBXQayh0eFA8m6vPg..1'
    }
  )
  errorEvent(terrainProvider)
  viewer.terrainProvider = terrainProvider
  console.log(viewer, 'ArcGISTiledElevationTerrainProvider')
}

const CesiumTerrainProvider = async (viewer) => {
  // viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(3956, {
  //   requestVertexNormals: true
  // })
  viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956), {
    requestVertexNormals: true, //请求法线数据
    requestWaterMask: true //请求水体效果所需要的海岸线数据
  })
  const layer = viewer.imageryLayers.addImageryProvider(await Cesium.IonImageryProvider.fromAssetId(3812))
  console.log(viewer.terrainProvider, 'CesiumTerrainProvider')
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(89.26886, 27.58251, 10000.0),
    orientation: {
      //北为0度，90指的是向正东方
      heading: Cesium.Math.toRadians(0),
      //平视为0度，-90指的是俯视
      pitch: Cesium.Math.toRadians(-30),
      roll: 0.0
    }
  })
}
const EllipsoidTerrainProvider = (viewer) => {
  viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
  console.log(viewer.terrainProvider, 'viewer.terrainProvider ')
}
const VRTheWorldTerrainProvider = async (viewer) => {
  const terrainProvider = await Cesium.VRTheWorldTerrainProvider.fromUrl(
    'http://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/',
    {
      credit: 'Terrain data courtesy VT MÄK'
    }
  )
  viewer.terrainProvider = terrainProvider
  consol.log(viewer.terrainProvider, 'VRTheWorldTerrainProvider')
}
const ImageryLayerCollection = async (viewer) => {
  const imageLayers = viewer.imageryLayers
  const imageryLayerCollection = new Cesium.ImageryLayerCollection()
  const esri = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
    'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
  )
  const index = 2
  imageLayers.addImageryProvider(esri, index)
  console.log(imageryLayerCollection, 'imageryLayerCollection', viewer.imageryLayers)
}

const ImageryLayer = (viewer) => {
  const imageryLayer = new Cesium.ImageryLayer(
    new Cesium.OpenStreetMapImageryProvider({
      url: 'https://tile.openstreetmap.org/'
    })
  )
  viewer.scene.imageryLayers.add(imageryLayer)
}
/**
 * 为cesimu添加天地图的底图
 * @param viewer
 * @param layer
 * vec：矢量底图、cva：矢量标注、img：影像底图、cia：影像标注
 * ter：地形晕渲、cta：地形标注、eva：矢量英文标注、eia：影像英文标注
 */
const updateMap = (item: Buttons) => {
  // 添加天地图影像注记底图
  // if (item.title !== '添加天地图影像底图') {
  //   item.title = '添加天地图影像底图'
  //   // 删除
  //   console.log(viewer.value.imageryLayers, item.layout)
  //   viewer.value.imageryLayers.remove(item.layout)
  //   return
  // }
  // item.layout = new Cesium.WebMapTileServiceImageryProvider({
  //   url: `http://t0.tianditu.gov.cn/${item.layer}_w/wmts?tk=d434002ddef854e56c24ce68e885a55b`,
  //   layer: item.layer,
  //   style: 'default',
  //   tileMatrixSetID: 'w',
  //   format: 'tiles',
  //   maximumLevel: 18
  // })
  // item.title = '刪除天地图影像底图'
  // viewer.value.imageryLayers.addImageryProvider(item.layout)
}
</script>
<style>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
