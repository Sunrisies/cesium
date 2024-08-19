# new Cesium.Camera(scene)

# 实例化一个新的 Cesium.Camera 对象，并传入一个 Cesium.Scene 对象作为参数。

```javascript
const camera = new Cesium.Camera(scene)
camera.position = new Cesium.Cartesian3()
camera.direction = Cesium.Cartesian3.negate(Cesium.Cartesian3.UNIT_Z, new Cesium.Cartesian3())
camera.up = Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_Y)
camera.frustum.fov = Cesium.Math.PI_OVER_THREE
camera.frustum.near = 1.0
camera.frustum.far = 2.0
```

## 属性

### Cesium.Camera.DEFAULT_OFFSET:HeadingPitchRange

- 当相机飞到包含边界球的位置时使用的默认航向/俯仰/范围。

### Cesium.Camera.DEFAULT_VIEW_FACTOR : number

- 一个标量，用于乘以相机位置，并在设置相机查看矩形后将其加回来。值为零意味着相机将查看整个 Camera#DEFAULT_VIEW_RECTANGLE ，大于零的值会将其移至远离范围的位置，小于零的值会将其移至靠近范围的位置。

### Cesium.Camera.DEFAULT_VIEW_RECTANGLE : Rectangle

- 当相机飞到包含边界球的位置时使用的默认查看矩形。

### changed : Event

- 当相机的位置、方向、视角、视口等属性发生变化时触发的事件。

### constrainedAxis : Cartesian3|undefined

- 约束相机的轴。如果设置了这个属性，相机只能在这个轴上移动。

### defaultLookAmount : number

- 相机默认的俯仰角。
- 默认值： Math . PI / 60.0

### defaultMoveAmount : number

- 相机默认的移动距离。
- 默认值： 10000000.0

### defaultRotateAmount : number

- 相机默认的旋转角度。
- 默认值： Math . PI / 360.0

### defaultZoomAmount : number

- 相机默认的缩放距离。
- 默认值： 10000000.0

### direction : Cartesian3

- 相机的方向。

### directionWC : Cartesian3

- 相机的方向，以世界坐标系表示。

### frustum : PerspectiveFrustum|PerspectiveOffCenterFrustum|OrthographicFrustum

- 视野中的空间区域。
- 默认值: PerspectiveFrustum()

### heading : number

- 获取以弧度表示的相机航向。

### inverseTransform : Matrix4

- 获取逆相机变换。
- 默认值: Matrix4.IDENTITY

### inverseViewMatrix : Matrix4

- 获取逆视图矩阵。

### maximumZoomFactor : number

- 该系数乘以地图大小，用于确定从表面缩小时限制相机位置的位置。默认值为 1.5。仅对 2D 有效且地图可旋转。
- 默认值： 1.5

### moveEnd : Event

- 当相机移动结束时触发的事件。

### moveStart : Event

- 当相机移动开始时触发的事件。

### percentageChanged : number

- 在引发 changed 事件之前相机必须更改的量。该值是 [0, 1] 范围内的百分比。
- 默认值: 0.5

### pitch : number

- 获取以弧度表示的相机俯仰角。

### position : Cartesian3

- 相机的位置。

### positionCartographic : Cartographic

- 获取相机的`Cartographic`位置，经度和纬度以弧度表示，高度以米表示。在 2D 和哥伦布视图中，当相机位于地图之外时，返回的经度和纬度可能会超出有效经度和纬度范围。

### positionWC : Cartesian3

- 获取相机在世界坐标中的位置。

### right : Cartesian3

- 相机的正确方向。

### rightWC : Cartesian3

- 获取世界坐标中相机的正确方向。

### roll : number

- 获取以弧度表示的相机滚转角。

### transform : Matrix4

- 获取相机的参考系。该变换的逆变换被附加到视图矩阵中。
- 默认值: Matrix4.IDENTITY

### up : Cartesian3

- 相机的上方向。

### upWC : Cartesian3

- 获取世界坐标中相机的上方向。

