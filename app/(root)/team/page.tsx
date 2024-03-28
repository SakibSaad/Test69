import { TeamButton } from "@/(rover)/components/rover-navbar";
import { GlobalNavbar } from "@/components/Navbar";
import { Footer } from "../components/Footer";

export default function Page() {
  return (
    <>
      <div className="mt-28">
        <TeamButton />
      </div>
      <div
        className="bg-cover bg-center h-[1000px]"
        style={{ backgroundImage: "url('/team2023/WholeTeam2.jpg')" }}
      >
        <div className="mt-5 flex flex-col items-center justify-center ml-2">
          <h1 className="text-8xl font-bold text-white drop-shadow-4xl mt-9" >
            TELOS
          </h1>
          <p className="text-3xl drop-shadow-lg text-white">UIU MARS ROVER</p>
        </div>
      </div>
      <div
        className="bg-transparent text-white py-8"
        style={{ backgroundImage: "url('/stars_e_flip.jpg')" }}
      >
        <h2 className="text-4xl text-center font-bold underline-offset-2 ">
          MEET THE TEAM
        </h2>
        {/* <div className="mt-6 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
                    <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
                </div> */}
        <div>
          <h2 className="text-4xl text-center font-bold mt-10">
            TEAM DIRECTOR
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:w-1/2 md:mx-auto">
          <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 lg:ml-40">
            <img
              className="bg-gray"
              src="/team2023/Akib-01.png"
              alt="Akib Zaman"
            />
          </div>
          <div className="ml-10 mt-8 lg:mt-0">
            <p className="mb-2 text-3xl  font-bold">Akib Zaman</p>
            <p className="mb-2 text-xl">
              Lecturer, United International University
            </p>
            <p className="mb-1 text-xl">
              <a href="mailto:akib@cse.uiu.ac.bd">akib@cse.uiu.ac.bd</a>
            </p>
            <p className="text-xl">
              <b>Interests Include:</b> Robotics & Autonomous Systems,<br></br>{" "}
              Machine learning & Data mining, Brain-Computer Interfacing,
              <br></br> Software engineering, Embedded & Real-time systems
            </p>
          </div>
        </div>
        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>
        <h2 className="text-4xl text-center  font-bold mt-10">
          TEAM LEAD & CO-TEAM LEAD
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/abid-01.png"
                  alt="Abid"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abid Hossain
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1 py-3">
                  Team Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mukit-01.png"
                  alt="Mukit"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">T M Al Anam</p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1 py-3">
                  Vice-Team Lead
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center  font-bold mt-10">
          SUB-TEAM LEADS
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/masud-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abdullah Al Masud
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Software &
                  <br />
                  Autonomous Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mukit-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">T M Al Anam</p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Communication
                  <br /> Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/tanim-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Ahmed Junaed
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/yasin-01.png"
                  alt="Yasin"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
               MD. Yasin
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br />
                  Lead
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/bodiuzzaman-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Bodiuzzaman
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  3D Design Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/akash-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Megboron Paul
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Science
                  <br />
                  Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/fahim-01.png"
                  alt="Fahim"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Shah Mehrab Hossain
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Electrical
                  <br /> Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/saad-01.png"
                  alt="Saad"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sakib Mahmood Saad
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Media &
                  <br />
                  Branding Lead
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>
        <h2 className="text-4xl text-center  font-bold mt-10">
          Mechanical Team
        </h2>
        <div className="flex flex-col mt-10 lg:mt-5">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/tanim-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Ahmed Junaed
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mehrab-01.png"
                  alt="Mehrab"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mehrab Khan
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/maahi-01.png"
                  alt="Maahi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sk Saif Abdullah
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/shorowar-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Shorowar Hossain
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/bodiuzzaman-01.png"
                  alt="Bodi"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Bodiuzzaman
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  3D Design Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/bayezid-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">Bayzid</p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  3D Design Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/jaed-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Jaed Al Jaber
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  3D Design Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/meehal-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mohammad Rashique
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Mechanical &
                  <br />
                  Fabrication Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center  font-bold mt-10">SCIENCE TEAM</h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/akash-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Megboron Paul
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Science
                  <br />
                  Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/maria-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Suraia Afroz Maria
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Science
                  <br />
                  Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mubin-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mehefujur Mubin
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Science
                  <br />
                  Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/nafisa-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Nafisa Tabassum
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Science
                  <br />
                  Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center  font-bold mt-10">
          SOFTWARE & AUTONOMOUS TEAM
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/masud-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Abdullah Al Masud
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Software &
                  <br />
                  Autonomous Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/fahad-01.png"
                  alt="Fahad"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Fahad Rahman
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Software &
                  <br />
                  Autonomous Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/sakib-01.png"
                  alt="Sakib"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sheikh Sakib
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Software &
                  <br />
                  Autonomous Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/saad-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sakib Mahmood Saad
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Software &
                  <br />
                  Autonomous Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          ELECTRICAL TEAM
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/fahim-01.png"
                  alt="Mehrab"
                />
              </div>
              <p className="text-3xl  text-center font-bold mt-2 ">
                Shah Mehrab Hossain
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Electrical
                  <br /> Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/yasin-01.png"
                  alt="Yasin"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
               MD. Yasin
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Electrical
                  <br /> Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/shorowar-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Shorowar Hossain
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Electrical
                  <br /> Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center  font-bold mt-10">
          COMMUNICATION TEAM
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mukit-01.png"
                  alt="Mukit"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">T M Al Anam</p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Communication
                  <br /> Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/fahad-01.png"
                  alt="Fahad"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Fahad Rahman
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Communication
                  <br /> Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/shorowar-01.png"
                  alt="Shorowar"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Shorowar Hossain
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Communication
                  <br /> Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          LOGISTICS & OPERATION TEAM
        </h2>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center lg:mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/Yasin-01.png"
                  alt="Yasin"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                MD. Yasin
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br /> Lead
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/rajeet-01.png"
                  alt="Mehrab Khan"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                MD. Hojaifa Daiyan
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br /> Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/troypee-01.png"
                  alt="Troypee"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mehraj Jebin Troypee
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br /> Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center lg:mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/mehrab-01.png"
                  alt="Mehrab Khan"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mehrab Khan
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br /> Member
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/maahi-01.png"
                  alt="Mehrab Khan"
                />
              </div>
              <p className="text-3xl  text-center font-bold mt-2 ">
                Sk. Abdullah Mahi
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Logistics
                  <br /> Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex justify-center mt-6 space-x-12"></div>
        </div>

        <div className="mt-12 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
          <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">
          MEDIA & BRANDING TEAM
        </h2>
        <div className="flex flex-col mt-4 ">
          <div className="flex flex-col mt-4 lg:flex-row lg:justify-center lg:items-stretch lg:space-x-10 mx-auto">
            <div className="text-center">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/saad-01.png"
                  alt="Sakib Mahmood Saad"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Sakib Mahmood Saad
              </p>
              <div className="bg-[#FF00C4] ml-5 w-64 rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Media &<br />
                  Branding Lead
                </p>
              </div>
            </div>

            {/* <div className="ml-2 text-center mt-10 lg:mt-0">
              <div className=" w-60 h-80ml-2 overflow-hidden flex-shrink-0">
                <img
                  className="bg-gray"
                  src="/team2023/saad-01.png"
                  alt="Akib Zaman"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Mysun Mashira
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-2xl text-white text-center font-bold mt-1">
                  Media &<br />
                  Branding Member
                </p>
              </div>
            </div> */}

            <div className="text-center mt-10 lg:mt-0">
              <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 mx-auto">
                <img
                  className="bg-gray"
                  src="/team2023/shahariar-01.png"
                  alt="Shahariar Hossain"
                />
              </div>
              <p className="text-3xl text-center font-bold mt-2 ">
                Shahariar Rahman
              </p>
              <div className="bg-[#FF00C4] rounded-lg h-18">
                <p className="text-xl text-white text-center font-bold mt-1">
                  Media &<br />
                  Branding Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

