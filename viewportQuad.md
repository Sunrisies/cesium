# ViewportQuad 类

## 构造函数

`new Cesium.ViewportQuad(rectangle, material)`
视口对齐的四边形。

| 名称        | 类型                | 描述                                 |
| ----------- | ------------------- | ------------------------------------ |
| `rectangle` | `BoundingRectangle` | 可选。定义四边形在视口内的位置。     |
| `material`  | `Material`          | 可选。定义视口四边形表面外观的材料。 |

## 示例

```javascript
const viewportQuad = new Cesium.ViewportQuad(new Cesium.BoundingRectangle(0, 0, 80, 40))
viewportQuad.material.uniforms.color = new Cesium.Color(1.0, 0.0, 0.0, 1.0)
```

## 属性

### material

`material` : `Material`

定义视口四边形表面外观的材料。

### rectangle

`rectangle` : `BoundingRectangle`

定义四边形在视口内的位置。

### show

`show` : `Boolean`

确定是否显示视口四边形。

## 方法

### destroy()

`destroy()` : `undefined`

销毁视口四边形。

### isDestroyed()

`isDestroyed()` : `Boolean`

确定视口四边形是否已被销毁。

### update(frameState)

`update(frameState)` : `undefined`

更新视口四边形。