### viewMatrix : Matrix4

- 获取视图矩阵。

## 方法

### cameraToWorldCoordinates(cartesian, result) → Cartesian4

- 将矢量或点从相机的参考系变换到世界坐标。
- `cartesian` (Cartesian3|Cartesian4) - 要转换的矢量或点。
- `result` (Cartesian4) - 用于存储结果的可选参数。
- 返回: Cartesian4 - 转换后的矢量或点。

### cameraToWorldCoordinatesPoint(cartesian, result) → Cartesian3

- 将点从相机的参考系变换到世界坐标。
- `cartesian` (Cartesian3) - 要转换的点。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3 - 转换后的点。

### cameraToWorldCoordinatesVector(cartesian, result) → Cartesian3

- 将矢量从相机的参考系变换到世界坐标。
- `cartesian` (Cartesian3) - 要转换的矢量。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3 - 转换后的矢量。

### cancelFlight()

- 取消当前的飞行。

### completeFlight()

- 完成当前的相机飞行并将相机立即移动到最终目的地。如果没有正在进行的航班，则此功能不执行任何操作。

### computeViewRectangle(ellipsoid, result) → Rectangle|undefined

- 计算相机的查看矩形。
- `ellipsoid` (Ellipsoid) - 地球椭球体。
- `result` (Rectangle) - 用于存储结果的可选参数。
- 返回: Rectangle|undefined - 相机的查看矩形，如果计算失败则返回 undefined。

### distanceToBoundingSphere(boundingSphere) → number

- 计算相机到边界球的距离。
- `boundingSphere` (BoundingSphere) - 边界球。
- 返回: number - 相机到边界球的距离。

### flyHome(duration)

- 飞往相机的默认位置。
- 将相机飞至主视图。使用 Camera#.DEFAULT_VIEW_RECTANGLE 设置 3D 场景的默认视图。 2D 和哥伦布视图的主视图显示整个地图
- `duration` (number) - 飞行持续时间（秒）。

### flyTo(options)

- 飞往指定的位置、方向、视角、视口等属性。
- `options` (Object) - 飞行选项。
  - `destination` (Cartesian3) - 目的地。
  - `orientation` (HeadingPitchRange) - 航向、俯仰和范围。
  - `endTransform` (Matrix4) - 飞行结束时的参考系。
  - `maximumHeight` (number) - 飞行高度限制。
  - `pitchAdjustHeight` (number) - 俯仰调整高度。
  - `flyOverLongitude` (number) - 飞过经度。
  - `flyOverLongitudeWeight` (number) - 飞过经度权重。
  - `duration` (number) - 飞行持续时间（秒）。
  - `complete` (function) - 飞行完成时的回调函数。
  - `cancel` (function) - 飞行取消时的回调函数。
  - `easingFunction` - 控制如何在飞行期间内插时间。

### flyToBoundingSphere(boundingSphere, options)

- 将相机飞行到当前视图包含所提供的边界球的位置。
- `boundingSphere` (BoundingSphere) - 边界球。

- `options` (Object) - 飞行选项。
  - `offset` (HeadingPitchRange) - 相机相对于边界球的偏移。
  - `maximumHeight` (number) - 飞行高度限制。
  - `pitchAdjustHeight` (number) - 俯仰调整高度。
  - `flyOverLongitude` (number) - 飞过经度。
  - `flyOverLongitudeWeight` (number) - 飞过经度权重。
  - `duration` (number) - 飞行持续时间（秒）。
  - `complete` (function) - 飞行完成时的回调函数。
  - `cancel` (function) - 飞行取消时的回调函数。
  - `easingFunction` - 控制如何在飞行期间内插时间。
  - `endTransform` (Matrix4) - 飞行结束时的参考系。

### getMagnitude() → number

- 获取相机位置的大小。在 3D 中，这是矢量幅度。在 2D 和哥伦布视图中，这是到地图的距离。
- 返回: number - 相机位置的大小。

### getPickRay(windowPosition, result) → Ray

