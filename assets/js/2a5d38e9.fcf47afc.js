"use strict";(self.webpackChunkdxf_manipulation=self.webpackChunkdxf_manipulation||[]).push([[544],{3838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"entities/Text","title":"Text","description":"The DXF Text entity.","source":"@site/docs/entities/Text.md","sourceDirName":"entities","slug":"/entities/Text","permalink":"/dxf-manipulation-docs/docs/entities/Text","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"LwPolyline","permalink":"/dxf-manipulation-docs/docs/entities/LwPolyline"}}');var d=n(4848),r=n(8453);const s={},l="Text",c={},h=[{value:"API",id:"api",level:2},{value:"Sample Construction",id:"sample-construction",level:3},{value:"Example JSON Representation",id:"example-json-representation",level:2},{value:"Properties",id:"properties",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"text",children:"Text"})}),"\n",(0,d.jsxs)(t.p,{children:["The DXF ",(0,d.jsx)(t.a,{href:"https://help.autodesk.com/view/OARX/2021/ENU/?guid=GUID-62E5383D-8A14-47B4-BFC4-35824CAE8363",children:"Text"})," entity."]}),"\n",(0,d.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(t.admonition,{type:"note",children:(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"TextWriter"})," is available in ",(0,d.jsx)(t.code,{children:"dxf_manipulation.Entities"})," namespace."]})}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"TextWriter(double thickness, XYZ insertPoint, double height, string value, double rotation, double widthFactor, double obliqueAngle, TextStyle style, TextMirrorFlag mirror, TextHorizontalAlignment horizontalAlignment, XYZ alignmentPoint, XYZ normal, TextVerticalAlignmentType verticalAlignment)"}),"\r\nCreates a new TextWriter instance."]}),"\n",(0,d.jsxs)(t.ol,{children:["\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"double Thickness { get; set; }"}),"\r\nGets or sets the thickness of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"XYZ InsertPoint { get; set; }"}),"\r\nGets or sets the insertion point of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"double Height { get; set; }"}),"\r\nGets or sets the height of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"string Value { get; set; }"}),"\r\nGets or sets the text string value."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"double Rotation { get; set; }"}),"\r\nGets or sets the rotation angle of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"double WidthFactor { get; set; }"}),"\r\nGets or sets the width scale factor of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"double ObliqueAngle { get; set; }"}),"\r\nGets or sets the oblique angle of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"TextStyle Style { get; set; }"}),"\r\nGets or sets the text style."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"TextMirrorFlag Mirror { get; set; }"}),"\r\nGets or sets the text mirroring flag."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"TextHorizontalAlignment HorizontalAlignment { get; set; }"}),"\r\nGets or sets the horizontal alignment of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"XYZ AlignmentPoint { get; set; }"}),"\r\nGets or sets the alignment point of the text."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"XYZ Normal { get; set; }"}),"\r\nGets or sets the normal vector defining the text orientation."]}),"\n"]}),"\n",(0,d.jsxs)(t.li,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"TextVerticalAlignmentType VerticalAlignment { get; set; }"}),"\r\nGets or sets the vertical alignment of the text."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"sample-construction",children:"Sample Construction"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-csharp",children:'TextWriter text = new TextWriter(\r\n    0,\r\n    new XYZ(10, 20, 0),\r\n    5,\r\n    "Hello DXF",\r\n    0,\r\n    1,\r\n    0,\r\n    TextStyle.Default,\r\n    TextMirrorFlag.None,\r\n    TextHorizontalAlignment.Left,\r\n    new XYZ(10, 20, 0),\r\n    new XYZ(0, 0, 1),\r\n    TextVerticalAlignmentType.Baseline\r\n);\n'})}),"\n",(0,d.jsx)(t.h2,{id:"example-json-representation",children:"Example JSON Representation"}),"\n",(0,d.jsx)(t.admonition,{type:"warning",children:(0,d.jsx)(t.p,{children:"A unit mismatch exists: attributes defined as radians require input in degrees within the JSON data."})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-json",children:'{\r\n  "Type": "Text",\r\n  "Data": {\r\n    "Thickness": 0,\r\n    "InsertPoint": {\r\n      "X": 10,\r\n      "Y": 20,\r\n      "Z": 0\r\n    },\r\n    "Height": 5,\r\n    "Value": "Hello DXF",\r\n    "Rotation": 0,\r\n    "WidthFactor": 1,\r\n    "ObliqueAngle": 0,\r\n    "Style": "Default",\r\n    "Mirror": "None",\r\n    "HorizontalAlignment": "Left",\r\n    "AlignmentPoint": {\r\n      "X": 10,\r\n      "Y": 20,\r\n      "Z": 0\r\n    },\r\n    "Normal": {\r\n      "X": 0,\r\n      "Y": 0,\r\n      "Z": 1\r\n    },\r\n    "VerticalAlignment": "Baseline"\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(t.admonition,{type:"info",children:(0,d.jsx)(t.p,{children:"For reference only: Group codes are not intended for direct API use."})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Unit"}),(0,d.jsx)(t.th,{children:"DXF Code"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Thickness"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"0"})}),(0,d.jsx)(t.td,{children:"Units"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"39"})}),(0,d.jsx)(t.td,{children:"Thickness of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"InsertPoint"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"10,20,30"})}),(0,d.jsx)(t.td,{children:"Insertion point of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Height"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"Units"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"40"})}),(0,d.jsx)(t.td,{children:"Text height."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Value"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"String"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"1"})}),(0,d.jsx)(t.td,{children:"Text string value."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Rotation"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"0"})}),(0,d.jsx)(t.td,{children:"Radians"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"50"})}),(0,d.jsx)(t.td,{children:"Rotation angle of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"WidthFactor"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"1"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"41"})}),(0,d.jsx)(t.td,{children:"Width scale factor of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ObliqueAngle"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"0"})}),(0,d.jsx)(t.td,{children:"Radians"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"51"})}),(0,d.jsx)(t.td,{children:"Oblique angle of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Style"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Default"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"7"})}),(0,d.jsx)(t.td,{children:"Text style."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Mirror"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"None"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"71"})}),(0,d.jsx)(t.td,{children:"Mirroring flag."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"HorizontalAlignment"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Left"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"72"})}),(0,d.jsx)(t.td,{children:"Horizontal alignment type."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"AlignmentPoint"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"11,21,31"})}),(0,d.jsx)(t.td,{children:"Alignment point of the text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Normal"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"(0,0,1)"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"210,220,230"})}),(0,d.jsx)(t.td,{children:"Normal vector defining text orientation."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"VerticalAlignment"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Baseline"})}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"73"})}),(0,d.jsx)(t.td,{children:"Vertical alignment type."})]})]})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Group Code"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"100"}),(0,d.jsx)(t.td,{children:"Subclass marker (AcDbText)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"39"}),(0,d.jsx)(t.td,{children:"Thickness (optional; default = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10"}),(0,d.jsx)(t.td,{children:"First alignment point (in OCS) (DXF: X value; APP: 3D point)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"20, 30"}),(0,d.jsx)(t.td,{children:"DXF: Y and Z values of first alignment point (in OCS)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"40"}),(0,d.jsx)(t.td,{children:"Text height"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"Default value (the string itself)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"50"}),(0,d.jsx)(t.td,{children:"Text rotation (optional; default = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"41"}),(0,d.jsx)(t.td,{children:"Relative X scale factor\u2014width (optional; default = 1)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"This value is also adjusted when fit-type text is used"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"51"}),(0,d.jsx)(t.td,{children:"Oblique angle (optional; default = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"Text style name (optional, default = STANDARD)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"71"}),(0,d.jsx)(t.td,{children:"Text generation flags (optional, default = 0):"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"2 = Text is backward (mirrored in X)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"4 = Text is upside down (mirrored in Y)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"72"}),(0,d.jsx)(t.td,{children:"Horizontal text justification type (optional, default = 0) integer codes (not bit-coded):"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0 = Left"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1 = Center"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"2 = Right"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"3 = Aligned (if vertical alignment = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"4 = Middle (if vertical alignment = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"5 = Fit (if vertical alignment = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"11"}),(0,d.jsx)(t.td,{children:"Second alignment point (in OCS) (optional) (DXF: X value; APP: 3D point)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"This value is meaningful only if the value of a 72 or 73 group is nonzero (if the justification is anything other than baseline/left)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"21, 31"}),(0,d.jsx)(t.td,{children:"DXF: Y and Z values of second alignment point (in OCS) (optional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"210"}),(0,d.jsx)(t.td,{children:"Extrusion direction (optional; default = 0, 0, 1) (DXF: X value; APP: 3D vector)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"220, 230"}),(0,d.jsx)(t.td,{children:"DXF: Y and Z values of extrusion direction (optional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"100"}),(0,d.jsx)(t.td,{children:"Subclass marker (AcDbText)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"73"}),(0,d.jsx)(t.td,{children:"Vertical text justification type (optional, default = 0): integer codes (not bit-coded):"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0 = Baseline"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1 = Bottom"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"2 = Middle"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"3 = Top"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"The following table describes the group codes 72 (horizontal alignment) and 73 (vertical alignment) in greater detail."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Group 73 (Vertical) \\ Group 72 (Horizontal)"}),(0,d.jsx)(t.th,{children:"0 (Left)"}),(0,d.jsx)(t.th,{children:"1 (Center)"}),(0,d.jsx)(t.th,{children:"2 (Right)"}),(0,d.jsx)(t.th,{children:"3 (Aligned)"}),(0,d.jsx)(t.th,{children:"4 (Middle)"}),(0,d.jsx)(t.th,{children:"5 (Fit)"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3 (Top)"}),(0,d.jsx)(t.td,{children:"TLeft"}),(0,d.jsx)(t.td,{children:"TCenter"}),(0,d.jsx)(t.td,{children:"TRight"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2 (Middle)"}),(0,d.jsx)(t.td,{children:"MLeft"}),(0,d.jsx)(t.td,{children:"MCenter"}),(0,d.jsx)(t.td,{children:"MRight"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1 (Bottom)"}),(0,d.jsx)(t.td,{children:"BLeft"}),(0,d.jsx)(t.td,{children:"BCenter"}),(0,d.jsx)(t.td,{children:"BRight"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"0 (Baseline)"}),(0,d.jsx)(t.td,{children:"Left"}),(0,d.jsx)(t.td,{children:"Center"}),(0,d.jsx)(t.td,{children:"Right"}),(0,d.jsx)(t.td,{children:"Aligned"}),(0,d.jsx)(t.td,{children:"Middle"}),(0,d.jsx)(t.td,{children:"Fit"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const d={},r=i.createContext(d);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);