export function OurAchievement() {
  return (
    <>
      <div className=" w-screen h-full bg-[url('/stars_e_flip.jpg')] bg-cover flex justify-start items-center flex-col ">
        <div className="navigation w-2/3 flex p-5 items-center  flex-row h-28 justify-between">
          <h1 className={`tracking-wideest text-2xl font-black `}>
            Our Achievements
          </h1>
          <div className="flex justify-start items-center">
            <div className="flex flex-row pr-5 mr-5  items-center h-[60px]  ">
              <div className="link px-5">Home</div>
              <div className="link px-5">Rovers</div>
              <div className="link px-5">Vision</div>
              <div className="link px-5">Projects</div>
            </div>
            <div className="flex bg-white rounded-md">
              <div className="sponsor-nav_button px-10 h-12 text-black text-center font-bold my-auto pt-3 ">
                Meet The Team
              </div>
            </div>
          </div>
        </div>
        <div className="navigation w-full border-neutral-300 border-b-[2px] border-opacity-50 "></div>
      </div>
    </>
  );
}
