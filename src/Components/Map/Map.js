import { Canvas } from "@react-three/fiber";

import { MapControls, OrbitControls, ScrollControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import Loading from "../Loading/Loading";
import React, { useRef, Suspense } from "react";
import Surface from "../Surface/Surface";
import Model from "../Model/Model";

export default function Scroll() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <Stars speed={10.5} count={500} /> */}
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.1} />
        <hemisphereLight intensity={0.125} color="#fff" />
        <pointLight position={[0, 10, -2]} intensity={0.2} />
        <Surface position={[0, -2, -2]} />
        <Model scale={[25, 25, 25]} position={[1, 1, 12]} />
        {/* <MapControls /> */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
