---
title: Installation & Setup
sidebar_position: 3
---

# Installation & Setup

## Step 1: Download the DLL

Since this library is not available on NuGet, you need to manually **download the prebuilt DLL**:

- **[Download the DXF Manipulation DLL](#)** (replace with the actual download link)
- Save the `.dll` file in a known location on your system.

## Step 2: Add the DLL to Your Project

#### **For a .NET Project**

1. **Create a `libs` folder** inside your project:

   ```sh
   mkdir libs
   ```

2. Copy the DLL into the libs folder.

3. Reference the DLL in your project by modifying your .csproj file:
   ```xml
   <ItemGroup>
    <Reference Include="DXFManipulation">
        <HintPath>libs/DXFManipulation.dll</HintPath>
    </Reference>
   </ItemGroup>
   ```

## Step 3: Import and Use in Code

After adding the DLL, you can use it in your C# project:

Import the Library

```csharp
using DXFManipulation;
```
