// HorizontalImageSlider.tsx
"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface Image {
  id: number;
  src: string;
  alt: string;
  href?: string;
}

interface HorizontalImageSliderProps {
  images: Image[];
}

const HorizontalImageSlider: React.FC<HorizontalImageSliderProps> = ({
  images,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full md:p-10">
      <Slider {...settings}>
        {images.map((image) => (
          <Link href={image.href ?? "/"} key={image.id} className="px-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-xl transition hover:brightness-110 shadow shadow-blue-500/40"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalImageSlider;
