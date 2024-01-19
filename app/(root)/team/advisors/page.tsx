import { TeamButton } from "@/(rover)/components/rover-navbar";
import { Footer } from "../../components/Footer";

export default function Page() {
  return (
    <>
      <div className="mt-28">
        <TeamButton />
      </div>
      <div
        className="bg-cover bg-center h-[1000px]"
        style={{ backgroundImage: "url('/WholeTeam2.jpg')" }}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-4xl">
            ADVISORS
          </h1>
        </div>
      </div>
      <div
        className="bg-transparent text-white py-8"
        style={{ backgroundImage: "url('/stars_e_flip.jpg')" }}
      >
        <h2 className="text-4xl text-center font-bold underline-offset-2 py-10">
          OUR EXTRAORDINARY ADVISORS
        </h2>
        {/* <div className="mt-6 justify-center align-middle w-200 h-1 bg-gradient-to-l from-black via-transparent to-transparent">
                    <p className="w-200 h-1 bg-gradient-to-r from-black via-transparent to-transparent"></p>
                </div> */}
        <div>
          <h2 className="text-4xl text-center font-bold py-10">
            DIRECTOR OF CIAR
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:w-1/2 md:mx-auto">
          <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 lg:ml-40">
            <img className="bg-gray" src="/si.png" alt="Salekul Islam" />
          </div>
          <div className="ml-10 mt-8 lg:mt-0">
            <p className="mb-2 text-3xl  font-bold">
              <a href="https://cse.uiu.ac.bd/profiles/salekul/">
                Prof. Dr. Salekul Islam
              </a>
            </p>
            <p className="mb-2 text-xl">
              Director of Institutional Quality Assurance Cell (IQAC)
            </p>
            <p className="mb-2 text-xl">
              Professor, BSCSE Department United International University
            </p>
            <p className="mb-1 text-xl">salekul@cse.uiu.ac.bd</p>
            <p className="text-xl mt-3">
              <b>Interests Include:</b> Future Internet architecture,
              Blockchain, Edge Cloud, Software-Defined Network (SDN), Multicast
              security, Security protocol validation
            </p>
          </div>
        </div>

        <div className="mt-32 mb-20">
          <h2 className="text-4xl text-center font-bold px-5">
            ASSOCIATE DIRECTOR OF CAIR
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:w-1/2 md:mx-auto">
          <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 lg:ml-40">
            <img className="bg-gray" src="/ss.png" alt="Swakkhor Shatabda" />
          </div>
          <div className="ml-10 mt-8 lg:mt-0">
            <p className="mb-2 text-3xl  font-bold">
              <a href="https://cse.uiu.ac.bd/profiles/swakkhar/">
                Prof. Dr. Swakkhor Shatabda
              </a>
            </p>
            <p className="mb-2 text-xl">
              Professor, Dept. Head of Data Science, United International
              University
            </p>
            <p className="mb-1 text-xl">swakkhar@cse.uiu.ac.bd</p>
            <p className="text-xl mt-3">
              <b>Interests Include:</b> Bioinformatics (http://brl.uiu.ac.bd/),
              Protein Structures, Genome Rearrangement, Phylogenetic Trees,
              Clustering, AI and Machine Learning, Optimization, Search and
              Satisfiability, Meta-heuristics, Itemset Mining, Constraint
              Programming, Algorithm and Complexity, Approximation Algorithms
              and Graph Theory
            </p>
          </div>
        </div>

        <div className="mt-32 mb-20">
          <h2 className="text-4xl text-center font-bold mt-10">
            TEAM DIRECTOR
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:w-1/2 md:mx-auto">
          <div className=" w-56 h-80ml-2 overflow-hidden flex-shrink-0 lg:ml-40">
            <img className="bg-gray" src="/abid-01.png" alt="Abid Hossain" />
          </div>
          <div className="ml-10 mt-8 lg:mt-0">
            <p className="mb-2 text-3xl  font-bold">
              <a href="https://cse.uiu.ac.bd/profiles/hossain-md-abid/">
                MD. Abid Hossain
              </a>
            </p>
            <p className="mb-2 text-xl">Lecturer</p>
            <p className="mb-2 text-xl">
              BSEEE Department, United International University
            </p>

            <p className="mb-1 text-xl">abid@cse.uiu.ac.bd</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
