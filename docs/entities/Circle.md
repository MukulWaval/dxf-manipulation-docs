# Circle

## API

:::note
**CircleWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`CircleWriter(double thickness, XYZ center, double radius, XYZ normal)`
Creates a new CircleWriter instance.

1. `XYZ Center { get; set; }`
   Gets or sets the center point of the circle.

2. `XYZ Normal { get; set; }`
   Gets or sets the normal vector defining the circle plane.
   Defaults to `(0,0,1)` if not provided.

3. `double Radius { get; set; }`
   Gets or sets the radius of the circle.

4. `double Thickness { get; set; }`
   Gets or sets the thickness of the circle. Defaults to `0` if not provided.

### Sample Construction

```csharp
CircleWriter circle = new CircleWriter(
    0,
    new XYZ(0, 0, 0),
    10,
    new XYZ(0, 0, 1)
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "Circle",
  "Data": {
    "Thickness": 0,
    "Center": {
      "X": 0,
      "Y": 0,
      "Z": 0
    },
    "Radius": 10,
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

| Name        | Default   | Unit  | DXF Code      | Comment                            |
| ----------- | --------- | ----- | ------------- | ---------------------------------- |
| `Center`    | -         | -     | `10,20,30`    | Center point of the Circle.        |
| `Normal`    | `(0,0,1)` | -     | `210,220,230` | Normal vector defining the Circle. |
| `Radius`    | -         | Units | `40`          | Radius of the Circle.              |
| `Thickness` | `0`       | Units | `39`          | Thickness of the Circle.           |

| Group Code | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbCircle)                                                     |
| 39         | Thickness (optional; default = 0)                                                |
| 10         | Center point (in OCS) (DXF: X value; APP: 3D point)                              |
| 20, 30     | DXF: Y and Z values of center point (in OCS)                                     |
| 40         | Radius                                                                           |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector) |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                            |
