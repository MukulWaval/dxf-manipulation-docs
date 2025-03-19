# LwPolyline

The DXF [LwPolyLine](https://help.autodesk.com/view/OARX/2021/ENU/?guid=GUID-748FC305-F3F2-4F74-825A-61F04D757A50) entity.

## API

:::note
**LwPolylineWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`LwPolylineWriter(List<LwPolyline.Vertex> vertices, double constantWidth, double elevation, double thickness, LwPolylineFlags flags, XYZ normal)`
Creates a new LwPolylineWriter instance.

1. `List<LwPolyline.Vertex> Vertices { get; set; }`
   Gets or sets the list of vertices defining the polyline.

2. `LwPolylineFlags Flags { get; set; }`
   Gets or sets the polyline flags. Defaults to `LwPolylineFlags.Default` if not provided.

3. `double ConstantWidth { get; set; }`
   Gets or sets the constant width of the polyline. Defaults to `0` if not provided.

4. `double Elevation { get; set; }`
   Gets or sets the elevation of the polyline. Defaults to `0` if not provided.

5. `double Thickness { get; set; }`
   Gets or sets the thickness of the polyline. Defaults to `0` if not provided.

6. `XYZ Normal { get; set; }`
   Gets or sets the normal vector defining the polyline plane. Defaults to `(0,0,1)` if not provided.

### Sample Construction

```csharp
LwPolylineWriter polyline = new LwPolylineWriter(
    new List<LwPolyline.Vertex> {
        new LwPolyline.Vertex(new XYZ(0, 0, 0), 0, 0, 0, VertexFlags.None),
        new LwPolyline.Vertex(new XYZ(10, 0, 0), 0, 0, 0, VertexFlags.None),
        new LwPolyline.Vertex(new XYZ(10, 10, 0), 0, 0, 0, VertexFlags.None)
    },
    0, 0, 0, LwPolylineFlags.Default, new XYZ(0, 0, 1)
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "LwPolyline",
  "Data": {
    "Vertices": [
      {
        "Location": {
          "X": 0,
          "Y": 0
        },
        "StartWidth": 0,
        "EndWidth": 0,
        "Bulge": 0,
        "Flags": "Default"
      },
      {
        "Location": {
          "X": 10,
          "Y": 0
        },
        "StartWidth": 0,
        "EndWidth": 0,
        "Bulge": 0,
        "Flags": "Default"
      },
      {
        "Location": {
          "X": 10,
          "Y": 10
        },
        "StartWidth": 0,
        "EndWidth": 0,
        "Bulge": 0,
        "Flags": "Default"
      }
    ],
    "ConstantWidth": 0,
    "Elevation": 0,
    "Thickness": 0,
    "Flags": "Default",
    "Normal": { "X": 0, "Y": 0, "Z": 1 }
  }
}
```

## Properties

:::info
For reference only: Group codes are not intended for direct API use.
:::

| Name            | Default                   | Unit  | DXF Code      | Comment                                 |
| --------------- | ------------------------- | ----- | ------------- | --------------------------------------- |
| `Vertices`      | -                         | -     | `10,20,30`    | List of vertices defining the polyline. |
| `Flags`         | `LwPolylineFlags.Default` | -     | `70`          | Polyline flags.                         |
| `ConstantWidth` | `0`                       | Units | `43`          | Constant width of the polyline.         |
| `Elevation`     | `0`                       | Units | `38`          | Elevation of the polyline.              |
| `Thickness`     | `0`                       | Units | `39`          | Thickness of the polyline.              |
| `Normal`        | `(0,0,1)`                 | -     | `210,220,230` | Normal vector defining the polyline.    |

| Group Code | Description                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbPolyline)                                                                                                    |
| 90         | Number of vertices                                                                                                                |
| 70         | Polyline flag (bit-coded); default is 0:                                                                                          |
|            | 1 = Closed; 128 = Plinegen                                                                                                        |
| 43         | Constant width (optional; default = 0). Not used if variable width (codes 40 and/or 41) is set                                    |
| 38         | Elevation (optional; default = 0)                                                                                                 |
| 39         | Thickness (optional; default = 0)                                                                                                 |
| 10         | Vertex coordinates (in OCS), multiple entries; one entry for each vertex (DXF: X value; APP: 2D point)                            |
| 20         | DXF: Y value of vertex coordinates (in OCS), multiple entries; one entry for each vertex                                          |
| 91         | Vertex identifier                                                                                                                 |
| 40         | Starting width (multiple entries; one entry for each vertex) (optional; default = 0). Not used if constant width (code 43) is set |
| 41         | End width (multiple entries; one entry for each vertex) (optional; default = 0). Not used if constant width (code 43) is set      |
| 42         | Bulge (multiple entries; one entry for each vertex) (optional; default = 0)                                                       |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector)                                                  |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                                                                             |
