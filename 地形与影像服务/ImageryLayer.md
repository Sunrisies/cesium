# new Cesium.ImageryLayer(imageryProvider, options)
> 一个图像层，显示来自Globe上单个图像提供者的平铺图像数据。

|参数|类型|描述|
|-|-|-|
|imageryProvider|ImageryProvider|图像提供者，用于获取图像数据。|
|options|Object|可选参数对象，包括以下属性：|

```javascript
// Add an OpenStreetMaps layer
const imageryLayer = new Cesium.ImageryLayer(new Cesium.OpenStreetMapImageryProvider({
  url: "https://tile.openstreetmap.org/"
}));
scene.imageryLayers.add(imageryLayer);
```
```javascript
// Add Cesium ion's default world imagery layer
const imageryLayer = Cesium.ImageryLayer.fromWorldImagery();
scene.imageryLayers.add(imageryLayer);
```
```javascript
// Add a new transparent layer from Cesium ion
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
imageryLayer.alpha = 0.5;
scene.imageryLayers.add(imageryLayer);
```

## 属性
### Cesium.ImageryLayer.DEFAULT_APPLY_COLOR_TO_ALPHA_THRESHOLD : number
> 当图像提供者的颜色值与alpha值之间的差异小于这个阈值时，将应用颜色值到alpha值。
> 默认值：0.01

### Cesium.ImageryLayer.DEFAULT_BRIGHTNESS : number
> 如果在构建过程中或图像提供商未提供该值，则该值将用作图像图层的默认亮度。该值不会修改图像的亮度。
> 默认值：1.0

### Cesium.ImageryLayer.DEFAULT_CONTRAST : number
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认对比度。该值不会修改图像的对比度。
> 默认值：1.0

### Cesium.ImageryLayer.DEFAULT_GAMMA : number
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认伽马值。该值不会修改图像的伽马值。
> 默认值：1.0

### Cesium.ImageryLayer.DEFAULT_HUE : number
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认色调。该值不会修改图像的色调。
> 默认值：0.0

### Cesium.ImageryLayer.DEFAULT_MAGNIFICATION_FILTER : TextureMagnificationFilter
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认放大过滤器。该值不会修改图像的放大过滤器。
> 默认值：Cesium.TextureMagnificationFilter.LINEAR

### Cesium.ImageryLayer.DEFAULT_MINIFICATION_FILTER : TextureMinificationFilter
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认缩小过滤器。该值不会修改图像的缩小过滤器。
> 默认值：Cesium.TextureMinificationFilter.LINEAR

### Cesium.ImageryLayer.DEFAULT_SATURATION : number
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认饱和度。该值不会修改图像的饱和度。
> 默认值：1.0

### Cesium.ImageryLayer.DEFAULT_SPLIT : SplitDirection
> 如果在构建过程中或图像提供商未提供此值，则该值将用作图像图层的默认分割方向。该值不会修改图像的分割方向。
> 默认值：Cesium.SplitDirection.NONE

### alpha : number
> 图像层的透明度。
> 默认值：1.0


### brightness : number
> 图像层的亮度。
> 默认值：Cesium.ImageryLayer.DEFAULT_BRIGHTNESS

### colorToAlpha : Color
> 应设置为透明的颜色值。

### colorToAlphaThreshold : number
> 颜色到 Alpha 的标准化 (0-1) 阈值。

### contrast : number
> 图像层的对比度。
> 默认值：Cesium.ImageryLayer.DEFAULT_CONTRAST

### cutoutRectangle : Rectangle
> 图像层的裁切矩形。

### dayAlpha : number
> 该图层在地球白天一侧的 alpha 混合值，0.0 表示完全透明，1.0 表示完全不透明。仅当Globe#enableLighting为true时才会生效。
> 默认值：1.0

### gamma : number
> 应用于该层的伽玛校正。 1.0 使用未修改的图像颜色。
> 默认值：Cesium.ImageryLayer.DEFAULT_GAMMA

### hue : number
> 该图层的色调（以弧度为单位）。 0.0 使用未修改的图像颜色。
> 默认值：Cesium.ImageryLayer.DEFAULT_HUE

### imageryProvider : ImageryProvider
> 图像提供者，用于获取图像数据。

