# Ellipse

The DXF [Ellipse](https://help.autodesk.com/view/OARX/2021/ENU/?guid=GUID-107CB04F-AD4D-4D2F-8EC9-AC90888063AB) entity.

## API

:::note
**EllipseWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`EllipseWriter(double thickness, XYZ center, XYZ endPoint, double radiusRatio, double startParameter, double endParameter, XYZ normal)`
Creates a new EllipseWriter instance.

1. `XYZ Center { get; set; }`
   Gets or sets the center point of the ellipse.

2. `XYZ EndPoint { get; set; }`
   Gets or sets the endpoint of the major axis of the ellipse.

3. `XYZ Normal { get; set; }`
   Gets or sets the normal vector defining the ellipse plane.
   Defaults to `(0,0,1)` if not provided.

4. `double RadiusRatio { get; set; }`
   Gets or sets the ratio of the minor axis to the major axis.

5. `double StartParameter { get; set; }`
   Gets or sets the starting parameter of the ellipse.

6. `double EndParameter { get; set; }`
   Gets or sets the ending parameter of the ellipse.

7. `double Thickness { get; set; }`
   Gets or sets the thickness of the ellipse. Defaults to `0` if not provided.

### Sample Construction

```csharp
EllipseWriter ellipse = new EllipseWriter(
    0,
    new XYZ(0, 0, 0),
    new XYZ(10, 0, 0),
    0.5,
    0,
    Math.PI,
    new XYZ(0, 0, 1)
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "Ellipse",
  "Data": {
    "Thickness": 0,
    "Center": {
      "X": 0,
      "Y": 0,
      "Z": 0
    },
    "EndPoint": {
      "X": 10,
      "Y": 0,
      "Z": 0
    },
    "RadiusRatio": 0.5,
    "StartParameter": 0,
    "EndParameter": 180,
    "Normal": {
      "X": 0,
      "Y": 0,
      "Z": 1
    }
  }
}
```

## Properties

:::info
For reference only: Group codes are not intended for direct API use.
:::

| Name             | Default   | Unit    | DXF Code      | Comment                                    |
| ---------------- | --------- | ------- | ------------- | ------------------------------------------ |
| `Center`         | -         | -       | `10,20,30`    | Center point of the Ellipse.               |
| `EndPoint`       | -         | -       | `11,21,31`    | Endpoint of the major axis of the Ellipse. |
| `Normal`         | `(0,0,1)` | -       | `210,220,230` | Normal vector defining the Ellipse plane.  |
| `RadiusRatio`    | -         | Ratio   | `40`          | Ratio of minor to major axis.              |
| `StartParameter` | -         | Radians | `41`          | Start parameter of the Ellipse.            |
| `EndParameter`   | -         | Radians | `42`          | End parameter of the Ellipse.              |
| `Thickness`      | `0`       | Units   | `39`          | Thickness of the Ellipse.                  |

| Group Code | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbEllipse)                                                         |
| 10         | Center point (in WCS) (DXF: X value; APP: 3D point)                                   |
| 20, 30     | DXF: Y and Z values of center point (in WCS)                                          |
| 11         | Endpoint of major axis, relative to the center (in WCS) (DXF: X value; APP: 3D point) |
| 21, 31     | DXF: Y and Z values of endpoint of major axis, relative to the center (in WCS)        |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector)      |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                                 |
| 40         | Ratio of minor axis to major axis                                                     |
| 41         | Start parameter (this value is 0.0 for a full ellipse)                                |
| 42         | End parameter (this value is 2pi for a full ellipse)                                  |
