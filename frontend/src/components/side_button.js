"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Rulebook } from "./Rulebook";

const Side_button = () => {
  const [rules2, setRules2] = useState(" hidden");
  const rulesRule = () => {
    if (rules2 === " hidden") {
      setRules2(" initial");
    } else if (rules2 === " initial") {
      setRules2(" hidden");
    }
  };
  return (
    <>
      <Rulebook rules2={rules2} rulesRule={rulesRule} />
      <div className="mt-[6vw] mx-4 mb-4 fixed bottom-0 right-0 cursor-pointer">
        <div className="flex flex-col items-end">
          <div className="py-1" onClick={rulesRule}>
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
                  alt="Leaderboard"
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
            <a href="https://matias.ma/nsfw/" target="blank">
              <div
                className=" flex items-center overflow-hidden bg-[#00C29A] p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 w-10 sm:w-16 md:w-16 lg:w-16 xl:w-16 h-10 sm:h-16 md:h-16 lg:h-16 xl:h-16
                hover:w-[9.75rem] sm:hover:w-[12.9rem] md:hover:w-[12.9rem] lg:hover:w-[12.9rem] xl:hover:w-[12.9rem]  hover:bg-[#000000] hover:border-2 hover:border-[#00C29A] transition-all duration-300 text-[#00C29A]"
              >
                <Image
                  src={"/images/monkey.png"}
                  width={100}
                  height={100}
                  alt="Monkeyyy"
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
    </>
  );
};

export default Side_button;
