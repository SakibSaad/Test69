import Image from "next/image";
import { myfont } from "@/font";

export function HeroSection() {
  return (
    <>
      {/* <nav className="z-10  flex justify-between items-center w-[1200px] h-[120px] absolute">
        <div className="branding">
          <Image src="/img/logo.png" width={152} height={32} alt="" />
        </div>

        <div className="navigation flex p-5 items-center">
          <div className="flex flex-row pr-5 mr-5  items-center h-[60px] border-neutral-300 border-r-[2px] border-opacity-50 ">
            <div className="link px-5">Home</div>
            <div className="link px-5">Rovers</div>
            <div className="link px-5">Vision</div>
            <div className="link px-5">Projects</div>
            <div className="link px-5">Research</div>
          </div>
          <div className="flex w-[300px]">
            <div className="link px-5">Home</div>
            <div className="sponsor-nav_button px-5">Become Sponsor</div>
          </div>
        </div>
      </nav> */}

      <div className="z-10 w-full md:w-[1200px] h-screen flex justify-center items-center md:mt-0 mt-[-200px]">
        <div className="flex justify-end items-center w-full h-3/4 flex-col text-center">
          <div className="tracking-[1rem] text-xl mb-4 font-light">
            UIU MARS ROVER TEAM
          </div>
          <Image
            className="mb-12"
            src="/flare.png"
            width={1100}
            height={8}
            alt=""
          />
          <h1
            className={
              myfont.className +
              " tracking-widest font-black mb-8 md:mb-12 lg:text-3xl md:text-2xl sm:text-lg md:mt-0"
            }
          >
            UMRT, the newborn conviction of shaping unattainability about Mars.
          </h1>

          <div className="w-full md:max-w-[1089px] sm:max-w-full">
            <Image src="/brands.png" width={1089} height={64} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