### magnificationFilter : TextureMagnificationFilter
> 应用到该层的TextureMagnificationFilter 。可能的值为TextureMagnificationFilter.LINEAR （默认值）和TextureMagnificationFilter.NEAREST 。要生效，必须在添加影像图层后立即设置该属性。加载纹理后，将无法更改所使用的纹理过滤器。
> 默认值：Cesium.ImageryLayer.DEFAULT_MAGNIFICATION_FILTER

### minificationFilter : TextureMinificationFilter
> 应用到该层的TextureMinificationFilter 。可能的值为TextureMinificationFilter.LINEAR （默认值）和TextureMinificationFilter.NEAREST 。要生效，必须在添加影像图层后立即设置该属性。加载纹理后，将无法更改所使用的纹理过滤器。
> 默认值：Cesium.ImageryLayer.DEFAULT_MINIFICATION_FILTER

### nightAlpha : number
> 该图层在地球夜晚一侧的 alpha 混合值，0.0 表示完全透明，1.0 表示完全不透明。仅当Globe#enableLighting为true时才会生效。
> 默认值：1.0

### ready : boolean
> 图像层是否已准备好。

### readyEvent : Event.<ImageryLayer.ReadyEventCallback>
> 获取在成功创建图像提供程序时引发的事件。事件侦听器将传递创建的ImageryProvider实例。

### saturation : number
> 该层的饱和度。 1.0 使用未修改的图像颜色。小于 1.0 会降低饱和度，而大于 1.0 则会增加饱和度。
> 默认值：Cesium.ImageryLayer.DEFAULT_SATURATION

### show : boolean
> 图像层是否可见。
> 默认值：true

### splitDirection : SplitDirection
> 图像层的分割方向。
> 默认值：Cesium.ImageryLayer.DEFAULT_SPLIT


## 方法

### Cesium.ImageryLayer.fromProviderAsync(imageryProviderPromise, options) → ImageryLayer
> 从异步图像提供程序创建新的图像层。该层将处理任何异步加载或错误，并在准备好后开始渲染图像层。

|参数|类型|描述|
|-|-|-|
|imageryProviderPromise|Promise.<ImageryProvider>|一个Promise，返回一个图像提供程序实例。|
|options|Object|可选参数对象，包括以下属性：|

```javascript
// Create a new base layer
const viewer = new Cesium.Viewer("cesiumContainer", {
  baseLayer: Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
});

// Add a new transparent layer
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
imageryLayer.alpha = 0.5;
viewer.imageryLayers.add(imageryLayer);


// Handle loading events
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
viewer.imageryLayers.add(imageryLayer);

imageryLayer.readyEvent.addEventListener(provider => {
  imageryLayer.provider.errorEvent.addEventListener(error => {
    alert(`Encountered an error while loading imagery tiles! ${error}`);
  });
});

imageryLayer.errorEvent.addEventListener(error => {
  alert(`Encountered an error while creating an imagery layer! ${error}`);
});
```

### Cesium.ImageryLayer.fromWorldImagery(options) → ImageryLayer
> 为 ion 的默认全局基础影像图层（当前为 Bing 地图）创建新的影像图层。该层将处理任何异步加载或错误，并在准备好后开始渲染图像层。

|参数|类型|描述|
|-|-|-|
|options|Object|可选参数对象，包括以下属性：|

```javascript
// Add a new transparent layer
const imageryLayer = Cesium.ImageryLayer.fromWorldImagery();
imageryLayer.alpha = 0.5;
viewer.imageryLayers.add(imageryLayer);


// Handle loading events
const imageryLayer = Cesium.ImageryLayer.fromWorldImagery();
viewer.imageryLayers.add(imageryLayer);

imageryLayer.readyEvent.addEventListener(provider => {
  imageryLayer.provider.errorEvent.addEventListener(error => {
    alert(`Encountered an error while loading imagery tiles! ${error}`);
  });
});

imageryLayer.errorEvent.addEventListener(error => {
  alert(`Encountered an error while creating an imagery layer! ${error}`);
});
```

### destroy()
> 销毁该图层，释放资源。

```javascript
imageryLayer = imageryLayer && imageryLayer.destroy();
```

