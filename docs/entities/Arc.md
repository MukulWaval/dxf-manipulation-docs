# Arc

## Sample Construction

:::note

**ArcWriter** is available in `dxf-manipulation.Entities` namespace.

:::

```csharp
ArcWriter arc = new ArcWriter(
    new XYZ(0, 0, 0),
    new XYZ(0, 0, 1),
    0, Math.PI/2, 10, 0
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

| Name         | Default   | Unit    | DXF Code      | Comment                               |
| ------------ | --------- | ------- | ------------- | ------------------------------------- |
| `Center`     | `(0,0,0)` | -       | `10,20,30`    | Center point of the Arc.              |
| `Normal`     | `(0,0,1)` | -       | `210,220,230` | Normal vector defining the Arc plane. |
| `StartAngle` | `0`       | Radians | `50`          | Starting angle of the Arc.            |
| `EndAngle`   | `0`       | Radians | `51`          | Ending angle of the Arc.              |
| `Radius`     | `0`       | Units   | `40`          | Radius of the Arc.                    |
| `Thickness`  | `0`       | Units   | `39`          | Thickness of the Arc.                 |

| Group Code | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| 100        | Subclass marker (AcDbCircle)                                                   |
| 39         | Thickness (optional; default = 0)                                              |
| 10         | Center point (in OCS) DXF: X value; APP: 3D point                              |
| 20, 30     | DXF: Y and Z values of center point (in OCS)                                   |
| 40         | Radius                                                                         |
| 100        | Subclass marker (AcDbArc)                                                      |
| 50         | Start angle                                                                    |
| 51         | End angle                                                                      |
| 210        | Extrusion direction (optional; default = 0, 0, 1) DXF: X value; APP: 3D vector |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                          |
