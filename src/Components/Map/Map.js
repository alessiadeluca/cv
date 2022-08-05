import { Canvas } from "@react-three/fiber";

import { MapControls, OrbitControls, ScrollControls } from "@react-three/drei";
import { Stars, Sparkles, Cloud } from "@react-three/drei";
import Loading from "../Loading/Loading";
import React, { useRef, Suspense } from "react";
import Surface from "../Surface/Surface";
import Model from "../Model/Model";

export default function Scroll() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <Stars speed={10.5} count={500} /> */}
      <Sparkles count={1000} scale={[32, 5, 32]} position={[0, -1, 0]} />

      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.1} />

        <pointLight
          position={[0, 130, -2]}
          intensity={0.1}
          noise={[0, 0, 999]}
        />

        <Surface position={[0, -2, -2]} />
        {/* <Model scale={[2, 2, 2]} position={[-0.2, 1.6, -0.6]} /> */}
        {/* <MapControls /> */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
