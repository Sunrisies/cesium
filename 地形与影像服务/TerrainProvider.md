# Cesium地形与影像服务

> Cesium地形与影像服务是Cesium的核心功能之一，它提供了一系列的地形数据源和影像数据源，包括：
> 提供椭球体表面的地形或其他几何形状。表面几何形状根据TilingScheme组织成瓷砖金字塔。该类型描述了一个接口，并不打算直接实例化

## 属性

### Cesium.TerrainProvider.heightmapTerrainQuality : number

> 指定从高度图创建的地形的质量。值为 1.0 将确保相邻高度图顶点之间的间隔不超过Globe.maximumScreenSpaceError屏幕像素，并且可能会非常慢。值为 0.5 会将估计的零级几何误差减半，从而允许相邻高度图顶点之间的屏幕像素增加两倍，从而更快地渲染。

### availability : TileAvailability

> 获取一个对象，该对象可用于确定此提供程序提供的地形的可用性，例如点和矩形中的地形。如果可用性信息不可用，则此属性可能未定义。

### credit : Credit

> 获取此地形提供程序处于活动状态时要显示的积分。通常，这用于证明地形的来源。
> 如果是默认的情况下，是undefined。

### errorEvent : Event.<TerrainProvider.ErrorEvent>
> 获取当地形提供程序遇到异步错误时引发的事件。通过订阅该事件，您将收到错误通知，并有可能从中恢复。事件侦听器会传递一个TileProviderError实例。

### hasVertexNormals : boolean
> 获取一个值，该值指示请求的切片是否包含顶点法线。

### hasWaterMask : boolean
> 获取一个值，该值指示提供程序是否包含水罩。水掩模指示地球的哪些区域是水而不是陆地，因此可以将它们渲染为带有动画波浪的反射表面。

### tilingScheme : TilingScheme
> 获取此提供程序使用的瓷砖切片方案。


## 方法

### Cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid, tileImageWidth, numberOfTilesAtLevelZero) → number

> 当几何体来自高度图时确定适当的几何误差估计。
> - options.ellipsoid: Ellipsoid  地球椭球体
> - options.tileImageWidth: number  瓷砖图像的宽度
> - options.numberOfTilesAtLevelZero: number  瓷砖图像的数量
> - returns: number  估计的几何误差

### Cesium.TerrainProvider.getRegularGridIndices(width, height) → Uint16Array|Uint32Array
> 获取表示规则网格的三角形网格的索引列表。使用相同的网格宽度和高度多次调用此函数会返回相同的索引列表。顶点总数必须小于或等于 65536。
> - options.width: number  规则网格中水平方向的顶点数。
> - options.height: number  规则网格中垂直方向的顶点数
> - returns: 索引列表。返回的 Uint16Array 为 64KB 或更少,Uint32Array 为 4GB 或更少。 

### getLevelMaximumGeometricError(level) → number
> 获取指定级别的最大几何误差。
> - options.level: number  级别
> - returns: number  最大几何误差

### getTileDataAvailable(x, y, level) → boolean|undefined
> 确定图块的数据是否可供加载。
> - options.x: number  瓷砖的X坐标
> - options.y: number  瓷砖的Y坐标
> - options.level: number  瓷砖的级别
> - returns: boolean|undefined  如果地形提供者不支持则未定义，否则 true 或 false。

### loadTileDataAvailability(x, y, level) → undefined|Promise.<void>
> 加载瓷砖的可用性信息。
> - options.x: number  瓷砖的X坐标
> - options.y: number  瓷砖的Y坐标
> - options.level: number  瓷砖的级别
> - returns: undefined|Promise.<void>  如果地形提供者不支持则未定义，否则返回一个Promise，该Promise在加载完成时解决。


### requestTileGeometry(x, y, level, request) → Promise.<TerrainData>|undefined
> 请求给定图块的几何形状。结果必须包括地形数据，并且可以选择包括水掩模和哪些子图块可用的指示。
> - options.x: number  瓷砖的X坐标
> - options.y: number  瓷砖的Y坐标
> - options.level: number  瓷砖的级别
> - options.request: Request  请求对象
> - returns: Promise.<TerrainData>|undefined  如果地形提供者不支持则未定义，否则返回一个Promise，该Promise在加载完成时解决，并返回一个TerrainData对象。

### Cesium.TerrainProvider.ErrorEvent(err)
> 构造函数
> - options.err: TileProviderError  错误对象