# new Cesium.VRTheWorldTerrainProvider(options)
> 通过细分高度图生成地形几何图形的TerrainProvider 从VT MäK VR-TheWorld 服务器检索。
> options === Cesium.VRTheWorldTerrainProvider.ConstructorOptions

```javascript
const terrainProvider = await Cesium.VRTheWorldTerrainProvider.fromUrl(
  "https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/"
);
viewer.terrainProvider = terrainProvider;
```

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

### Cesium.VRTheWorldTerrainProvider.fromUrl(url, options) → Promise.<VRTheWorldTerrainProvider>
> 从VT MäK VR-TheWorld 服务器检索一个TerrainProvider。

- url (String)：VT MäK VR-TheWorld 服务器的URL。
- options (Object)：可选参数对象，用于配置TerrainProvider。

```javascript
const terrainProvider = await Cesium.VRTheWorldTerrainProvider.fromUrl(
  "https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/"
);
viewer.terrainProvider = terrainProvider;
```


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

## 类型

### VRTheWorldTerrainProvider.ConstructorOptions
> 用于配置VRTheWorldTerrainProvider的选项对象。
> ellipsoid : 椭球体。如果未指定，则使用默认椭球体。
> credit : 数据源的来源，显示在画布上。