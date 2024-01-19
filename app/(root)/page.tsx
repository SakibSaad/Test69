"use client";

import Image from "next/image";

import { HeroBackground } from "./components/HeroBackgorund";
import { HeroSection } from "./components/HeroSection";
import { MediaCover } from "./components/MediaCover";
import { OurAchievement } from "./components/OurAchievement";
import { OurVisionSection } from "./components/OurVision";
import { Sponsor } from "./components/Sponsor";
import { Footer } from "./components/Footer";

export default function Page() {
  // const sky = useLoader(TextureLoader, '/stars_e.jpg');

  return (
    <>
      <HeroBackground />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <HeroSection />

        <Image
          className="z-10 md:mt-20"
          src="/award.png"
          width={839}
          height={164.34}
          alt=""
        />
        <Image
          className="z-10 mt-5"
          src="/img1.png"
          width={1242.53}
          height={519.09}
          alt=""
        />
        <MediaCover />
        {/* <OurAchievement /> */}
        <OurVisionSection />
        <Sponsor/>
        <Footer/>
      </main>
    </>
  );
}
