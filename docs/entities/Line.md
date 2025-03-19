# Line

## API

:::note
**LineWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`LineWriter(double thickness, XYZ startPoint, XYZ endPoint, XYZ normal)`
Creates a new LineWriter instance.

1. `double Thickness { get; set; }`
   Gets or sets the thickness of the line. Defaults to `0` if not provided.

2. `XYZ StartPoint { get; set; }`
   Gets or sets the start point of the line.

3. `XYZ EndPoint { get; set; }`
   Gets or sets the end point of the line.

4. `XYZ Normal { get; set; }`
   Gets or sets the normal vector defining the line's plane.
   Defaults to `(0,0,1)` if not provided.

### Sample Construction

```csharp
LineWriter line = new LineWriter(
    0,
    new XYZ(0, 0, 0),
    new XYZ(10, 10, 0),
    new XYZ(0, 0, 1)
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "Line",
  "Data": {
    "Thickness": 0,
    "StartPoint": {
      "X": 0,
      "Y": 0,
      "Z": 0
    },
    "EndPoint": {
      "X": 10,
      "Y": 10,
      "Z": 0
    },
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

| Name         | Default   | Unit  | DXF Code      | Comment                                |
| ------------ | --------- | ----- | ------------- | -------------------------------------- |
| `StartPoint` | -         | -     | `10,20,30`    | Start point of the Line.               |
| `EndPoint`   | -         | -     | `11,21,31`    | End point of the Line.                 |
| `Normal`     | `(0,0,1)` | -     | `210,220,230` | Normal vector defining the Line plane. |
| `Thickness`  | `0`       | Units | `39`          | Thickness of the Line.                 |

| Group Code | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbLine)                                                       |
| 39         | Thickness (optional; default = 0)                                                |
| 10         | Start point (in WCS) (DXF: X value; APP: 3D point)                               |
| 20, 30     | DXF: Y and Z values of start point (in WCS)                                      |
| 11         | Endpoint (in WCS) (DXF: X value; APP: 3D point)                                  |
| 21, 31     | DXF: Y and Z values of endpoint (in WCS)                                         |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector) |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                            |
