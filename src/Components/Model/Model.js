import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "./coral.glb";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);

  materials['Modello3D_scalato'].wireframe  = true;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Modello3D_scalato.geometry}
        material={materials.Modello3D_scalato}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        
      />
    </group>
  );
}

useGLTF.preload(model);

/* import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import model from "./model.glb";
import { MeshStandardMaterial } from "three";
export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);


  
  

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh

        geometry={nodes.defaultobject.geometry}
        material={materials.Modello3D_scalato}
        onClick={(e) => alert("descrizione")}
      />
    </group>
  );
}

useGLTF.preload(model);
 */