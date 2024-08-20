# new Cesium.EllipsoidTerrainProvider(options)
> 一个非常简单的TerrainProvider ，通过细分椭圆体表面来生成几何图形。
> options参数：
> - ellipsoid: 用于生成椭圆体的椭球体对象，默认值为new Cesium.Ellipsoid(x, y, z) 椭球体。如果指定了 tilingScheme， 该参数将被忽略，并使用切片方案的椭球体。如果两者都不是 指定参数后，将使用默认椭球体。
> - tilingScheme: 切片方案，默认值为new Cesium.TilingScheme() 指定椭圆体如何的切片方案 表面破碎成瓷砖。如果未提供此参数，则为GeographicTilingScheme 被使用。

## 属性

### availability : TileAvailability
> 获取一个对象，该对象可用于确定此提供者提供的地形的可用性，例如点和矩形中的地形。如果可用性信息不可用，则此属性可能未定义。

### credit : Credit
> 获取此地形提供程序处于活动状态时要显示的积分。通常，这用于证明地形的来源。

### errorEvent : Event
> 获取当地形提供程序遇到异步错误时引发的事件。通过订阅该事件，您将收到错误通知，并有可能从中恢复。事件侦听器会传递一个TileProviderError实例。

### hasWaterMask : Boolean
> 获取一个值，该值指示此提供者是否支持水体掩模。如果此属性为true，则在请求水体掩模时，将使用此提供者。

### hasWaterMask : boolean
> 获取一个值，该值指示此提供者是否支持水体掩模。如果此属性为true，则在请求水体掩模时，将使用此提供者。

### tilingScheme : GeographicTilingScheme
> 获取或设置用于切片的地理切片方案。

## 方法

### getLevelMaximumGeometricError(level) → number
> 获取指定级别的最大几何误差。
> return 最大几何误差。

### getTileDataAvailable(x, y, level) → boolean|undefined
> 获取指定级别和瓦片的可用性信息。
> - x: 瓦片的X坐标。
> - y: 瓦片的Y坐标。
> - level: 瓦片的级别。
> return 瓦片是否可用。

### loadTileDataAvailability(x, y, level) → undefined
> 加载指定级别和瓦片的可用性信息。
> - x: 瓦片的X坐标。
> - y: 瓦片的Y坐标。
> - level: 瓦片的级别。
> return 该提供商不支持加载可用性。

### requestTileGeometry(x, y, level, request) → Promise.<TerrainData>|undefined
> 请求指定级别和瓦片的地形数据。
> - x: 瓦片的X坐标。
> - y: 瓦片的Y坐标。
> - level: 瓦片的级别。
> return 一个承诺，该承诺在成功时将返回TerrainData对象，在失败时将返回undefined。