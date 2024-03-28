import Image from "next/image";
import Link from "next/link";

export function RoverNavBar() {
  return (
    <>
      <nav className="navigation flex items-center bg-no-repeat overflow-hidden h-[70px] justify-between border-b shadow-md border-gray-400">
        <div className="branding pl-5">
          <Link href={"/"}>
            <Image src="/img/logo.png" width={152} height={32} alt="" />
          </Link>
        </div>

        <div className="navigation flex p-5 items-center">
          <div className="flex flex-row pr-5 mr-5 items-center border-neutral-300 border-r-[2px] border-opacity-50 text-sm md:text-lg">
            {/* <div className="">
              <button className="space-x-6 px-4 border border-white rounded-full text-sm text-white bg-orange-500 hover:bg-inherit hover:bg-orange-400 hover:border-transparent">
                <Link href={"/rovers/telos"}>Telos</Link>
              </button>
              <button className="space-x-6 px-4 border border-white rounded-full text-sm text-white bg-orange-500 hover:bg-inherit hover:bg-orange-400 hover:border-transparent">
                MAVEN
              </button>
            </div> */}

            <Link href="/rovers" className="link px-5 md:text-lg">
              Rovers
            </Link>

            {/* <Link
              href="/robots"
              className="link px-3 text-white hover:text-gray-300 transition"
            >
              Robots
            </Link>
            <Link
              href="/research"
              className="link px-3 text-white hover:text-gray-300 transition"
            >
              Research
            </Link>
            <Link
              href="/ai"
              className="link px-3 text-white hover:text-gray-300 transition"
            >
              Ai
            </Link>
            <Link
              href={"/rovers/learn"}
              className="link px-3 text-white hover:text-gray-300 transition"
            >
              Learn
            </Link> */}
          </div>

          <div className="py-3 flex justify-end">
            <Link
              href={"/team"}
              className="md:text-lg px-2 p-5 mr-4 rounded-full text-sm hover:bg-neutral-100 hover:text-black"
            >
              Team
            </Link>

            <button className="md:text-lg space-x-6 md:px-4 md:h-12 md:mt-2 px-5 border border-white rounded-full text-sm text-white bg-orange-500 hover:bg-inherit hover:bg-orange-400 hover:border-transparent">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrEtYJUl7xNgvPeX9mhFKqmrKgF0R6sOjgczemnVicpL_TXw/closedform">Join The Team</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export function RoverButton() {
  return (
    <div className="z-10 flex justify-center mt-4 mx-4">
      <div className="z-10 flex  overflow-hidden border-none divide-x rounded-2xl rtl:flex-row-reverse dark:divide-white w-min text-base drop-shadow-md ">
        <Link
          href="/rovers/maven"
          className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
        >
          Maven
        </Link>

        <Link
          href="/rovers"
          className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-amber-700 bg-amber-600"
        >
          Telos
        </Link>
      </div>
    </div>
  );
}

export function TeamButton() {
  return (
    <div className="flex justify-center">
      <div className="ml-[-1px] z-20 flex md:mt-5 mx-4 fixed md:top-0">
      <div className="flex overflow-hidden border-none divide-x rounded-2xl rtl:flex-row-reverse dark:divide-white w-min text-base drop-shadow-md ">
        <Link
          href="/team/urc22"
          className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-orange-700 bg-orange-600"
        >
          URC2022
        </Link>

        <Link
          href="/team"
          className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-amber-700 bg-amber-600"
        >
          URC2023
        </Link>
        <Link
          href="/team/advisors"
          className="px-2 py-2 font-medium text-white transition-colors duration-200 sm:px-6  hover:bg-amber-700 bg-amber-600"
        >
          Advisors
        </Link>
      </div>
    </div>
    </div>
    
  );
}




