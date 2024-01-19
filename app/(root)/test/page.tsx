"use client";

import HorizontalImageSlider from "@/components/ui/image-slider";

export default function Page() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1679470208877-5ac518e63b0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584986098745-02507619826c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 4",
    },
  ];

  return (
    <div>
      <HorizontalImageSlider images={images} />
    </div>
  );
}
