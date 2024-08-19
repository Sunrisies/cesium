# new Cesium.ScreenSpaceCameraController(scene);

> 根据画布上的鼠标输入修改相机位置和方向。

### 属性:

- bounceAnimationTime : number 反弹动画时间，单位：秒
  - 设置 2D 和哥伦布视图中反弹动画的持续时间（以秒为单位）。
  - 默认值为 3.0 秒。
- enableCollisionDetection : boolean 是否开启碰撞检测

  - 禁用后， maximumZoomDistance 和 minimumZoomDistance 的值将被忽略。
  - 默认值为 true。

- enableInputs : boolean 是否开启输入

  - 如果为 true，则有条件地允许使用标志 enableTranslate、enableZoom、enableRotate、enableTilt 和 enableLook 进行输入。如果为 false，则禁用所有输入。注意：此设置适用于临时用例，例如相机飞行和区域拖动选择（请参阅拾取演示）。它通常在此类事件开始时设置为 false，并在完成时设置为 true。要在摄像机飞行结束后保持输入禁用，您必须使用其他布尔值（enableTranslate、enableZoom、enableRotate、enableTilt 和 enableLook）。
  - 禁用后， 视角控制、旋转、倾斜、平移和缩放将被禁用。
  - 默认值为 true。

- enableLook : boolean 是否开启视角控制

  - 如果为 true，则允许用户使用自由查看。如果为 false，则只能通过平移或旋转来更改相机视图方向。该标志仅适用于 3D 和 Columbus 视图模式。
  - 默认值为 true。

- enableRotate : boolean 是否开启旋转

  - 如果为 true，则允许用户旋转世界，从而平移用户的位置。该标志仅适用于 2D 和 3D。
  - 默认值为 true。

- enableTranslate : boolean 是否开启平移

  - 如果为 true，则允许用户在地图上平移。如果为 false，则相机保持锁定在当前位置。该标志仅适用于 2D 和 Columbus 视图模式。
  - 默认值为 true。

- enableZoom : boolean 是否开启缩放

  - 如果为 true，则允许用户放大和缩小。如果为 false，相机将锁定到距椭球体的当前距离。
  - 默认值为 true。

- enableTilt : boolean 是否开启倾斜

  - 如果为 true，则允许用户倾斜相机。如果为 false，则相机将锁定到当前航向。该标志仅适用于 3D 和哥伦布视图。
  - 默认值为 true。

- inertiaSpin : number 自转惯性

  - 范围[0, 1)中的参数，用于确定相机由于惯性将继续旋转多长时间。当值为零时，相机将没有惯性。
  - 默认值为 0.9。

- inertiaTranslate : number 平移惯性

  - 范围[0, 1)中的参数，用于确定相机由于惯性将继续移动多长距离。当值为零时，相机将没有惯性。
  - 默认值为 0.9。

- inertiaZoom : number 缩放惯性

  - 范围[0, 1)中的参数，用于确定相机由于惯性将继续缩放多长距离。当值为零时，相机将没有惯性。
  - 默认值为 0.8。

- lookEventTypes : CameraEventType|Array|undefined 视角事件类型

  ```js
  允许用户更改相机观看方向的输入。这仅适用于 3D 和 Columbus 视图模式。
  可选值：
  - CameraEventType.LEFT_DRAG : 按下鼠标左键，然后移动鼠标并释放按钮。
  - CameraEventType.MIDDLE_DRAG : 按下鼠标中键，然后移动鼠标并释放按钮。
  - CameraEventType.RIGHT_DRAG : 按下鼠标右键，然后移动鼠标并释放按钮。
  - CameraEventType.WHEEL : 使用鼠标滚轮。
  - CameraEventType.PINCH : 使用触控板或鼠标滚轮缩放。
  ```

- maximumMovementRatio : number 最大移动比例

  - 范围[0, 1)中的参数，用于将各种用户输入的范围限制为每个动画帧的窗口宽度/高度的百分比。这有助于在低帧速率情况下保持对相机的控制。
  - 默认值为 0.1。

- maximumZoomDistance : number 最大缩放距离

  - 变焦时相机位置的最大幅度（以米为单位）。默认为正无穷大。
  - 默认值为 POSITIVE_INFINITY

- minimumCollisionTerrainHeight : number 最小碰撞地形高度

  - 在测试与地形碰撞之前相机必须达到的最小高度。当使用除 WGS84 之外的另一个椭球体时，默认为 scene.ellipsoid.minimumRadius \* 0.0025。
  - 默认值为 15000.0 or scene . ellipsoid . minimumRadius \* 0.0025 。

