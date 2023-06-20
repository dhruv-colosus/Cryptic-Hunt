import Image from "next/image";
import Link from "next/link";
import Side_button from "@/components/side_button";

export default function Home() {
    return (
        <>
            {/* body */}

            <div className="sticky top-0 bg-[#OBOBOB] h-fit py-[30vh] sm:pt-44 md:pt-44 lg:pt-44 xl:pt-44 transition-all duration-300">
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

            <Side_button />

            {/* side buttons end */}
        </>
    );
}
