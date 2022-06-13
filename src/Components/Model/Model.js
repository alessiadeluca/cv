import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import model from "./model.glb";
export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultobject.geometry}
        material={materials.Modello3D_scalato}
      />
    </group>
  );
}

useGLTF.preload(model);
