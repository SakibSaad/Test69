"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Mars = () => {
  const mars_diffuse = useLoader(TextureLoader, "/mars_diffuse.jpg");
  const mars_bump = useLoader(TextureLoader, "/bump.jpg");

  const mars = useRef(null);
  useFrame((state, delta) => {
    mars.current.rotation.y -= delta * 0.05;
    mars.current.rotation.x += delta * 0.02;
  });
  return (
    <mesh scale={3.5} position={[0, -1.8, 0]} ref={mars}>
      {/* Width and height segments for displacementMap */}
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial
        bumpScale={0.015}
        map={mars_diffuse}
        bumpMap={mars_bump}
      />
    </mesh>
  );
};

const Sun = () => {
  const sun = useRef(null);
  useFrame((state, delta) => {
    // sun.current.position.z += delta * 10 * Math.sin(delta * 10);
  });
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} color={new THREE.Color("#231058")} />
      <pointLight
        position={[100, 300, -400]}
        intensity={2.5}
        color={new THREE.Color("#FEB46C")}
      />
      <pointLight
        ref={sun}
        position={[50, 300, -220]}
        intensity={0.95}
        color={new THREE.Color("#FFBDBD")}
      />
    </Suspense>
  );
};
export const Sun2 = () => {
  const sun = useRef(null);
  useFrame((state, delta) => {
    // sun.current.position.z += delta * 10 * Math.sin(delta * 10);
  });
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.1} color={new THREE.Color("#231058")} />
      <pointLight
        ref={sun}
        position={[100, 0, 0]}
        intensity={0.35}
        color={new THREE.Color("#FFBDBD")}
      />
    </Suspense>
  );
};

const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

export function HeroBackground() {
  return (
    <>
      <div className="z-[0] sky-background w-full h-full absolute bg-[url('/stars_e.jpg')] bg-cover overflow-hidden"></div>
      <div className="3d-background w-full h-full absolute  overflow-hidden">
        <View className="relative h-full w-full">
          <Sun />
          <Mars />
        </View>
      </div>
      <div className="z-10 sky-background w-full h-full absolute bg-[url('/stars_overlay.png')] bg-cover"></div>
    </>
  );
}