- 获取窗口坐标系中的点的射线。
- 创建一条从相机位置穿过世界坐标中 windowPosition 处像素的射线。
- `windowPosition` (Cartesian2) - 窗口坐标。
- `result` (Ray) - 用于存储结果的可选参数。
- 返回: Ray - 射线。

### getPixelSize(boundingSphere, drawingBufferWidth, drawingBufferHeight) → number

- 获取相机到指定位置的像素大小。
- `boundingSphere` (BoundingSphere) - 边界球。
- `drawingBufferWidth` (number) - 绘制缓冲区宽度。
- `drawingBufferHeight` (number) - 绘制缓冲区高度。
- 返回: number - 相机到指定位置的像素大小。

### getRectangleCameraCoordinates(rectangle, result) → Cartesian3

- 获取在椭球体或地图上查看矩形所需的相机位置
- `rectangle` (Rectangle) - 矩形。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3 - 相机位置。

### look(axis, angle)

- 将每个相机的方向向量绕 axis 旋转 angle

- `axis` (Cartesian3) - 旋转轴。
- `angle` (number) - 旋转角度。

### lookAt(target, offset)

- 调整相机的方向，使其朝向指定的目标位置。
- `target` (Cartesian3) - 目标位置。
- `offset` (HeadingPitchRange) - 相机相对于目标的偏移。

```javascript
// 1. Using a cartesian offset
const center = Cesium.Cartesian3.fromDegrees(-98.0, 40.0)
viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, -4790000.0, 3930000.0))

// 2. Using a HeadingPitchRange offset
const center = Cesium.Cartesian3.fromDegrees(-72.0, 40.0)
const heading = Cesium.Math.toRadians(50.0)
const pitch = Cesium.Math.toRadians(-20.0)
const range = 5000.0
viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range))
```

### lookAtTransform(transform, offset)
- 使用目标和变换矩阵设置相机位置和方向。偏移量可以是笛卡尔坐标或航向/俯仰/范围。如果偏移量是笛卡尔坐标系，则它是距变换矩阵定义的参考系中心的偏移量。如果偏移是航向/俯仰/范围，则航向和俯仰角在变换矩阵定义的参考系中定义。航向是与 y 轴的角度并朝 x 轴增加。俯仰角是相对于 xy 平面的旋转。正俯仰角位于平面下方。负俯仰角位于平面上方。范围是距中心的距离。在 2D 中，必须有一个自顶向下的视图。相机将放置在参考系中心上方。目标之上的高度将是偏移量。航向将根据偏移量确定。如果无法根据偏移确定航向，则航向将为北。
- `transform` (Matrix4) - 目标的变换矩阵。
- `offset` (HeadingPitchRange) - 相机相对于目标的偏移。

```javascript
// 1. Using a cartesian offset
const transform = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-98.0, 40.0));
viewer.camera.lookAtTransform(transform, new Cesium.Cartesian3(0.0, -4790000.0, 3930000.0));

// 2. Using a HeadingPitchRange offset
const transform = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-72.0, 40.0));
const heading = Cesium.Math.toRadians(50.0);
const pitch = Cesium.Math.toRadians(-20.0);
const range = 5000.0;
viewer.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(heading, pitch, range));
```

### lookLeft(amount)
- 如果不在 2D 模式下，则将相机绕其向上向量旋转一定量（以弧度为单位），并沿其右向量的相反方向旋转。
- `amount` (number) - 旋转角度。

### lookRight(amount) 

- 如果不在 2D 模式下，则将相机绕其向上向量旋转一定量（以弧度为单位），并沿其左向量的相反方向旋转。
- `amount` (number) - 旋转角度。

### lookUp(amount)

- 如果不在 2D 模式下，则将相机绕其右向量旋转一定量（以弧度为单位），并沿其上向量的相反方向旋转。
- `amount` (number) - 旋转角度。

### move(direction, amount) 
- 沿direction将相机的位置平移amount 

- `direction` (Cartesian3) - 方向。
- `amount` (number) - 移动距离。

