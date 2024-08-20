# new Cesium.CesiumTerrainProvider(options)

> 一个 TerrainProvider ，以 Cesium 地形格式访问地形数据。 地形格式可以是以下之一：
> options : ==== Cesium.CesiumTerrainProvider.ConstructorOptions

```javascript
// Create Arctic DEM terrain with normals.
try {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(3956, {
      requestVertexNormals: true
    })
  })
} catch (error) {
  console.log(error)
}
```

### availability : TileAvailability

> 一个对象，描述了 CesiumTerrainProvider 所提供的地形数据的可用性。

### credit : Credit

> 一个对象，描述了 CesiumTerrainProvider 的数据来源。

### errorEvent : Event

> 获取当地形提供程序遇到异步错误时引发的事件。通过订阅该事件，您将收到错误通知，并有可能从中恢复。事件侦听器会传递一个 TileProviderError 实例。

### hasMetadata : boolean

> 获取一个值，该值指示请求的图块是否包含元数据。

### hasVertexNormals : boolean

> 获取一个值，该值指示请求的图块是否包含顶点法线。

### hasWaterMask : boolean

> 获取一个值，该值指示请求的图块是否包含水体掩模。

### requestMetadata : boolean

> 布尔标志，指示客户端是否应从服务器请求元数据。仅当客户端请求元数据并且服务器提供元数据时，元数据才会附加到标准图块网格数据。

### requestVertexNormals : boolean

> 布尔标志，指示客户端是否应从服务器请求顶点法线。仅当客户端请求顶点法线并且服务器提供顶点法线时，顶点法线数据才会附加到标准切片网格数据。

### requestWaterMask : boolean

> 布尔标志，指示客户端是否应从服务器请求水体掩模。仅当客户端请求水体掩模并且服务器提供水体掩模时，水体掩模数据才会附加到标准切片网格数据。

### tilingScheme : TilingScheme

> 一个对象，描述了 CesiumTerrainProvider 的切片方案。

## 方法

### Cesium.CesiumTerrainProvider.fromIonAssetId(assetId, options) → Promise.<CesiumTerrainProvider>

> 从 Ion 资产 ID 创建 CesiumTerrainProvider。

参数：

- assetId : number 资产 ID。
- options : Cesium.CesiumTerrainProvider.ConstructorOptions 构造选项。

返回：

- Promise.<CesiumTerrainProvider> 一个 Promise，将在成功时返回 CesiumTerrainProvider。

示例：

```javascript
// Create Arctic DEM terrain with normals.
try {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(3956, {
      requestVertexNormals: true
    })
  })
} catch (error) {
  console.log(error)
}
```

### Cesium.CesiumTerrainProvider.fromUrl(url, options) → Promise.<CesiumTerrainProvider>

> 从 URL 创建 CesiumTerrainProvider。

参数：

- url : string 服务器 URL。
- options : Cesium.CesiumTerrainProvider.ConstructorOptions 构造选项。

返回：

- Promise.<CesiumTerrainProvider> 一个 Promise，将在成功时返回 CesiumTerrainProvider。

示例：

```javascript
// Create Arctic DEM terrain with normals.
try {
  viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956), {
    requestVertexNormals: true
  })
  // 或者
  const layer = viewer.imageryLayers.addImageryProvider(await Cesium.IonImageryProvider.fromAssetId(3812))
} catch (error) {
  console.log(error)
}
```

### getLevelMaximumGeometricError(level) → number

> 获取指定级别的最大几何误差。

参数：

- level : number 级别。

返回：

- number 最大几何误差。

### getTileDataAvailable(x, y, level) → boolean|undefined

> 获取指定级别的指定图块是否可用。

参数：

- x : number 图块的 X 坐标。
- y : number 图块的 Y 坐标。
- level : number 图块的级别。

返回：

- boolean|undefined 如果图块可用，则返回 true；否则，返回 undefined。

### loadTileDataAvailability(x, y, level) → undefined|Promise.<void>

> 加载指定级别的指定图块的可用性。

参数：

- x : number 图块的 X 坐标。
- y : number 图块的 Y 坐标。
- level : number 图块的级别。

返回：

- undefined|Promise.<void> 如果图块可用，则返回 undefined；否则，返回一个 Promise，在图块可用时 resolve。

### requestTileGeometry(x, y, level, request) → Promise.<TerrainData> | undefined

> 请求指定级别的指定图块的地形数据。

参数：

- x : number 图块的 X 坐标。
- y : number 图块的 Y 坐标。
- level : number 图块的级别。
- request : Request 请求对象。

返回：

- 对所要求的几何形状的承诺。如果此方法返回未定义而不是承诺，则表明已有太多请求处于待处理状态，稍后将重试该请求。

## Type Definitions 类型定义

### Cesium.CesiumTerrainProvider.ConstructorOptions

> 构造选项。

属性：

- requestVertexNormals : boolean 指示客户端是否应从服务器请求附加照明信息的标志，以每个顶点法线的形式（如果可用）。
- requestWaterMask : boolean 指示客户端是否应从服务器请求水体掩模的标志。
- requestMetadata : boolean 指示客户端是否应从服务器请求元数据的标志。
- ellipsoid : Ellipsoid 地球椭球体。
- credit : Credit 用于描述数据来源的对象。
