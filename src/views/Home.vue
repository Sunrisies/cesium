<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
  <div class="absolute top-3 left-3">
    <el-button type="primary" @click="updateMap(title[0])">{{ title[0].title }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UseCesium from '@/hooks/useCesium'
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
let viewer = ref<Cesium.Viewer | null>(null)
type TMapType = 'vec' | 'cva' | 'img' | 'cia' | 'ter' | 'cta' | 'ibo' | 'eva' | 'eia'

type Buttons = {
  title: string
  layer: TMapType
  layout: any
}
const title = ref<Buttons[]>([{ title: '添加天地图影像底图', layer: 'cva', layout: null }])
const cesiumContainer = ref<HTMLDivElement | null>(null)
onMounted(() => {
  setTimeout(() => {
    new UseCesium(cesiumContainer.value)
  }, 50)
})
// onMounted(() => {
//   console.log(viewer, 'viewer')
//   viewer.scene.globe.enableLighting = true // 开启光照
//   viewer.scene.globe.depthTestAgainstTerrain = true // 开启深度测试
//   viewer.scene.debugShowFramesPerSecond = true // 显示帧率
//   setTimeout(() => {
//     console.log(LngLat.value)
//     // viewer!.camera.flyTo({
//     //   destination: Cesium.Cartesian3.fromDegrees(LngLat.value[0], LngLat.value[1], 1000), // 飞行到当前经纬度
//     //   duration: 1, // 飞行时间
//     //   orientation: {
//     //     heading: Cesium.Math.toRadians(0), // 航向角度
//     //     pitch: Cesium.Math.toRadians(-90), // 俯仰角度
//     //     roll: 0 // 翻滚角度
//     //   }
//     // })
//   }, 50)
//   const camera = viewer.scene.camera
//   // camera.flyTo({
//   //   destination: Cesium.Cartesian3.fromDegrees(-73.98580932617188, 40.74843406689482, 363.34038727246224),
//   //   complete: function () {
//   //     setTimeout(function () {
//   //       camera.flyTo({
//   //         destination: Cesium.Cartesian3.fromDegrees(-73.98585975679403, 40.75759944127251, 186.50838555841779),
//   //         orientation: {
//   //           heading: Cesium.Math.toRadians(200.0),
//   //           pitch: Cesium.Math.toRadians(-50.0)
//   //         },
//   //         easingFunction: Cesium.EasingFunction.LINEAR_NONE
//   //       })
//   //     }, 1000)
//   //   }
//   // })
//   console.log(camera, 'camera')
//   viewer.camera.moveStart.addEventListener(() => {
//     console.log('camera 开始移动了')
//   })

//   viewer.camera.changed.addEventListener(() => {
//     // 当前高度
//     let height = viewer.camera.positionCartographic.height
//     console.log(height, 'camera 改变了')
//     // 下面可以写其他的代码了
//   })

//   viewer.camera.moveEnd.addEventListener(() => {
//     console.log('camera 移动结束了')
//   })

//   // viewer.value.scene.screenSpaceCameraController.tiltEventTypes = [
//   //   Cesium.CameraEventType.RIGHT_DRAG,
//   //   Cesium.CameraEventType.PINCH,
//   //   {
//   //     eventType: Cesium.CameraEventType.LEFT_DRAG,
//   //     modifier: Cesium.KeyboardEventModifier.CTRL
//   //   },
//   //   {
//   //     eventType: Cesium.CameraEventType.RIGHT_DRAG,
//   //     modifier: Cesium.KeyboardEventModifier.CTRL
//   //   }
//   // ]
//   const controller = new Cesium.CameraEventAggregator(viewer.canvas)
//   console.log(controller, 'controller')
//   viewer.scene.screenSpaceCameraController.zoomEventTypes = [
//     Cesium.CameraEventType.RIGHT_DRAG, // 鼠标右键拖动
//     // Cesium.CameraEventType.MIDDLE_DRAG,
//     Cesium.CameraEventType.WHEEL, // 滚轮
//     Cesium.CameraEventType.PINCH // 手机上面的两指
//   ]
//   const d = controller.getStartMousePosition(Cesium.CameraEventType.RIGHT_DRAG)
//   console.log(d, 'd')
//   viewer.scene.screenSpaceCameraController.inertiaTranslate = 1 // 平移惯性
//   // viewer.value.scene.screenSpaceCameraController.enableRotate = false // 禁止旋转
//   // wgs84ToWindowCoordinates(viewer.value)
//   // console.log(controller, '1=1=1=1=')
//   // controller.enableLook = false
//   // controller.enableRotate = false
//   viewer.scene.screenSpaceCameraController.inertiaZoom = 0 // 缩放惯性
//   viewer.scene.screenSpaceCameraController.enableTranslate = false
//   viewer.scene.screenSpaceCameraController.enableZoom = true // 控制缩放
//   // controller.enableInputs = false
//   // controller.zoomEventTypes = [
//   //   // Cesium.CameraEventType.RIGHT_DRAG, // 鼠标右键拖动
//   //   Cesium.CameraEventType.MIDDLE_DRAG,
//   //   Cesium.CameraEventType.WHEEL, // 滚轮
//   //   Cesium.CameraEventType.PINCH // 手机上面的两指
//   // ]
//   // console.log(controller, '1=1=1=1111=')

//   // controller.enableTranslate = false
//   // 添加天地图影像底图
//   // var tencentImageryProvider = new Cesium.UrlTemplateImageryProvider({
//   //   url: 'https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=400',
//   //   customTags: {
//   //     sx: function (imageryProvider, x, y, level) {
//   //       return x >> 4
//   //     },
//   //     sy: function (imageryProvider, x, y, level) {
//   //       return ((1 << level) - y) >> 4
//   //     }
//   //   }
//   // })

//   // 使用 ViewportQuad 创建一个显示图片的区域
//   var viewportQuad = new Cesium.ViewportQuad()

//   // 定义了四边形在视口中的位置
//   viewportQuad.rectangle = new Cesium.BoundingRectangle(100, 100, 200, 40)

//   // 添加进画布
//   viewer.scene.primitives.add(viewportQuad)

//   viewportQuad.material = new Cesium.Material({
//     fabric: {
//       type: 'Image',
//       uniforms: {
//         color: new Cesium.Color(1.0, 1.0, 1.0, 1.0),
//         image: Cesium.buildModuleUrl('Assets/Images/bing_maps_credit.png')
//       }
//     }
//   })
//   // 在渲染循环中调用 render 方法
//   // viewer.scene.postRender.addEventListener(function (scene, time) {
//   //   viewportQuad.render(scene.context)
//   // })
// })
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

const wgs84ToWindowCoordinates = (viewer) => {
  const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0)
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction(function (movement) {
    console.log(Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position))
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
}

// const wgs84ToWindowCoordinates = (viewer) => {
//   const scene = widget.scene;
// const ellipsoid = scene.ellipsoid;
// const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0);
// const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
// handler.setInputAction(function(movement) {
//     console.log(Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position));
// }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
//   // 添加一个点
// }
</script>
<style>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
