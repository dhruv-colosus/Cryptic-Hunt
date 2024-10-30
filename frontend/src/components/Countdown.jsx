"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { QuestionBlock } from "../app/(nav)/(auth)/play/question-block";

export default function Countdown() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(2025, 7, 26, 12, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      } else {
        setPartyTime(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {partyTime ? (
        <>
          {/* body */}

          {/* <div className="sticky  bg-[#OBOBOB] h-auto  sm:pt-8 md:pt-44 lg:pt-8 xl:pt-8 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="mb-10 flex flex-col">
                <h3 className="text-center text-[#00C29A] font-heading text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl transition-all duration-300">
                  KABOOM!!!jb
                </h3>
              </div>
            </div>
          </div> */}

          {/* body ends */}
        </>
      ) : (
        <>
          {/* body */}

          <div className="sticky top-2 bg-[#OBOBOB] h-auto py-[10vh] sm:pt-24 md:pt-24 lg:pt-24 xl:pt-24 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="mb-10 flex flex-col">
                <h3 className="text-center text-[#00C29A] font-heading text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl transition-all duration-300">
                  HOL UP!!!
                </h3>
                <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-sm sm:text-m md:text-m lg:text-m xl:text-m transition-all duration-300">
                  You look excited.
                </span>
                <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-sm sm:text-m md:text-m lg:text-m xl:text-m transition-all duration-300">
                  Wait till this bomb goes off.
                </span>
              </div>
              {/* Countdown */}
              <div>
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center mx-5">
                    <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                      {days >= 10 ? days.toString() : "0" + days}
                    </span>
                    <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-[0.4rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs transition-all duration-300">
                      DAYS
                    </span>
                  </div>
                  <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                    :
                  </span>
                  <div className="flex flex-col items-center justify-center mx-5">
                    <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                      {hours >= 10 ? hours.toString() : "0" + hours}
                    </span>
                    <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-[0.4rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs transition-all duration-300">
                      HOURS
                    </span>
                  </div>
                  <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                    :
                  </span>
                  <div className="flex flex-col items-center justify-center mx-5">
                    <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                      {minutes >= 10 ? minutes.toString() : "0" + minutes}
                    </span>
                    <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-[0.4rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs transition-all duration-300">
                      MINUTES
                    </span>
                  </div>
                  <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                    :
                  </span>
                  <div className="flex flex-col items-center justify-center mx-5">
                    <span className="text-[#00C29A] font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl transition-all duration-300">
                      {seconds >= 10 ? seconds.toString() : "0" + seconds}
                    </span>
                    <span className="text-center text-[#00C29A] font-sub tracking-[0.25rem] text-[0.4rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs transition-all duration-300">
                      SECONDS
                    </span>
                  </div>
                </div>
              </div>
              {/* Countdown ends */}
            </div>
          </div>
          {/* body ends */}
        </>
      )}
    </>
  );
}
