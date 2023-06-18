import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* body */}

      <div className="bg-[#OBOBOB] h-full my-[30vh] sm:mt-44 md:mt-44 lg:mt-44 xl:mt-44 transition-all duration-300">
        <div className="flex flex-col items-center">
          {/* main heading */}
          <div>
            <div>
              <h1 className="text-[#00C29A] font-heading text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl transition-all duration-300">
                CRYPTIC HUNT
              </h1>
            </div>
          </div>
          {/* main heading ends */}

          {/* under heading */}
          <div className="pb-4">
            <div>
              <h3
                className="text-[#00C29A] font-montserrat tracking-[0.75rem] sm:tracking-[1.75rem] md:tracking-[1.75rem] lg:tracking-[1.75rem] xl:tracking-[1.75rem]
               text-[0.4rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs transition-all duration-300"
              >
                LET THE HUNT BEGIN!
              </h3>
            </div>
          </div>
          {/* under heading ends */}

          {/* play button */}
          <div className="bg-[#00C29A]">
            {/* <a
              href="#"
              className=" hover:bg-background hover:text-main hover:border-main"
            >
              <div className="py-2 px-12 ">
                <h2 className="text-[#OBOBOB] font-bold font-heading text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl transition-all duration-300 ">
                  PLAY
                </h2>
              </div>
            </a> */}
            <button
              type="submit"
              className="font-bold font-heading text-xl block text-center outline-none bg-main text-white cursor-pointer transition  duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main hover:bg-background hover:text-main
                 onClick={login}"
            >
              Play
            </button>
          </div>
          {/* play button ends */}
        </div>
      </div>
      {/* body ends */}

      {/* side buttons */}
      <div className="mt-[6vw] mx-4 mb-4 absolute bottom-0 right-0">
        <div className="flex flex-col items-end">
          <div className="py-1">
            <a href="#">
              <div
                className=" flex items-center overflow-hidden bg-[#00C29A] p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 w-10 sm:w-16 md:w-16 lg:w-16 xl:w-16 h-10 sm:h-16 md:h-16 lg:h-16 xl:h-16
               hover:w-[10.75rem] sm:hover:w-[14.25rem] md:hover:w-[14.25rem] lg:hover:w-[14.25rem] xl:hover:w-[14.25rem] hover:bg-[#000000] hover:border-2 hover:border-[#00C29A] transition-all duration-300 text-[#00C29A]"
              >
                <Image
                  src={"/images/rulebook.png"}
                  width={100}
                  height={100}
                  alt="Rulebook"
                  loading="eager"
                  className="w-6 sm:w-10 md:w-10 lg:w-10 xl:w-10 "
                ></Image>
                <span className="pl-4 font-heading text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                  RULEBOOK
                </span>
              </div>
            </a>
          </div>

          <div className="py-1">
            <Link href="/leaderboard">
              <div
                className=" flex items-center overflow-hidden bg-[#00C29A] p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 w-10 sm:w-16 md:w-16 lg:w-16 xl:w-16 h-10 sm:h-16 md:h-16 lg:h-16 xl:h-16
              hover:w-[12.5rem] sm:hover:w-[16.75rem] md:hover:w-[16.75rem] lg:hover:w-[16.75rem] xl:hover:w-[16.75rem]  hover:bg-[#000000] hover:border-2 hover:border-[#00C29A] transition-all duration-300 text-[#00C29A]"
              >
                <Image
                  src={"/images/trophy.png"}
                  width={100}
                  height={100}
                  alt="Rulebook"
                  loading="eager"
                  className="w-6 sm:w-10 md:w-10 lg:w-10 xl:w-10"
                ></Image>
                <span className="pl-4 font-heading text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                  LEADERBOARD
                </span>
              </div>
            </Link>
          </div>

          <div className="py-1">
            <a href="#">
              <div
                className=" flex items-center overflow-hidden bg-[#00C29A] p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 w-10 sm:w-16 md:w-16 lg:w-16 xl:w-16 h-10 sm:h-16 md:h-16 lg:h-16 xl:h-16
              hover:w-[9.75rem] sm:hover:w-[12.9rem] md:hover:w-[12.9rem] lg:hover:w-[12.9rem] xl:hover:w-[12.9rem]  hover:bg-[#000000] hover:border-2 hover:border-[#00C29A] transition-all duration-300 text-[#00C29A]"
              >
                <Image
                  src={"/images/monkey.png"}
                  width={100}
                  height={100}
                  alt="Rulebook"
                  loading="eager"
                  className="w-6 sm:w-10 md:w-10 lg:w-10 xl:w-10"
                ></Image>

                <span className="pl-4 font-heading text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                  MONKEY
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* side buttons end */}
    </div>
  );
}
