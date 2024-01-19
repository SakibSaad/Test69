"use client";

import { Suspense, useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { View } from "@/components/canvas/View";
import Image from "next/image";
import { GlobalNavbar } from "@/components/Navbar";

const Mars2 = () => {
  const mars_diffuse = useLoader(TextureLoader, "/mars_diffuse.jpg");
  const mars_bump = useLoader(TextureLoader, "/bump.jpg");

  const mars = useRef(null);
  useFrame((state, delta) => {
    mars.current.rotation.y -= delta * 0.05;
    mars.current.rotation.x += delta * 0.02;
  });
  return (
    <mesh scale={3.5} position={[-1.5, 0, 0]} ref={mars}>
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

export function OurVisionSection() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('/stars_e_flip.jpg')] bg-cover flex justify-center items-center flex-col ">
        <div className="z-[10] w-full h-full absolute  overflow-hidden">
          {/* <GlobalNavbar></GlobalNavbar> */}
        </div>
        <div className="z-[0] sky-background w-full h-full absolute bg-[url('/stars_e.jpg')] bg-cover overflow-hidden"></div>



        <div className="3d-background w-full h-full absolute  overflow-hidden">

          <View className="relative h-full w-full">
            <Sun2 />
            <Mars2 />
          </View>


        </div>


        <div className="navigation z-10 w-4/5 flex p-5 items-center flex-col lg:flex-row h-full justify-between">
  <div className="w-full lg:w-1/2 flex items-center lg:items-start flex-col">
    <h1 className="ml-0 text-center md:ml-0 md:text-center mt-6 md:mt-16 lg:ml-0 lg:mt-0 lg:text-left tracking-widest text-2xl lg:text-3xl font-black md:mb-10 mb-5">
      Our Vision
      <div className="ml-[-200px] md:ml-[-320px] mt-5 w-[880px] md:w-[1000px] lg:w-[750px] lg:ml-0 border-neutral-300 border-b-[2px] border-opacity-50"></div>
    </h1>
    
    <p className="text-left  justify-center">
      We are a team of students passionate to pioneer the development of a thriving robotics ecosystem in Bangladesh. We aspire to cultivate a culture of innovation by establishing a dedicated research laboratory focused on robotics. Our mission is to drive advancements in robotics, machine learning, and artificial intelligence, fostering progress and knowledge in these feilds for a brighter future. 
    </p>
    {/* Add more content as needed */}
    <div className="mt-10 md:mt-8 lg:mt-20">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrEtYJUl7xNgvPeX9mhFKqmrKgF0R6sOjgczemnVicpL_TXw/closedform"><img src="button.png" alt="" /></a>
    </div>
  </div>

  
  <div className="navigation z-10 w-full lg:ml-12 lg:w-1/2 flex p-5 items-center lg:items-start flex-col justify-between">
    <h1 className=" ml-0 text-center text-xl sm:text-2xl md:text-4xl lg:ml-10 lg:mt-20 pl-[80] md:text-center lg:text-left tracking-widest lg:text-6xl md:mt-5 font-black mb-10">
      WE DREAM AT THE COSMIC SCALE
    </h1>
    <Image
      className="z-10 mx-auto lg:ml-0"
      src="/vid.png"
      width={700.99}
      height={380.88}
      alt=""
    />
  </div>
</div>

       
        <div className="navigation w-full border-neutral-300 border-b-[2px] border-opacity-50  mb-16 "></div>
      </div>
      
    </>
  );
}