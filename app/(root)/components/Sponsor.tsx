import { GlobalNavbar } from "@/components/Navbar";

export function Sponsor() {


    return (
        <>
            <div className="relative w-full h-full">
  <div className="absolute z-10 w-full h-full overflow-hidden">
    <div className="absolute inset-0 flex justify-center items-center" style={{ marginLeft: '25%', marginTop: '45%', width: '50%', height: '9.5%' }}>
      <a href="https://docs.google.com/forms/d/18p0IscHi-b1JlCndJS_oB25pDUC4HvPRKsqbAO6_Jgc/edit?usp=drivesdk"><img className="max-w-full h-auto" src="becomesponsor.png" alt="" /></a>
    </div>
  </div>

  <div className="z-10 w-full h-full">
  {/* <iframe
                src={'https://res.cloudinary.com/dlvoimfrh/video/upload/v1705167427/public/video/knwlini8fohgzgjzcg8x.mp4'}
                className="w-full aspect-[16/9] rounded-md"
                allowFullScreen={true}
              ></iframe> */}
    <div className="w-full">
      <video className="w-full" 
      autoPlay
      playsInline // Ensures inline playback on mobile
      muted // Mute the video initially to increase autoplay chances
      controls={false} // Hides the native controls
      >
        <source src={'https://res.cloudinary.com/dlvoimfrh/video/upload/v1705167427/public/video/knwlini8fohgzgjzcg8x.mp4'} type="video/mp4" />
        Your browser does not support t
      </video>
    </div>
  </div>
</div>



        </>
    );
}