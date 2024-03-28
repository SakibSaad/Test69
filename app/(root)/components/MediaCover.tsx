import { GlobalNavbar } from "@/components/Navbar";
import HorizontalImageSlider from "@/components/ui/image-slider";
import { myfont } from "@/font";

export function MediaCover() {
  const images = [
    {
      id: 1,
      src: "./News/Daily Star.png",
      alt: "Image 1",
      href: "https://www.thedailystar.net/campus/campus/news/uiu-and-mist-secure-3rd-and-5th-position-respectively-the-anatolian-rover-challenge-3377401?fbclid=IwAR0aGG2D0SIuRF3A412rdi8IGIWD-__5p5hjHlAmhfp5vljILuECVaRECCM",
    },
    {
      id: 2,
      src: "./News/TBS.png",
      alt: "Image 2",
      href: "https://www.tbsnews.net/economy/corporates/uiu-mars-rover-first-asia-university-rover-challenge-2023-656210",
    },
    {
      id: 3,
      src: "./News/Prothom Alo.png",
      alt: "Image 3",
      href: "https://www.prothomalo.com/lifestyle/zn346q20ux",
    },
    {
      id: 4,
      src: "./News/Kaler kontho.png",
      alt: "Image 4",
      href: "https://www.kalerkantho.com/feature/oboshor/2023/06/27/1293700?fbclid=IwAR3RsoyqO6pGmM7twedRVoo85-amMn3ZzN8THyZmx8-zGD9RT1t9PAc0-7s&fbclid=IwAR3Mwld318xYUWWBJ4M_kHMZe1n6gXAwqQRfCNfKcYA0lGxve7yzHzGl_ts",
    },
    {
      id: 5,
      src: "./News/Jay jay din.png",
      alt: "Image 4",
      href: "https://www.facebook.com/UIUMRT/photos/a.117131030910628/143773021579762/",
    },
    {
      id: 6,
      src: "./News/Jugantar.png",
      alt: "Image 4",
      href: "https://www.jugantor.com/todays-paper/it-world/559360/%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%B0%E0%A7%8B%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%8F%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A7%9F-%E0%A6%B6%E0%A7%80%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6",
    },
    {
      id: 7,
      src: "./News/Kal bela.png",
      alt: "Image 4",
      href: "https://epaper.kalbela.com/2023/07/02/2nd-Edition/pages/page05.jpg?v=1",
    },
    {
      id: 8,
      src: "./News/Daily Star 2.png",
      alt: "Image 4",
      href: "https://www.thedailystar.net/tech-startup/news/uiu-places-1st-among-asian-teams-university-rover-challenge-2023-3340006?fbclid=IwAR0fasfPuxFwO3IaMrHk-uMrdZqKagO0yR0nXUl1WgzHf-3wnfOUJE6ML84",
    },
    {
      id: 9,
      src: "./News/Daily Star 3.png",
      alt: "Image 4",
      href: "https://www.prothomalo.com/lifestyle/ebfdzdsg31",
    },
    {
      id: 10,
      src: "./News/Daily Star 4.png",
      alt: "Image 4",
      href: "https://www.thedailystar.net/shout/bulletin-board/news/uiu-mars-rover-selected-the-university-rover-challenge-2022-2999251?fbclid=IwAR2krz5tvfRwkE4LmzQeWRSPdZVoUF0Wni-BKL36Vfs8UMArlM309qjyhs0",
    },
    {
      id: 11,
      src: "./News/Prothom alo 2.png",
      alt: "Image 4",
      href: "https://www.prothomalo.com/lifestyle/ebfdzdsg31",
    },
    {
      id: 12,
      src: "./News/Prothom alo 3.png",
      alt: "Image 4",
      href: "https://www.prothomalo.com/lifestyle/%E0%A6%8F%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A7%9F-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%B0%E0%A7%8B%E0%A6%AD%E0%A6%BE%E0%A6%B0",
    },
    {
      id: 13,
      src: "./News/Protidiner Bangladesh.png",
      alt: "Image 4",
      href: "https://protidinerbangladesh.com/feature/47658/%E0%A6%8F%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%87%E0%A6%B0%E0%A6%BE-%E0%A6%87%E0%A6%89%E0%A6%86%E0%A6%87%E0%A6%87%E0%A6%89-%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8-%E0%A6%B0%E0%A7%8B%E0%A6%AD%E0%A6%BE%E0%A6%B0?fbclid=IwAR2CK3zSStHL6VaPM2CJrMcbprOi6kaQw4Pwq1nROeK6LgxJartEerA-oiI",
    },
    {
      id: 14,
      src: "./News/Somokal.png",
      alt: "Image 4",
      href: "https://samakal.com/feature/article/2206117599/%E0%A6%8F%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%87%E0%A6%B0%E0%A6%BE-%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8-%E0%A6%B0%E0%A7%8B%E0%A6%AD%E0%A6%BE%E0%A6%B0",
    },
  ];

  return (
    <>
      <div
        className="h-auto w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Earth.png')` }}
      >
        {/* <div className="py-10"><GlobalNavbar></GlobalNavbar></div> */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 lg:space-x-72 p-10">
          <h1 className="text-3xl md:text-6xl lg:text-6xl drop-shadow-2xl">
            <p className={
                myfont.className }>
              MEDIA OUT<br/>STORM AFTER <br />
              URC 2023
            </p>
          </h1>

          <div className="max-w-lg">
            <p className="mt-5 md:mt-0">
              UIU Mars Rover team achieved first place in Asia at the University
              Rover Challenge (URC) 2023, hosted at the Mars Desert Research
              Station (MDRS) in Southern Utah, USA, and secured the third
              position globally at the Anatolian Rover Challenge 2023 in Ankara,
              Turkey. This is the second consecutive year the team has become
              first among Asian teams in the URC. The team has also reached 9th
              overall out of 37 global finalists, a remarkable achievement for
              our university and country.
            </p>
            {/* <p className="mt-6">
        We are a team of students passionate about designing and building the next generation of Mars and Lunar rovers.
      </p> */}
            <div className="z-[10] mt-6 md:mt-12 h-[70px] w-[240px] md:w-[370px] mx-auto md:mx-0 flex justify-center items-center">
              
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrEtYJUl7xNgvPeX9mhFKqmrKgF0R6sOjgczemnVicpL_TXw/closedform"><img src="button.png" alt="" /></a>
            </div>
          </div>
        </div>

        <div className="my-20 md:my-8">
          <HorizontalImageSlider images={images} />
        </div>
      </div>
    </>
  );
}
