// SendAABBScale.js
// Version: 0.0.1
// Event: On Awake
// Description: Print mesh bounding box scale and assign it to the material, this script is designed to work with the Volumetric Cloud material.

//@ui {"widget":"label", "label":"Assign mesh used for baking SDF texture below."}
//@input Asset.RenderMesh inputMesh
//@input Asset.Material cloudMaterial
//@ui {"widget":"label"}
//@ui {"widget":"label", "label":"To keep the origianl proportion of the mesh while darwing an SDF shape"}
//@ui {"widget":"label", "label":"by texture, we need to assign sacle values to the Volumetric Cloud material."}
//@ui {"widget":"label"}
//@ui {"widget":"label", "label":"This script can be omitted if you already know the numbers."}

if (!validateInputs()) {
    return;
}

var aabbMin = script.inputMesh.aabbMin;
var aabbMax = script.inputMesh.aabbMax;

var boxSize = new vec3(aabbMax.x - aabbMin.x, aabbMax.y - aabbMin.y, aabbMax.z - aabbMin.z);
var maxNum = Math.max(Math.max(boxSize.x, boxSize.y),boxSize.z);
var boxScale = new vec3(boxSize.x/maxNum, boxSize.y/maxNum, boxSize.z/maxNum);

script.cloudMaterial.mainPass.aabbscaleScript = boxScale;
print("Bounding Box Scale = " +  boxScale);

function validateInputs() {
    
    if (!script.inputMesh) {
        print("ERROR: Make sure the mesh for bounding box calculation is set.");
        return false;
    }

    if (!script.cloudMaterial) {
        print("ERROR: Make sure the volumateric cloud material is set.");
        return false;
    }
  
    return true;
}
