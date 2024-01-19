import { Footer } from "@/(root)/components/Footer";
import { TeamButton } from "@/(rover)/components/rover-navbar";
import { GlobalNavbar } from "@/components/Navbar";

export default function Page() {
  return (
    <>
    
    <div className="mt-28"><TeamButton/></div>
      <div
        className="mt-5 bg-cover bg-center h-[820px]"
        style={{ backgroundImage: "url('/urc2022.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl sm:text-8xl font-bold text-[#F97316] drop-shadow-2xl">
            MAVEN
          </h1>
          <p className="text-2xl sm:text-3xl drop-shadow-2xl text-yellow-400">
            OUR AMAZING TEAM
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 text-black py-8">
        <h2 className="text-4xl text-center font-bold underline-offset-2 ">
          OUR AMAZING TEAM
        </h2>
        <div className="mt-6 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold">TEAM DIRECTOR</h2>
        </div>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:w-1/2 md:mx-auto">
          <div className="mb-4 md:mb-0 md:mr-8 border-8 border-[#adaeaf] rounded-full w-80 h-80 overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/akib.jpg"
              alt="Akib Zaman"
            />
          </div>

          <div className="lg:w-1/2 mt-5 ml-4">
            <p className="mb-2 text-2xl font-bold">Akib Zaman</p>
            <p className="mb-2 text-xl">
              Lecturer, United International University
            </p>
            <p className="mb-1 text-xl">
              <a href="mailto:akib@cse.uiu.ac.bd">akib@cse.uiu.ac.bd</a>
            </p>
            <p className="text-xl">
              <b>Interests Include:</b> Robotics & Autonomous Systems,
              <br />
              Machine learning & Data mining, Brain-Computer Interfacing,
              <br />
              Software engineering, Embedded & Real-time systems
            </p>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>
        <h2 className="text-4xl text-center font-bold mt-6">TEAM LEAD</h2>
        <div className="flex items-center justify-center mt-4 ">
          <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden  flex-shrink-0">
            <img
              className="bg-gray rounded-full"
              src="/rokib.jpg"
              alt="Akib Zaman"
            />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold mt-2">Rokib Hasan </h2>
        <h3 className="text-2xl text-gray-600 text-center font-bold mt-1">
          Team-Lead
        </h3>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center  font-bold mt-10">
          SUB-TEAM LEADS
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mb-4 lg:mb-0 mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/abid.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abid Hossain
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Mechanical Lead
              </p>
            </div>

            <div className="ml-2 text-center lg:mb-0 mt-5">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/mukit.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">TM AL Anam</p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Communication Lead
              </p>
            </div>

            <div className="ml-2 text-center lg:mb-0 mt-5">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/masud.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abdullah Al Masud
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Software & Autonomous Lead
              </p>
            </div>

            <div className="ml-2 text-center lg:mb-0 mt-5">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/zidan.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Zidan Talukdar
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Science Lead
              </p>
            </div>
            <div className="ml-2 text-center md:mb-0 mt-5">
              <div className="border-8 border-[#adaeaf] w-80 h-80  bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/tanim.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Ahmed Junaed
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Electrical Lead
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          MECHANICAL TEAM
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mb-4 lg:mb-0 mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/abid.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abid Hossain
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Mechanical Lead
              </p>
            </div>

            <div className="text-center mb-4 lg:mb-0 mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/bodiuzzaman.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Bodiuzzaman
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Mechanical Team Member
              </p>
            </div>

            <div className="text-center mb-4 lg:mb-0 mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray rounded-full"
                  src="/saad.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abdullah Al Saad
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Mechanical Team Member
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">SCIENCE TEAM</h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/zidan.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Zidan Talukdar
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Science Lead
              </p>
            </div>

            <div className="ml-2 text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/airin.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Afsana Airin
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Science Team Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/progga.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Proma Hossain Progga
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Science Team Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/sharita.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sharita Rahman
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Science Team Member
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          SOFTWARE & AUTONUMOUS TEAM
        </h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/masud.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2">
                Abdullah Al Masud
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Software & Autonomous <br />
                Lead
              </p>
            </div>

            <div className="ml-2 text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/arnisha.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Arnisha Akther
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Software & Autonomous <br />
                Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/sabbir.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sabbir Hossain
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Software & Autonomous <br />
                Member
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          ELECTRICAL TEAM
        </h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/tanim.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Junaed Ahmed
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Electrical Lead
              </p>
            </div>

            <div className="ml-2 text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray  rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/yasin.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">Md Yasin</p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Electrical Team Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/meehal.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Muhammad Rashique <br /> Hamjah Chowdhury
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Electrical Team Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/rajeet.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Rajeet Chowdhury
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Electrical Team Member
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          COMMUNICATION TEAM
        </h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-4">
            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/mukit.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">T M Al Anam</p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Communication <br />
                Lead
              </p>
            </div>

            <div className="ml-2 text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/shobuj.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Md. Sabuj Hossain
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Communication Team <br />
                Member
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="border-8 border-[#adaeaf] w-80 h-80ml-2 bg-gray rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray rounded-full"
                  src="/showrup.jpg"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Showrup Paul
              </p>
              <p className="text-2xl text-gray-600 text-center font-bold mt-1">
                Communication Team <br />
                Member
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