### moveBackward(amount) 

- 向相机移动指定距离。
- `amount` (number) - 移动距离。

### moveDown(amount)

- 沿相机向上向量的相反方向将相机位置平移一定amount 。。
- `amount` (number) - 下移距离。

### moveForward(amount) 
- 沿着相机的视图amount平移相机的位置。在 2D 模式下，这将放大相机而不是平移相机的位置。
- `amount` (number) - 前移距离。

### moveLeft(amount)

- 沿相机右矢量的相反方向将相机位置平移amount 。
- `amount` (number) - 左移距离。

### moveRight(amount)

- 沿着相机的右矢量将相机的位置平移amount 。
- `amount` (number) - 右移距离。

### moveUp(amount)

- 沿着相机的上矢量将相机的位置平移amount 。
- `amount` (number) - 上移距离。


### pickEllipsoid(windowPosition, ellipsoid, result) → Cartesian3|undefined
- 选择一个椭球体或地图。
- `windowPosition` (Cartesian2) - 窗口坐标。
- `ellipsoid` (Ellipsoid) - 椭球体。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3|undefined - 选择的点，如果没有选择则返回 undefined。

### rotate(axis, angle)
- 将相机绕axis旋转angle 。相机位置到相机参考系中心的距离保持不变。
- `axis` (Cartesian3) - 旋转轴。
- `angle` (number) - 旋转角度。

### rotateDown(angle) 
- 向相机的上方向旋转一定角度。
- `angle` (number) - 旋转角度。

### rotateLeft(angle)
- 向相机的左方向旋转一定角度。
- `angle` (number) - 旋转角度。

### rotateRight(angle)
- 向相机的右方向旋转一定角度。
- `angle` (number) - 旋转角度。

### rotateUp(angle)
- 向相机的上方向旋转一定角度。
- `angle` (number) - 旋转角度。


### setView(options)
- 设置相机的视角、视口等属性。
- `options` (Object) - 视角、视口等属性。
  - `orientation` (Cartesian3) - 包含方向和向上属性或航向、俯仰和滚动属性的对象。默认情况下，方向将指向 朝向 3D 框架的中心以及哥伦布视图中的负 z 方向。向上方向将在 3D 中指向当地正北 哥伦布视图中的 y 方向。在无限滚动模式下，2D 中不使用方向。
  - `destination` 相机在世界坐标中的最终位置或从自上而下视图中可见的矩形
  - `endTransform` 表示相机参考系的变换矩阵。
  - `convert` 是否将目的地从世界坐标转换为场景坐标（仅在不使用 3D 时相关）。默认为true 。

```javascript
// 1. Set position with a top-down view
viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
});

// 2 Set view with heading, pitch and roll
viewer.camera.setView({
    destination : cartesianPosition,
    orientation: {
        heading : Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north)
        pitch : Cesium.Math.toRadians(-90),    // default value (looking down)
        roll : 0.0                             // default value
    }
});

// 3. Change heading, pitch and roll with the camera position remaining the same.
viewer.camera.setView({
    orientation: {
        heading : Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north)
        pitch : Cesium.Math.toRadians(-90),    // default value (looking down)
        roll : 0.0                             // default value
    }
});


// 4. View rectangle with a top-down view
viewer.camera.setView({
    destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
});

// 5. Set position with an orientation using unit vectors.
viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 5000.0),
    orientation : {
        direction : new Cesium.Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
        up : new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339)
    }
});
```

### switchToOrthographicFrustum()
- 将平截头体/投影切换为正交。此函数在 2D 中是无操作的，并且始终是正交的。

### switchToPerspectiveFrustum()
- 将正交切换为平截头体/投影。此函数在 2D 中是无操作的，并且始终是正交的。

### twistLeft(amount)
- 将相机绕其方向矢量逆时针旋转一定量（以弧度为单位）。
- `amount` (number) - 旋转角度。

### twistRight(amount)
- 将相机绕其方向矢量顺时针旋转一定量（以弧度为单位）。
- `amount` (number) - 旋转角度。

