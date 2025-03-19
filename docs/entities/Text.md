# Text

## API

:::note
**TextWriter** is available in `dxf_manipulation.Entities` namespace.
:::

`TextWriter(double thickness, XYZ insertPoint, double height, string value, double rotation, double widthFactor, double obliqueAngle, TextStyle style, TextMirrorFlag mirror, TextHorizontalAlignment horizontalAlignment, XYZ alignmentPoint, XYZ normal, TextVerticalAlignmentType verticalAlignment)`
Creates a new TextWriter instance.

1. `double Thickness { get; set; }`
   Gets or sets the thickness of the text.

2. `XYZ InsertPoint { get; set; }`
   Gets or sets the insertion point of the text.

3. `double Height { get; set; }`
   Gets or sets the height of the text.

4. `string Value { get; set; }`
   Gets or sets the text string value.

5. `double Rotation { get; set; }`
   Gets or sets the rotation angle of the text.

6. `double WidthFactor { get; set; }`
   Gets or sets the width scale factor of the text.

7. `double ObliqueAngle { get; set; }`
   Gets or sets the oblique angle of the text.

8. `TextStyle Style { get; set; }`
   Gets or sets the text style.

9. `TextMirrorFlag Mirror { get; set; }`
   Gets or sets the text mirroring flag.

10. `TextHorizontalAlignment HorizontalAlignment { get; set; }`
    Gets or sets the horizontal alignment of the text.

11. `XYZ AlignmentPoint { get; set; }`
    Gets or sets the alignment point of the text.

12. `XYZ Normal { get; set; }`
    Gets or sets the normal vector defining the text orientation.

13. `TextVerticalAlignmentType VerticalAlignment { get; set; }`
    Gets or sets the vertical alignment of the text.

### Sample Construction

```csharp
TextWriter text = new TextWriter(
    0,
    new XYZ(10, 20, 0),
    5,
    "Hello DXF",
    0,
    1,
    0,
    TextStyle.Default,
    TextMirrorFlag.None,
    TextHorizontalAlignment.Left,
    new XYZ(10, 20, 0),
    new XYZ(0, 0, 1),
    TextVerticalAlignmentType.Baseline
);
```

## Example JSON Representation

:::warning
A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data.
:::

```json
{
  "Type": "Text",
  "Data": {
    "Thickness": 0,
    "InsertPoint": {
      "X": 10,
      "Y": 20,
      "Z": 0
    },
    "Height": 5,
    "Value": "Hello DXF",
    "Rotation": 0,
    "WidthFactor": 1,
    "ObliqueAngle": 0,
    "Style": "Default",
    "Mirror": "None",
    "HorizontalAlignment": "Left",
    "AlignmentPoint": {
      "X": 10,
      "Y": 20,
      "Z": 0
    },
    "Normal": {
      "X": 0,
      "Y": 0,
      "Z": 1
    },
    "VerticalAlignment": "Baseline"
  }
}
```

## Properties

:::info
For reference only: Group codes are not intended for direct API use.
:::

| Name                  | Default    | Unit    | DXF Code      | Comment                                  |
| --------------------- | ---------- | ------- | ------------- | ---------------------------------------- |
| `Thickness`           | `0`        | Units   | `39`          | Thickness of the text.                   |
| `InsertPoint`         | -          | -       | `10,20,30`    | Insertion point of the text.             |
| `Height`              | -          | Units   | `40`          | Text height.                             |
| `Value`               | -          | String  | `1`           | Text string value.                       |
| `Rotation`            | `0`        | Radians | `50`          | Rotation angle of the text.              |
| `WidthFactor`         | `1`        | -       | `41`          | Width scale factor of the text.          |
| `ObliqueAngle`        | `0`        | Radians | `51`          | Oblique angle of the text.               |
| `Style`               | `Default`  | -       | `7`           | Text style.                              |
| `Mirror`              | `None`     | -       | `71`          | Mirroring flag.                          |
| `HorizontalAlignment` | `Left`     | -       | `72`          | Horizontal alignment type.               |
| `AlignmentPoint`      | -          | -       | `11,21,31`    | Alignment point of the text.             |
| `Normal`              | `(0,0,1)`  | -       | `210,220,230` | Normal vector defining text orientation. |
| `VerticalAlignment`   | `Baseline` | -       | `73`          | Vertical alignment type.                 |

| Group Code | Description                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 100        | Subclass marker (AcDbText)                                                                                                            |
| 39         | Thickness (optional; default = 0)                                                                                                     |
| 10         | First alignment point (in OCS) (DXF: X value; APP: 3D point)                                                                          |
| 20, 30     | DXF: Y and Z values of first alignment point (in OCS)                                                                                 |
| 40         | Text height                                                                                                                           |
| 1          | Default value (the string itself)                                                                                                     |
| 50         | Text rotation (optional; default = 0)                                                                                                 |
| 41         | Relative X scale factor—width (optional; default = 1)                                                                                 |
|            | This value is also adjusted when fit-type text is used                                                                                |
| 51         | Oblique angle (optional; default = 0)                                                                                                 |
| 7          | Text style name (optional, default = STANDARD)                                                                                        |
| 71         | Text generation flags (optional, default = 0):                                                                                        |
|            | 2 = Text is backward (mirrored in X)                                                                                                  |
|            | 4 = Text is upside down (mirrored in Y)                                                                                               |
| 72         | Horizontal text justification type (optional, default = 0) integer codes (not bit-coded):                                             |
|            | 0 = Left                                                                                                                              |
|            | 1 = Center                                                                                                                            |
|            | 2 = Right                                                                                                                             |
|            | 3 = Aligned (if vertical alignment = 0)                                                                                               |
|            | 4 = Middle (if vertical alignment = 0)                                                                                                |
|            | 5 = Fit (if vertical alignment = 0)                                                                                                   |
| 11         | Second alignment point (in OCS) (optional) (DXF: X value; APP: 3D point)                                                              |
|            | This value is meaningful only if the value of a 72 or 73 group is nonzero (if the justification is anything other than baseline/left) |
| 21, 31     | DXF: Y and Z values of second alignment point (in OCS) (optional)                                                                     |
| 210        | Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector)                                                      |
| 220, 230   | DXF: Y and Z values of extrusion direction (optional)                                                                                 |
| 100        | Subclass marker (AcDbText)                                                                                                            |
| 73         | Vertical text justification type (optional, default = 0): integer codes (not bit-coded):                                              |
|            | 0 = Baseline                                                                                                                          |
|            | 1 = Bottom                                                                                                                            |
|            | 2 = Middle                                                                                                                            |
|            | 3 = Top                                                                                                                               |

The following table describes the group codes 72 (horizontal alignment) and 73 (vertical alignment) in greater detail.

| Group 73 (Vertical) \ Group 72 (Horizontal) | 0 (Left) | 1 (Center) | 2 (Right) | 3 (Aligned) | 4 (Middle) | 5 (Fit) |
| ------------------------------------------- | -------- | ---------- | --------- | ----------- | ---------- | ------- |
| 3 (Top)                                     | TLeft    | TCenter    | TRight    |             |            |         |
| 2 (Middle)                                  | MLeft    | MCenter    | MRight    |             |            |         |
| 1 (Bottom)                                  | BLeft    | BCenter    | BRight    |             |            |         |
| 0 (Baseline)                                | Left     | Center     | Right     | Aligned     | Middle     | Fit     |
