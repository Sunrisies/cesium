# 外观 - Cesium文档

## new Cesium.Appearance(options)

外观定义了用于绘制`Primitive`（原语）的完整的GLSL顶点和片段着色器以及渲染状态。所有外观都实现了这个基础的`Appearance`接口。

### 构造函数选项

| 名称      | 类型    | 默认值 | 描述                                                                         |
|-----------|---------|-------|----------------------------------------------------------------------------|
| `options` | object  |       |  |

具有以下属性的对象：

| 名称             | 类型    | 默认值              | 描述                                                                         |
|------------------|---------|---------------------|----------------------------------------------------------------------------|
| `translucent`    | boolean | `true`              | 当设置为`true`时，几何体预期为半透明，因此`Appearance#renderState`启用了alpha混合。 |
| `closed`         | boolean | `false`             | 当设置为`true`时，几何体预期为封闭，因此`Appearance#renderState`启用了背面剔除。     |
| `material`       | Material | `Material.ColorType` | 用于确定片段颜色的材料。                                                     |
| `vertexShaderSource` | string |                   | 可选的GLSL顶点着色器源代码，用于覆盖默认顶点着色器。                             |
| `fragmentShaderSource` | string |                   | 可选的GLSL片段着色器源代码，用于覆盖默认片段着色器。                             |
| `renderState`    | object  |                   | 可选的渲染状态，用于覆盖默认渲染状态。                                           |

### 示例：

- 几何和外观示例

### 参考：

- MaterialAppearance
- EllipsoidSurfaceAppearance
- PerInstanceColorAppearance
- DebugAppearance
- PolylineColorAppearance
- PolylineMaterialAppearance

### 成员

#### 只读 closed : boolean
当`true`时，几何体预期为封闭。

#### 只读 fragmentShaderSource : string
用于确定片段颜色的材料。与其他`Appearance`属性不同，这不是只读的，所以外观的材料可以即时更改。

#### 参考：
- Fabric

#### 只读 renderState : object
渲染几何体时使用的WebGL固定功能状态。

#### translucent : boolean
当`true`时，几何体预期为半透明。

#### 只读 vertexShaderSource : string
顶点着色器的GLSL源代码。

### 方法

#### getFragmentShaderSource() → string
返回：
完整的GLSL片段着色器源代码。

#### getRenderState() → object
创建一个渲染状态。这不是最终的渲染状态实例；相反，它可以包含与上下文中创建的渲染状态相同的渲染状态属性子集。

返回：
渲染状态。

#### isTranslucent() → boolean
返回：
如果外观是半透明的，则返回`true`。

