import { Canvas } from "@react-three/fiber";
import { ScrollContainer } from "./ScrollContainer";
import { ScrollControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";

export default function Scroll() {
  return (
    <Canvas style={{ height: "100%" }}>
      <Stars speed={0.5} count={500} />
      <ScrollControls pages={10} /* infinite={true} */>
        <ScrollContainer />
      </ScrollControls>
    </Canvas>
  );
}
