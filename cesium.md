# Cesium API 分类

## 1. 场景与视图操作
- Scene：场景管理，包括渲染、照明、雾化等。
- Camera：相机控制，包括位置、方向、视角等。
- ScreenSpaceCameraController：屏幕空间相机控制器。

## 2. 地形与影像服务
- TerrainProvider：地形提供者，用于加载和访问地形数据。
- ImageryProvider：影像提供者，用于加载和显示影像图层。

## 3. 几何与图形绘制
- Geometry：几何体，定义形状和结构。
- Appearance：外观，定义材质和渲染样式。
- Material：材质，定义表面的视觉属性。

## 4. 实体与标注
- Entity：实体，表示场景中的一个对象或标注。
- Billboard：标签，用于显示图片或文本。
- Label：文本标注。

## 5. 3D 瓦片集与模型
- Cesium3DTileset：3D 瓦片集，用于加载和管理 3D 瓦片数据。
- Model：模型，用于加载和渲染 3D 模型。

## 6. 动画与时间控制
- Animation：动画控制，包括播放、暂停、速度等。
- Clock：时钟，用于控制场景的时间流逝。

## 7. 交互与用户输入
- ScreenSpaceEventHandler：屏幕空间事件处理器。
- EventHelper：事件帮助器，用于管理事件监听和响应。

## 8. 数据源与图层
- DataSource：数据源，用于加载和管理各种数据。
- ImageryLayer：影像图层，用于管理和显示影像数据。

## 9. 小部件与控件
- Viewer：查看器，集成了多个小部件的 Cesium 场景查看器。
- BaseLayerPicker：基础图层选择器。
- SceneModePicker：场景模式选择器。

## 10. 性能与优化
- FrameRateMonitor：帧率监控器，用于性能监视。
- PerformanceWatchdog：性能监视犬，用于优化性能。

## 11. 地理与地图投影
- GeographicProjection：地理投影，用于坐标转换。
- MapProjection：地图投影，用于地图坐标系统。

## 12. 工具与实用程序
- Math：数学工具，提供各种数学计算功能。
- Cartesian2、Cartesian3、Cartesian4：笛卡尔坐标点。
- defined、defaultValue：检查变量是否已定义，提供默认值。

## 13. 扩展与自定义
- CustomDataSource：自定义数据源。
- Shader：着色器，用于自定义渲染效果。

## 14. 其他服务与集成
- GeocoderService：地理编码服务。
- OpenStreetMapImageryProvider：OpenStreetMap 影像提供者。

## 15. 配置与初始化
- ContextOptions：渲染上下文选项。
- CesiumWidget：Cesium 小部件初始化。

## 16. 辅助类与接口
- CallbackProperty：回调属性。
- Property：属性，用于定义响应式属性。

## 17. 渲染管线与效果
- PostProcessStage：后期处理阶段。
- BlendingState：混合状态，用于控制渲染混合。

## `共17类api, 535个接口`