### viewBoundingSphere(boundingSphere, offset)
- 设置相机，使当前视图包含提供的边界球体。
- 在 2D 中，必须有一个自顶向下的视图。相机将放置在目标上方，俯视。目标之上的高度将是范围。航向将根据偏移量确定。如果无法根据偏移确定航向，则航向将为北。
- `boundingSphere` (BoundingSphere) - 边界球。
- `offset` (HeadingPitchRange) - 相机相对于边界球的偏移。

### worldToCameraCoordinates(cartesian, result) → Cartesian4
- 将矢量或点从世界坐标变换到相机的参考系。
- `cartesian` (Cartesian3) - 矢量或点。
- `result` (Cartesian4) - 用于存储结果的可选参数。
- 返回: Cartesian4 - 相机坐标。

### worldToCameraCoordinatesPoint(cartesian, result) → Cartesian3
- 将点从世界坐标变换到相机的参考系。
- `cartesian` (Cartesian3) - 点。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3 - 相机坐标。

### worldToCameraCoordinatesVector(cartesian, result) → Cartesian3
- 将矢量从世界坐标变换到相机的参考系。
- `cartesian` (Cartesian3) - 矢量。
- `result` (Cartesian3) - 用于存储结果的可选参数。
- 返回: Cartesian3 - 相机坐标。


### zoomIn(amount) 
- 沿相机视图矢量的缩放amount 放大 。
- `amount` (number) - 移动量。默认为defaultZoomAmount 。

### zoomOut(amount)
- 沿相机视图矢量的缩小amount 。
- `amount` (number) - 移动量。默认为defaultZoomAmount 。















### lookAt(target, offset)

- 调整相机的方向，使其朝向指定的目标位置。
- `target` (Cartesian3) - 目标位置。
- `offset` (HeadingPitchRange) - 相机相对于目标的偏移。

### lookAtTransform(transform, offset)

- 调整相机的方向，使其朝向指定的变换。
- `transform` (Matrix4) - 变换。
- `offset` (HeadingPitchRange) - 相机相对于变换的偏移。

### moveBackward(amount)

- 向相机移动指定距离。
- `amount` (number) - 移动距离。



### moveForward(amount)

- 向相机前移指定距离。
- `amount` (number) - 前移距离。

### moveLeft(amount)

- 沿相机右矢量的相反方向将相机位置平移amount 。
- `amount` (number) - 左移距离。

### moveRight(amount)

- 沿着相机的右矢量将相机的位置平移amount 。
- `amount` (number) - 右移距离。

### moveUp(amount)

- 向相机上移指定距离。
- `amount` (number) - 上移距离。

### moveTo(cartesian, options)

- 移动相机到指定的位置。
- `cartesian` (Cartesian3) - 目的地。
- `options` (Object) - 飞行选项。
  - `duration` (number) - 飞行持续时间（秒）。
  - `complete` -`Camera.FlightCompleteCallback` - 飞行完成时的回调函数。
  - `cancel` - `Camera.FlightCancelledCallback` - 飞行取消时的回调函数。
  - `easingFunction` - 控制如何在飞行期间内插时间。

### rotate(angle, axis)

- 旋转相机。
- `angle` (number) - 旋转角度。
- `axis` (Cartesian3) - 旋转轴。

### rotateLeft(angle)

- 向左旋转相机。
- `angle` (number) - 旋转角度。

### rotateRight(angle)

- 向右旋转相机。
- `angle` (number) - 旋转角度。

### setDirection(cartesian)

- 设置相机的方向。
- `cartesian` (Cartesian3) - 方向。

### setPosition(cartesian)

- 设置相机的位置。
- `cartesian` (Cartesian3) - 位置。

### setTransform(transform)

- 设置相机的参考系。
- `transform` (Matrix4) - 参考系。


### Cesium.Camera.FlightCancelledCallback()
- 飞行取消时的回调函数。

### Cesium.Camera.FlightCompleteCallback()
- 飞行完成时的回调函数。