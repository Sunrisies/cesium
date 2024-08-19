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
  setTimeout(() => {
    const map = new UseCesium(cesiumContainer.value)
    const viewer = map.initMap()
    moveStart(viewer)
    changed(viewer)
    moveEnd(viewer)
    info(viewer)
  }, 50)
})

const moveStart = (viewer) => {
  console.log(viewer, 'viewer')
  viewer.camera.moveStart.addEventListener(() => {
    console.log('camera 开始移动了')
  })
}

const changed = (viewer) => {
  viewer.camera.changed.addEventListener((camera) => {
    console.log(camera, 'camera')
    // 当前高度
    // const percentageChanged = viewer.camera.percentageChanged
    // console.log(percentageChanged, 'percentageChanged')
    // let height = viewer.camera.positionCartographic.height
    // console.log(height, 'camera 改变了')
    // 下面可以写其他的代码了
  })
}

const moveEnd = (viewer) => {
  viewer.camera.moveEnd.addEventListener(() => {
    console.log('camera 移动结束了')
    // info(viewer)
    // cameraToWorldCoordinatesPoint(viewer)
    computeViewRectangle(viewer)
    distanceToBoundingSphere(viewer)
    // flyHome(viewer)
    getMagnitude(viewer)
    // lookLeft(viewer)
    // lookRight(viewer)
    // lookUp(viewer)
    // lookDown(viewer)
    // zoomIn(viewer)
    // zoomOut(viewer)
  })
}
const info = (viewer) => {
  // console.log('camera 信息', viewer.camera.positionCartographic)
  // console.log('camera 位置', viewer.camera.position)
  // console.log('camera 视角', viewer.camera.heading, viewer.camera.pitch, viewer.camera.roll)
  // console.log('camera direction', viewer.camera.direction)
  // console.log('camera DirectionWC', viewer.camera.directionWC)
  // console.log('camera frustum ', viewer.camera.frustum)
  console.log('camera right', viewer.camera.right)
  console.log('camera rightWC ', viewer.camera.rightWC)
}

const cameraToWorldCoordinatesPoint = (viewer) => {
  // 创建一个相机坐标系中的点
  var pointInCameraCoordinates = new Cesium.Cartesian3(100.0, 0.0, 100.0)

  // 创建一个用于存储结果的对象
  var result = new Cesium.Cartesian3()

  // 将相机坐标系中的点转换为世界坐标系中的点
  var pointInWorldCoordinates = viewer.camera.cameraToWorldCoordinatesVector(pointInCameraCoordinates, result)

  // 输出转换后的世界坐标系中的点
  console.log(pointInWorldCoordinates)
  // 或者直接输出 result，因为 pointInWorldCoordinates 和 result 是同一个对象
  console.log(result)
}

const computeViewRectangle = (viewer) => {
  // 获取当前场景的椭球体
  const ellipsoid = viewer.scene.globe.ellipsoid

  // 创建一个用于存储结果的对象
  const result = new Cesium.Rectangle()

  // 计算相机的查看矩形
  const viewRectangle = viewer.camera.computeViewRectangle(ellipsoid, result)

  // 输出查看矩形
  console.log(viewRectangle)
}

const distanceToBoundingSphere = (viewer) => {
  // 获取当前场景的边界球
  const boundingSphere = new Cesium.BoundingSphere()

  // 计算相机到边界球的距离
  const distance = viewer.camera.distanceToBoundingSphere(boundingSphere)

  // 输出距离
  console.log(distance)
}

const flyHome = (viewer) => {
  // 飞回到默认视角
  viewer.camera.flyHome(4)
  console.log('camera 飞回到默认视角')
}

const getMagnitude = (viewer) => {
  // 获取相机的距离
  const magnitude = viewer.camera.getMagnitude()
  console.log(magnitude, '相机的距离')
}
const lookLeft = (viewer) => {
  // 向左旋转相机
  viewer.camera.lookLeft(3)
  console.log('camera 向左旋转', 3)
}

const lookRight = (viewer) => {
  // 向右旋转相机
  viewer.camera.lookRight(4)
  console.log('camera 向右旋转', 4)
}



const lookUp = (viewer) => {
  // 向上旋转相机
  viewer.camera.lookUp(5)
  console.log('camera 向上旋转', 5)
}

const lookDown = (viewer) => {
  // 向下旋转相机
  viewer.camera.lookDown(6)
  console.log('camera 向下旋转', 6)
}
const zoomIn = (viewer) => {
  // 缩小相机
  viewer.camera.zoomIn(2)
  console.log('camera 缩小', 2)
}

const zoomOut = (viewer) => {
  // 放大相机
  viewer.camera.zoomOut(3)
  console.log('camera 放大', 3)
}

// const viewer = ref<Cesium.Viewer | null>(null)
// onMounted(() => {
//   // 创建一个 viewer
//   viewer.value = new Cesium.Viewer(cesiumContainer.value, {
//     // 初始视角
//     initialCamera: new Cesium.PerspectiveCamera({
//       position: Cesium.Cartesian3.fromDegrees(105.0, 35.0, 10000000.0),
//       // position: Cesium.Cartesian3.fromDegrees(LngLat.value[0], LngLat.value[1], 10000000.0),
// const viewer = ref<Cesium.Viewer | null>(null)
// onMounted(() => {
//   // 创建一个 viewer
//   viewer.value = new Cesium.Viewer(cesiumContainer.value, {
//     // 初始视角
//     // initialCamera: new Cesium.PerspectiveCamera({
//     //   position: Cesium.Cartesian3.fromDegrees(105.0, 35.0, 10000000.0),
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
