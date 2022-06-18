/* import React, { useRef } from "react";
import { Sphere, useGLTF } from "@react-three/drei";
import model from "./coral.glb";
import { Sampler } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);

  

  const mesh = useRef(nodes);
  const instances = useRef();
  console.log(instances);
  return (
    <Sampler>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      

      <instancedMesh args={[null, null, 4]}>
        <sphereGeometry args={[0.01, 32, 32]} />
        <meshNormalMaterial />
      </instancedMesh>
    </Sampler>
  );

  
}

useGLTF.preload(model); */

import React, { useRef } from "react";
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