### getImageryRectangle() → Rectangle
> 计算该层的矩形与图像提供者的可用性矩形的交集，生成该层可以生成的图像的总体边界。
> return : 一个矩形，定义该层可以生成的图像的整体边界。

```javascript
// Zoom to an imagery layer.
const imageryRectangle = imageryLayer.getImageryRectangle();
scene.camera.flyTo({
    destination: rectangle
});
```

### isBaseLayer() → boolean
> 如果该图层是底图，则返回true。
> return : true 如果该图层是底图，否则返回false。


### isDestroyed() → boolean
> 如果该图层已被销毁，则返回true。
> return : true 如果该图层已被销毁，否则返回false。


## 类型

### Cesium.ImageryLayer.ConstructorOptions
> 用于创建ImageryLayer的选项对象。

|属性|类型|描述|
|-|-|-|
|rectangle|Rectangle|可选的矩形，用于限制该层可以提供的图像的范围。如果未指定，则使用图像提供者的可用性矩形。|
|alpha|number|可选的数字，用于设置图像层的透明度。1.0 表示完全不透明，0.0 表示完全透明。|
|nightAlpha|number|可选的数字，用于设置图像层在夜晚时的透明度。仅当Globe#enableLighting为true时才会生效。|
|dayAlpha|number|可选的数字，用于设置图像层在白天时的透明度。仅当Globe#enableLighting为true时才会生效。|
|brightness|number|可选的数字，用于设置图像层的亮度。1.0 表示原始亮度，0.0 表示完全黑色。|
|contrast|number|可选的数字，用于设置图像层的对比度。1.0 表示原始对比度，0.0 表示完全无对比度。|
|hue|number|可选的数字，用于设置图像层的色调。0.0 表示原始色调，1.0 表示完全色调偏红。|
|saturation|number|可选的数字，用于设置图像层的饱和度。1.0 表示原始饱和度，0.0 表示完全无饱和度。|
|gamma|number|可选的数字，用于设置图像层的伽玛校正。1.0 表示原始伽玛校正，0.0 表示完全无伽玛校正。|
|splitDirection|SplitDirection|可选的分割方向，用于设置图像层的分割方向。可能的值为SplitDirection.NONE、SplitDirection.LEFT、SplitDirection.RIGHT、SplitDirection.TOP、SplitDirection.BOTTOM。|
|show|boolean|可选的布尔值，用于设置图像层是否可见。true 表示可见，false 表示不可见。|
|maximumAnisotropy|number|可选的数字，用于设置图像层的最大各向异性。1.0 表示原始各向异性，大于 1.0 表示更高的各向异性，小于 1.0 表示更低的各向异性。|
|minimumTerrainLevel|number|可选的数字，用于设置图像层的最小地形级别。0 表示最小级别，1 表示第二低级别，以此类推。|
|maximumTerrainLevel|number|可选的数字，用于设置图像层的最大地形级别。0 表示最大级别，1 表示第二高级别，以此类推。|
|cutoutRectangle|Rectangle|可选的矩形，用于设置图像层的裁切矩形。如果指定，则仅显示裁切矩形内的图像。|
|colorToAlpha|Color|可选的颜色，用于设置图像层的颜色值，将其应用到alpha值。如果颜色值与alpha值之间的差异小于colorToAlphaThreshold，则应用颜色值到alpha值。|
|colorToAlphaThreshold|number|可选的数字，用于设置colorToAlpha的阈值。如果颜色值与alpha值之间的差异小于colorToAlphaThreshold，则应用颜色值到alpha值。|


### Cesium.ImageryLayer.ErrorEventCallback(err)
> 图像层发生错误时的回调函数。

|参数|类型|描述|
|-|-|-|
|err|Error|错误对象。|


### Cesium.ImageryLayer.ReadyEventCallback(imageryLayer)
> 图像层准备好时的回调函数。

|参数|类型|描述|
|-|-|-|
|imageryLayer|ImageryLayer|准备好的图像层。|


### Cesium.ImageryLayer.WorldImageryConstructorOptions
> 用于创建WorldImagery的选项对象。

|属性|类型|描述|
|-|-|-|
|options.style|Object|基础影像的样式，目前仅支持 AERIAL、AERIAL_WITH_LABELS 和 ROAD。|