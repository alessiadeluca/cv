import React, { useRef, useState } from "react";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Controls from "./Controls";

import Lights from "./Lights";
import {
  OrbitControls,
  Stars,
  Plane,
  Sphere,
  Loader,
  Html,
  Torus,
  Cone,
  Stats,
  Billboard,
  Text,
  MapControls,
} from "@react-three/drei";
import { Camera, TextureLoader } from "three";

import elev from "./elevation.png";
import alpha from "./opacity.png";
import rocks from "./mount.jpeg";

import Model from "./Model";

function Terrain({ wireframe, range }) {
  const [height, opacity, color] = useLoader(TextureLoader, [
    elev,
    alpha,
    rocks,
  ]);

  return (
    <>
      <Plane rotation={[-1.5, 0, 0]} args={[32, 32, 320, 320]}>
        <meshStandardMaterial
          attach="material"
          color="#00ffff"
          /* color="#C1440E" */
          wireframe
          map={color}
          displacementMap={height}
          displacementScale={6}
          alphaMap={opacity}
          transparent
          depthWrite={false}
          opacity={1}
        />
      </Plane>
    </>
  );
}

export default function Surface() {
  return (
    <>
      {/* <axesHelper args={[15]} /> */}
      <Terrain />
      <Stats />
    </>
  );
}
