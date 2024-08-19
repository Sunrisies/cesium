- 在与渲染相关的坐标系之间进行与场景相关的转换的函数。
- 方法：
  - Cesium.SceneTransforms.wgs84ToDrawingBufferCoordinates(scene, position, result) → Cartesian2|undefined
    将世界坐标中的位置转换为绘图缓冲区坐标。当浏览器缩放不是 100% 或在高 DPI 显示器上时，这可能会产生与 SceneTransforms.wgs84ToWindowCooperatives 不同的结果。
    ```javascript
    const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0);
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement) {
        console.log(Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position));
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    ```
  - Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position, result) → Cartesian2|undefined
    将 WGS84 坐标中的位置转换为窗口坐标。这通常用于将 HTML 元素放置在与场景中的对象相同的屏幕位置。
    ```javascript
    const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0);
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement) {
        console.log(Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position));
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    ```
  - Cesium.SceneTransforms.worldToDrawingBufferCoordinates(scene, position, result) → Cartesian2|undefined
    将世界坐标中的位置转换为绘图缓冲区坐标。当浏览器缩放不是 100% 或在高 DPI 显示器上时，这可能会产生与 SceneTransforms.worldToWindowCooperatives 不同的结果。
    ```javascript
    const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0);
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement) {
        console.log(Cesium.SceneTransforms.worldToDrawingBufferCoordinates(scene, position));
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    ```
  - Cesium.SceneTransforms.worldToWindowCoordinates(scene, position, result) → Cartesian3|undefined
    将世界（WGS84 或替代椭球体）坐标中的位置转换为窗口坐标。这通常用于将 HTML 元素放置在与场景中的对象相同的屏幕位置。
    ```javascript
    const position = Cesium.Cartesian3.fromDegrees(0.0, 0.0);
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement) {
        console.log(Cesium.SceneTransforms.worldToWindowCoordinates(scene, position));
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    ```