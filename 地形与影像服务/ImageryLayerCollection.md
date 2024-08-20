# new Cesium.ImageryLayerCollection()
> 图像图层的有序集合。

## 属性

### layerAdded : Event
> 将图层添加到集合时引发的事件。事件处理程序将传递已添加的层及其添加的索引。

### layerMoved : Event
> 当图层在集合中更改位置时引发的事件。事件处理程序将传递已移动的图层、移动后的新索引以及移动前的旧索引。

### layerRemoved : Event
> 当图层从集合中移除时引发的事件。事件处理程序将传递已移除的图层及其移除的索引。

### layerShownOrHidden : Event
> 当图层的可见性发生变化时引发的事件。事件处理程序将传递已更改的图层及其新的可见性。

### length : number
> 集合中的图层数量。

## 方法

### add(layer: ImageryLayer, index?: number): void
> 将图层添加到集合中。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要添加的图层。 |
| index | number | 要添加的图层的索引。如果省略，则将图层添加到集合的末尾。 |
```javascript
const imageryLayer = Cesium.ImageryLayer.fromWorldImagery();
scene.imageryLayers.add(imageryLayer);
```
```javascript
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
scene.imageryLayers.add(imageryLayer);
```

### addImageryProvider(imageryProvider, index) → ImageryLayer
> 从 ImageryProvider 创建 ImageryLayer，并将其添加到集合中。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| imageryProvider | ImageryProvider | 要添加的 ImageryProvider。 |
| index | number | 要添加的图层的索引。如果省略，则将图层添加到集合的末尾。 |

```javascript
try {
   const provider = await Cesium.IonImageryProvider.fromAssetId(3812);
   scene.imageryLayers.addImageryProvider(provider);
} catch (error) {
  console.log(`There was an error creating the imagery layer. ${error}`)
}
```

### contains(layer: ImageryLayer): boolean
> 检查集合中是否存在指定的图层。
> 如果集合包含图层，则为 true，否则为 false。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要检查的图层。 |

### get(index: number): ImageryLayer
> 获取指定索引处的图层。
> 如果索引超出范围，则返回 undefined。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | number | 要获取的图层的索引。 |

### indexOf(layer: ImageryLayer): number
> 获取指定图层的索引。
> 如果图层不在集合中，则返回 -1。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要获取索引的图层。 |

### remove(layer: ImageryLayer, destroy: boolean): void
> 从集合中移除指定的图层。
> return 如果图层位于集合中并已被删除，则为 true；如果图层不在集合中，则为 false。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要移除的图层。 |
| destroy | boolean | 如果为 true，则销毁图层。 |

### removeAll(destroy: boolean): void
> 从集合中移除所有图层。

| 参数 | 类型 | 描述 |
| --- | --- | --- | 
| destroy | boolean | 如果为 true，则销毁图层。 |


### destroy() : void
> 销毁集合及其所有图层。

```javascript
layerCollection = layerCollection && layerCollection.destroy();
```

### isDestroyed() → boolean
> 检查集合是否已被销毁。
> 如果已被销毁，则返回 true，否则返回 false。

### lower(layer)
> 将集合中的图层降低一个位置。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要移动的图层。 |

### lowerToBottom(layer) : void
> 将图层移动到集合的底部。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要移动的图层。 |

### pickImageryLayerFeatures(ray, scene) → Promise.<Array.<ImageryLayerFeatureInfo>>|undefined
> 计算指定射线与集合中的每个图层的交点，并返回包含每个交点信息的数组。
> 异步确定与拾取射线相交的影像图层要素。通过为与拾取射线相交的每个图像层图块调用ImageryProvider#pickFeatures来找到相交的图像层特征。要计算来自屏幕上某个位置的拾取光线，请使用Camera.getPickRay 

| 参数 | 类型 | 描述 |
| --- |
| ray | Ray | 用于计算交点的射线。 |
| scene | Scene | 用于渲染的场景。 |

```javascript
const pickRay = viewer.camera.getPickRay(windowPosition);
const featuresPromise = viewer.imageryLayers.pickImageryLayerFeatures(pickRay, viewer.scene);
if (!Cesium.defined(featuresPromise)) {
    console.log('No features picked.');
} else {
    Promise.resolve(featuresPromise).then(function(features) {
        // This function is called asynchronously when the list if picked features is available.
        console.log(`Number of features: ${features.length}`);
        if (features.length > 0) {
            console.log(`First feature name: ${features[0].name}`);
        }
    });
}
```

### pickImageryLayers(ray, scene) → Array.<ImageryLayer>|undefined
> 计算指定射线与集合中的每个图层的交点，并返回包含每个交点图层的数组。
> return 包含与给定拾取射线相交的所有层的数组。如果未选择任何图层，则未定义。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| ray | Ray | 用于计算交点的射线。 |
| scene | Scene | 用于渲染的场景。 |

### raise(layer) : void
> 将图层提升一个位置。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要移动的图层。 |


### raiseToTop(layer) : void
> 将图层移动到集合的顶部。


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| layer | ImageryLayer | 要移动的图层。 |
