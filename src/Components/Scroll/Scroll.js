import { Canvas } from "@react-three/fiber";
import { ScrollContainer } from "./ScrollContainer";
import { ScrollControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import Loading from "../Loading/Loading";
import React, { useRef, Suspense } from "react";

export default function Scroll() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <Stars speed={10.5} count={500} /> */}
      <Suspense fallback={<Loading />}>
        <ScrollControls pages={10} /* infinite={true} */>
          <ScrollContainer />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
