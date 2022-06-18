import { Html, Scroll, useScroll } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Hubble from "../Spacecrafts/hubble/hubble";
import Surface from "../Surface/Surface";

export const ScrollContainer = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useFrame((state, delta) => {
    /* ref1.current.position.set(1.5, 0, -20 + 20 * scroll.offset);
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
    ref3.current.position.set(1.5, 0, 0 + 20 * scroll.offset); */

    /* console.log(scroll.offset); */

    if (scroll.visible(0 / 3, 1 / 5)) {
      ref4.current.rotation.set(0, scroll.offset * 10, 0);
    }
    if (scroll.visible(1 / 5, 3 / 5)) {
      ref4.current.rotation.set(0, scroll.offset * 10, 0);
    }
    if (scroll.visible(3 / 5, 5 / 5)) {
      ref4.current.position.set(scroll.range(3 / 5, 5 / 5) * 10, 0, 0);
    }

    /* ref4.current.rotation.set(0, state.clock.elapsedTime / 10, 0); */
    /* console.log(state.clock.elapsedTime); */

    /* ref4.current.visible = scroll.visible(0, 1 / 10); */
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
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 10, -2]} intensity={0.2} />
      <mesh ref={ref4}>
        <Surface />
        {/* <boxBufferGeometry />
        <meshNormalMaterial /> */}
      </mesh>
      {/* <mesh ref={ref1}>
        <torusBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={ref2}>
        <torusBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={ref3}>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};

/* return (
  <>
    <mesh ref={ref4}>
      <Box />
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 10, -2]} intensity={0.2} />
    </mesh>
    <mesh ref={ref1}>
      <torusBufferGeometry />
      <meshNormalMaterial />
    </mesh>
    <mesh ref={ref2}>
      <boxBufferGeometry />
      <meshNormalMaterial />
    </mesh>
    <mesh ref={ref3}>
      <sphereBufferGeometry />
      <meshNormalMaterial />
    </mesh>
  </>
); */
