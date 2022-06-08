import { Scroll, useScroll } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Hubble from "../Spacecrafts/hubble/hubble";

export const ScrollContainer = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useFrame((state, delta) => {
    ref1.current.position.set(1.5, 0, -20 + 20 * scroll.offset);
    ref1.current.scale.set(
      scroll.range(3 / 6, 1 / 3),
      scroll.range(3 / 6, 1 / 3),
      scroll.range(3 / 6, 1 / 3),
    );
    ref2.current.position.set(-1.5, 0, -10 + 20 * scroll.offset);
    ref2.current.scale.set(
      scroll.range(1 / 6, 1 / 3),
      scroll.range(1 / 6, 1 / 3),
      scroll.range(1 / 6, 1 / 3),
    );
    ref3.current.position.set(1.5, 0, 0 + 20 * scroll.offset);

    ref4.current.position.set(-scroll.offset * 12, 0, 0);
    ref4.current.rotation.set(-scroll.offset * 12, -scroll.offset * 20, 0);
  });

  function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }

  return (
    <>
      <mesh ref={ref4} scale={[0.2, 0.2, 0.2]}>
        <Hubble />
        <ambientLight />
        {/* <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} /> */}
      </mesh>
      <mesh ref={ref1} position={[0, 0, 0]}>
        <torusBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={ref2} position={[0, 0, 0]}>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={ref3}>
        <sphereBufferGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
