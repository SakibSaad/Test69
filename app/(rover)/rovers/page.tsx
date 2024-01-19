"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RoverButton, RoverNavBar } from "../components/rover-navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);

  const availableSections = [section1, section2, section3, section4];

  return (
    <div
      className="m-0 p-0 bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: "url('/roverbg.png')",
      }}
    >
      <RoverNavBar />
      <RoverButton />

      <div>{availableSections[activeSection]()}</div>

      <div className="mt-[400px] md:mt-[490px] inset-0 flex items-center justify-center xl:hidden">
        <div className="flex overflow-hidden border-none rounded-2xl rtl:flex-row-reverse w-min text-base drop-shadow divide-y text-center divide-pink-200">
          <button
            onClick={() => setActiveSection(0)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Telos
          </button>

          <button
            onClick={() => setActiveSection(1)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Arm
          </button>

          <button
            onClick={() => setActiveSection(2)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Body
          </button>
          <button
            onClick={() => setActiveSection(3)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Wheel
          </button>
        </div>
      </div>

      <div className="absolute right-10 hidden xl:block">
        <div className="grid overflow-hidden border-none rounded-2xl rtl:flex-row-reverse w-min text-base drop-shadow divide-y text-center divide-pink-200">
          <button
            onClick={() => setActiveSection(0)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Telos
          </button>

          <button
            onClick={() => setActiveSection(1)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Arm
          </button>

          <button
            onClick={() => setActiveSection(2)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Body
          </button>
          <button
            onClick={() => setActiveSection(3)}
            className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
          >
            Wheel
          </button>
        </div>
      </div>
    </div>
  );
}

function section1() {
  const tooltipsInfo = [
    "Maven Arm",
    "Maven mesh tire",
    "Maven Chassis",
    "Maven Wheels",
  ];

  return (
    <>
      <section>
        <div className="text-black text-center pt-4 xl:hidden">
          <div className="text-6xl font-serif ">Telos</div>
          <div className="items-center mt-2 aspect-auto">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4>
          </div>
          <p className=" px-10 text-justify mt-6">
               UIU Mars Rover Team achieved 1st place in Asia and 9th worldwide
              in the prestigious University Rover Challenge (URC) 2023. We
              got the 2nd Highest in Extreme Delivery Mission.  That year, we also participated
              in Anatolian Rover Challenge (ARC) and secured 3rd place worldwide bringing proud for
              UMRT crew and Bangladesh.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-serif aspect-auto overflow-hidden text-black">
            TELOS
          </div>

          <div className="ml-[240px] mt-2 flex text-2xl aspect-auto">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4>
          </div>

          <div className="ml-[240px] mt-[30px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              UIU Mars Rover Team achieved 1st place in Asia and 9th worldwide
              in the prestigious University Rover Challenge (URC) 2023. We
              got the 2nd Highest in Extreme Delivery Mission.  That year, we also participated
              in Anatolian Rover Challenge (ARC) and secured 3rd place worldwide bringing proud for
              UMRT crew and Bangladesh.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/Telos.png"
            alt=""
            className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[80vh] xl:w-auto absolute xl:right-10 lg:transform xl:-translate-y-1/2 top-96 r-0 object-cover"
          />
        </div>
      </section>
    </>
  );
}

function section2() {
  const tooltipsInfo = [
    "Maven Arm",
    "Maven mesh tire",
    "Maven Chassis",
    "Maven Wheels",
  ];
  return (
    <>
      <section>
        <div className="text-black text-center pt-4 xl:hidden">
          <div className="text-6xl font-serif ">Arm</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <div className="mt-[60px]">
          <p className=" px-10 text-justify mt-6">
            The rover's upgraded arm features a semi-differential wrist
            mechanism with a 1:3:9 gear reduction ratio. This enhanced arm, with
            multiple degrees of freedom, facilitates precise manipulation of
            objects with diverse shapes and fragility, including drawer
            operations and cache insertion.
          </p>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-serif aspect-auto overflow-hidden text-black">
            Arm
          </div>

          <div className="ml-[240px] mt-2 flex text-2xl aspect-auto">
            {/* <h4 className="scroll-m-20 text-xl font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>

          <div className="ml-[240px] mt-[86px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              The rover's upgraded arm features a semi-differential wrist
              mechanism with a 1:3:9 gear reduction ratio. This enhanced arm,
              with multiple degrees of freedom, facilitates precise manipulation
              of objects with diverse shapes and fragility, including drawer
              operations and cache insertion.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/telosarm.png"
            alt=""
            className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[80vh] xl:w-auto absolute xl:right-10 lg:transform xl:-translate-y-1/2 top-96 r-0 object-cover"
          />
        </div>
      </section>
    </>
  );
}

function section3() {
  const tooltipsInfo = [
    "Maven Arm",
    "Maven mesh tire",
    "Maven Chassis",
    "Maven Wheels",
  ];
  return (
    <>
      <section>
        <div className="text-black text-center pt-4 xl:hidden">
          <div className="text-6xl font-serif">Body</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <div className="mt-[60px]">
          <p className=" px-10 text-justify mt-6">
          TELOS incorporates a rocker-bogie suspension with a rear differential bar for stability and space optimization. Enhanced maneuverability is achieved through a servo-driven steering mechanism, allowing the rover to move sideways and pivot on a single point, ensuring versatile exploration capabilities..
          </p>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-serif aspect-auto text-black">
            Body
          </div>

          <div className="ml-[240px] mt-[95px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
            TELOS incorporates a rocker-bogie suspension with a rear differential bar for stability and space optimization. Enhanced maneuverability is achieved through a servo-driven steering mechanism, allowing the rover to move sideways and pivot on a single point, ensuring versatile exploration capabilities.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/telosbody.png"
            alt=""
            className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[80vh] xl:w-auto absolute xl:right-10 lg:transform xl:-translate-y-1/2 top-96 r-0 object-cover"
          />
        </div>
      </section>
    </>
  );
}

function section4() {
  const tooltipsInfo = [
    "Maven Arm",
    "Maven mesh tire",
    "Maven Chassis",
    "Maven Wheels",
  ];

  return (
    <>
      <section>
        <div className="text-black text-center pt-4 xl:hidden">
          <div className="text-6xl font-serif ">Wheel</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <div className="mt-[83px]">
          <p className=" px-10 text-justify mt-6">
          We upgraded the chassis subsystem with newly designed 3D-printed wheels for optimal suspension and traction on competition terrain. The wheels feature a flexible outer layer surrounding a rigid inner honeycomb structure, ensuring superior performance.
          </p>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-serif aspect-auto overflow-hidden text-black">
            Wheel
          </div>

          <div className="ml-[240px] mt-[95px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
            We upgraded the chassis subsystem with newly designed 3D-printed wheels for optimal suspension and traction on competition terrain. The wheels feature a flexible outer layer surrounding a rigid inner honeycomb structure, ensuring superior performance.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/teloswheel.png"
            alt=""
            className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[80vh] xl:w-auto absolute xl:right-10 lg:transform xl:-translate-y-1/2 top-96 r-0 object-cover"
          />
        </div>
      </section>
    </>
  );
}

