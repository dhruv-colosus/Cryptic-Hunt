"use client";

import Message_box from "@/components/message_box";
import { PlayButton } from "@/components/play-btn";
import Side_button from "@/components/side_button";
import { useRef, useEffect, useState } from "react";

export default function Home() {
    const [show, setShow] = useState(" invisible right-[-100%]");
    // const showRef = useRef(" invisible right-[-100%]");
    // showRef.current = " invisible right-[-100%]";
    // const showMessage=()=>{show === " visible right-0" ? setShow(" invisible right-[-100%]") : setShow(" visible right-0")}
    // const showMessage=()=>{show === " visible right-0" ? setShow(" invisible right-[-100%]") : ()=>{setShow(" visible right-0"), setTimeout(hideMessage, 3000)}}
    const showMessage=()=>{setShow(" visible right-0");  setTimeout(hideMessage, 5000)}
    const hideMessage=()=>{setShow(" invisible right-[-100%]")}
    return (
        <>
            <Message_box show={show} />

            {/* body */}
            <div className="fixed w-full top-0 bg-[#OBOBOB] h-fit py-[30vh] sm:pt-44 md:pt-44 lg:pt-44 xl:pt-44 transition-all duration-300">
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
                    <div className="">
                        <PlayButton />
                    </div>
                    {/* play button ends */}
                </div>
                <button className="border border-white" onClick={showMessage}>
                    Top Right Corner Message Button
                </button>
            </div>
            {/* body ends */}

            {/* side buttons */}

            <Side_button />

            {/* side buttons end */}
        </>
    );
}
