"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RoverButton, RoverNavBar } from "../../components/rover-navbar";
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
            Maven
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
            Maven
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
          <div className="text-6xl font-sans font-bold">Maven</div>
          <div className="items-center mt-2 aspect-auto">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 1st Generation ROVER
            </h4>
          </div>
            <p className=" px-10 text-justify mt-7 py-10">
              UIU Mars Rover Team achieved 1st place in Asia and 13th worldwide
              in the prestigious University Rover Challenge (URC) 2023.
            </p>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-sans font-bold aspect-auto overflow-hidden text-black">
            Maven
          </div>

          <div className="ml-[240px] mt-2 flex text-2xl aspect-auto">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-wider text-black">
              OUR 1st Generation ROVER
            </h4>
          </div>

          <div className="ml-[240px] mt-[106px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              UIU Mars Rover Team achieved 1st place in Asia and 13th worldwide
              in the prestigious University Rover Challenge (URC) 2022.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/Maven.png"
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
          <div className="text-6xl font-sans font-bold ">Arm</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <p className=" px-10 text-justify mt-6">
            The six-degree-of-freedom robotic arm excels in tasks such as drawer
            manipulation, cache insertion, USB drive handling, electrical socket
            engagement, button pressing, switch flipping, knob turning, keyboard
            typing, and screw tightening. Enhanced by a cycloidal transmission
            and semi-differential wrist mechanism, it achieves heightened
            precision with reduced mass.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-sans font-bold aspect-auto overflow-hidden text-black">
            Arm
          </div>

          <div className="ml-[240px] mt-2 flex text-2xl aspect-auto">
            {/* <h4 className="scroll-m-20 text-xl font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>

          <div className="ml-[240px] mt-[50px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              The six-degree-of-freedom robotic arm excels in tasks such as
              drawer manipulation, cache insertion, USB drive handling,
              electrical socket engagement, button pressing, switch flipping,
              knob turning, keyboard typing, and screw tightening. Enhanced by a
              cycloidal transmission and semi-differential wrist mechanism.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/mavenarm.png"
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
          <div className="text-6xl font-sans font-bold ">Body</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <p className=" px-10 text-justify py-8">
            Rocker bogie suspension with a four-level gear differential
            mechanism has been implemented to observe both anterior and rare
            impacts. We conducted a finite limit analysis to check the stability
            of our chassis subsystem using the Ace adaptivity machine topology.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-sans font-bold aspect-auto text-black">
            Body
          </div>

          <div className="ml-[240px] mt-[86px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              Rocker bogie suspension with a four-level gear differential
              mechanism has been implemented to observe both anterior and rare
              impacts. We conducted a finite limit analysis to check the
              stability of our chassis subsystem using the Ace adaptivity
              machine topology.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/mavenbody.png"
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
          <div className="text-6xl font-sans font-bold">Wheel</div>
          <div className="items-center mt-2 aspect-auto">
            {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-wider text-black">
              OUR 2nd Generation ROVER
            </h4> */}
          </div>
          <p className=" px-10 text-justify py-8">
            We upgraded the chassis subsystem with newly designed 3D-printed
            wheels for optimal suspension and traction on competition terrain.
            The wheels feature a flexible outer layer surrounding a rigid inner
            honeycomb structure, ensuring superior performance.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="ml-[240px] mt-[100px] flex text-9xl font-sans font-bold aspect-auto overflow-hidden text-black">
            Wheel
          </div>

          <div className="ml-[240px] mt-[86px] w-[500px] text-justify text-lg flex aspect-auto text-black">
            <p>
              We upgraded the chassis subsystem with newly designed 3D-printed
              wheels for optimal suspension and traction on competition terrain.
              The wheels feature a flexible outer layer surrounding a rigid
              inner honeycomb structure, ensuring superior performance.
            </p>
          </div>
        </div>

        {/* image place */}
        <div className="flex items-center justify-center ">
          <img
            src="/mavenwheel.png"
            alt=""
            className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[80vh] xl:w-auto absolute xl:right-10 lg:transform xl:-translate-y-1/2 top-96 r-0 object-cover"
          />
        </div>
      </section>
    </>
  );
}