- minimumPickingTerrainDistanceWithInertia : number 最小拾取地形距离惯性

  - 当惯性变焦时，在测试与地形碰撞之前相机必须保持的最小距离。当使用除 WGS84 之外的另一个椭球体时，默认为 scene.ellipsoid.minimumRadius \* 0.00063。
  - 默认值为 4000.0 or scene . ellipsoid . minimumRadius \* 0.00063

- minimumPickingTerrainHeight : number 最小拾取地形高度

  - 在测试与地形碰撞之前相机必须达到的最小高度。当使用除 WGS84 之外的另一个椭球体时，默认为 scene.ellipsoid.minimumRadius \* 0.0025。
  - 默认值为 15000.0 or scene . ellipsoid . minimumRadius \* 0.0025 。

- minimumTrackBallHeight : number 最小旋转球高度

  - 当点击来自天空或太空时，从旋转轨迹球切换到自由观察之前相机必须达到的最小高度。当使用除 WGS84 之外的另一个椭球体时，默认为 ellipsoid.minimumRadius \* 1.175。
  - 默认值为 7500000.0 or scene . ellipsoid . minimumRadius \* 1.175

- minimumZoomDistance : number 最小缩放距离

  - 变焦时相机位置的最小幅度（以米为单位）。默认为 1.0。
  - 默认值为 1.0

- rotateEventTypes : CameraEventType|Array|undefined

  - 允许用户围绕地球或其他对象旋转的输入。这仅适用于 3D 和哥伦布视图模式。
  - 允许用户旋转相机的输入。这仅适用于 2D 和 3D。
  - 可选值：
    - CameraEventType.LEFT_DRAG : 按下鼠标左键，然后移动鼠标并释放按钮。
    - CameraEventType.MIDDLE_DRAG : 按下鼠标中键，然后移动鼠标并释放按钮。
    - CameraEventType.RIGHT_DRAG : 按下鼠标右键，然后移动鼠标并释放按钮。
    - CameraEventType.WHEEL : 使用鼠标滚轮。
    - CameraEventType.PINCH : 使用触控板或鼠标滚轮缩放。
  - 默认值: CameraEventType.LEFT_DRAG

- tiltEventTypes : CameraEventType|Array|undefined

  - 允许用户倾斜相机的输入。这仅适用于 3D 和哥伦布视图模式。
  - 可选值：
    - CameraEventType.LEFT_DRAG : 按下鼠标左键，然后移动鼠标并释放按钮。
    - CameraEventType.MIDDLE_DRAG : 按下鼠标中键，然后移动鼠标并释放按钮。
    - CameraEventType.RIGHT_DRAG : 按下鼠标右键，然后移动鼠标并释放按钮。
    - CameraEventType.WHEEL : 使用鼠标滚轮。
    - CameraEventType.PINCH : 使用触控板或鼠标滚轮缩放。
  - 默认值: [CameraEventType.MIDDLE_DRAG, CameraEventType.PINCH, { eventType : CameraEventType.LEFT_DRAG, modifier : KeyboardEventModifier.CTRL }, { eventType : CameraEventType.RIGHT_DRAG, modifier : KeyboardEventModifier.CTRL }]

- translateEventTypes : CameraEventType|Array|undefined

  - 允许用户平移相机的输入。这仅适用于 2D 和 Columbus 视图模式。
  - 可选值：
    - CameraEventType.LEFT_DRAG : 按下鼠标左键，然后移动鼠标并释放按钮。
    - CameraEventType.MIDDLE_DRAG : 按下鼠标中键，然后移动鼠标并释放按钮。
    - CameraEventType.RIGHT_DRAG : 按下鼠标右键，然后移动鼠标并释放按钮。
    - CameraEventType.WHEEL : 使用鼠标滚轮。
    - CameraEventType.PINCH : 使用触控板或鼠标滚轮缩放。
  - 默认值: CameraEventType.LEFT_DRAG

- zoomEventTypes : CameraEventType|Array|undefined
  - 允许用户缩放相机的输入。
  - 可选值：
    - CameraEventType.LEFT_DRAG : 按下鼠标左键，然后移动鼠标并释放按钮。
    - CameraEventType.MIDDLE_DRAG : 按下鼠标中键，然后移动鼠标并释放按钮。
    - CameraEventType.RIGHT_DRAG : 按下鼠标右键，然后移动鼠标并释放按钮。
    - CameraEventType.WHEEL : 使用鼠标滚轮。
    - CameraEventType.PINCH : 使用触控板或鼠标滚轮缩放。
  - 默认值: [ CameraEventType . RIGHT_DRAG , CameraEventType . WHEEL , CameraEventType . PINCH ]

### 方法

- destroy()
  - 销毁相机控制器。
- isDestroyed() → boolean
  - 检查相机控制器是否已被销毁。
