import * as Cesium from 'cesium'

class UseCesium {
  constructor(private id: string, private viewer: Cesium.Viewer) {
    // this.initMap()
  }
  initMap() {
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YmI0YWE5MS0wMDNlLTQ1YzctYWEyYy0wMmUzNzA3ZTgzMTciLCJpZCI6MTIwMzg1LCJpYXQiOjE2NzI5MDc2NzV9.YvsSYJ-iIpkJdPyiPKdfIvF20fyqacMfF0l_myCnvnM'
    this.viewer = new Cesium.Viewer(this.id, {
      animation: false, // 关闭动画效果
      baseLayerPicker: true, // 关闭底图切换按钮
      fullscreenButton: false, // 关闭全屏按钮
      geocoder: false, // 关闭地理编码器
      homeButton: false, // 关闭默认的地图导航按钮
      infoBox: false, // 关闭信息框
      sceneModePicker: true, // 关闭场景模式切换按钮
      selectionIndicator: false, // 关闭选中指示器
      timeline: false, // 关闭时间轴
      navigationHelpButton: false, // 关闭帮助按钮
      navigationInstructionsInitiallyVisible: false, // 隐藏导航提示
      scene3DOnly: false, // 仅显示三维场景
      shouldAnimate: true // 开启动画效果
      // clock: new Cesium.Clock() // 开启时钟
    })
    this.viewer.scene.globe.enableLighting = true // 开启光照
    this.viewer.scene.globe.depthTestAgainstTerrain = true // 开启深度测试
    this.viewer.scene.debugShowFramesPerSecond = true // 显示帧率
    this.flyTo()
    return this.viewer
  }

  flyTo() {
    const camera = this.viewer.scene.camera
    camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-73.98580932617188, 40.74843406689482, 363.34038727246224),
      complete: function () {
        setTimeout(function () {
          camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-73.98585975679403, 40.75759944127251, 186.50838555841779),
            orientation: {
              heading: Cesium.Math.toRadians(200.0),
              pitch: Cesium.Math.toRadians(-50.0)
            },
            easingFunction: Cesium.EasingFunction.LINEAR_NONE
          })
        }, 1000)
      }
    })
  }
}

export default UseCesium
