# Arc

## API

:::note
**ArcWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`ArcWriter(double thickness, XYZ center, double radius, double startAngle, double endAngle, XYZ normal)`
Creates a new ArcWriter instance.

1. `XYZ Center { get; set; }`
   Gets or sets the center point of the arc.

2. `XYZ Normal { get; set; }`
   Gets or sets the normal vector defining the arc plane.

3. `double StartAngle { get; set; }`
   Gets or sets the starting angle of the arc in radians.

4. `double EndAngle { get; set; }`
   Gets or sets the ending angle of the arc in radians.

5. `double Radius { get; set; }`
   Gets or sets the radius of the arc.

6. `double Thickness { get; set; }`
   Gets or sets the thickness of the arc.

### Sample Construction

```csharp
ArcWriter arc = new ArcWriter(
    0,
    new XYZ(0, 0, 0),
    10,
    0,
    Math.PI / 2,
    new XYZ(0, 0, 1)
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "Arc",
  "Data": {
    "Thickness": 0,
    "Center": {
      "X": 0,
      "Y": 0,
      "Z": 0
    },
    "Radius": 10,
    "StartAngle": 0,
    "EndAngle": 180,
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

| Name         | Default   | Unit    | DXF Code      | Comment                               |
| ------------ | --------- | ------- | ------------- | ------------------------------------- |
| `Center`     | -         | -       | `10,20,30`    | Center point of the Arc.              |
| `Normal`     | `(0,0,1)` | -       | `210,220,230` | Normal vector defining the Arc plane. |
| `StartAngle` | -         | Radians | `50`          | Starting angle of the Arc.            |
| `EndAngle`   | -         | Radians | `51`          | Ending angle of the Arc.              |
| `Radius`     | -         | Units   | `40`          | Radius of the Arc.                    |
| `Thickness`  | `0`       | Units   | `39`          | Thickness of the Arc.                 |

| Group Code | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbCircle)                                                     |
| 39         | Thickness (optional; default = 0)                                                |
| 10         | Center point (in OCS) (DXF: X value; APP: 3D point)                              |
| 20, 30     | DXF: Y and Z values of center point (in OCS)                                     |
| 40         | Radius                                                                           |
| 100        | Subclass marker (AcDbArc)                                                        |
| 50         | Start angle                                                                      |
| 51         | End angle                                                                        |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector) |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                            |
