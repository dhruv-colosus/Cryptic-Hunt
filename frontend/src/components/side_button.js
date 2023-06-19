"use client"
import Image from "next/image"
import Link from "next/link"
import Modal from "./Modal"
import { useState } from "react"
import { Scrollbar } from "react-scrollbars-custom";


const Side_button = () => {
    const [ShowModal,setShowModal]=useState(false);
    return(
        <div className="mt-[6vw] mx-4 mb-4 absolute bottom-0 right-0">
            <div className="flex flex-col items-end">
            <div className="py-1">
                <button onClick={()=>setShowModal(true)}>
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
                </button>
                
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
            <Modal isvisible={ShowModal} onClose={() => setShowModal(false)}>
      

      <h1 className="text-center text-5xl py-5 text-[#00C29A] font-heading">RULEBOOK</h1>
      
      <Scrollbar style={{ width: 700, height: 400 }} >
      <div className="max-w-[800px] flex bg-[#161616]  mx-auto  text-center font-[autom] mb-10 mx-5  ">
        <div className="px-5 py-5 mx-10 text-2xl  text-white font-heading">1.</div>
        <div className="pr-5 py-5   text-[#00C29A] text-xl  font-heading">ujfgeiownnnuuerbgfniwurnhgierwubg
        wnnnuuerbgfniwurnhgierwubgieruwvn</div>

      </div>
      <div className="max-w-[800px] flex bg-[#161616]  mx-auto  text-center font-[autom] mb-10 mx-5  ">
        <div className="px-5 py-5 mx-10 text-2xl  text-white font-heading">2.</div>
        <div className="pr-5 py-5   text-[#00C29A] text-xl font-heading  ">ujfgeiownnnuuerbgfniwurnhgierwubg
        wnnnuuerbgfniwurnhgierwubgieruwvn</div>

      </div>
      <div className="max-w-[800px] flex bg-[#161616]  mx-auto  text-center font-[autom] mb-10 mx-5  ">
        <div className="px-5 py-5 mx-10 text-2xl  text-white font-heading">3.</div>
        <div className="pr-5 py-5   text-[#00C29A] text-xl font-heading ">ujfgeiownnnuuerbgfniwurnhgierwubg
        wnnnuuerbgfniwurnhgierwubgieruwvn</div>

      </div>
      <div className="max-w-[800px] flex bg-[#161616]  mx-auto  text-center font-[autom] mb-10 mx-5  ">
        <div className="px-5 py-5 mx-10 text-2xl  text-white font-heading">3.</div>
        <div className="pr-5 py-5   text-[#00C29A] text-xl font-heading ">ujfgeiownnnuuerbgfniwurnhgierwubg
        wnnnuuerbgfniwurnhgierwubgieruwvn</div>

      </div>
      <div className="max-w-[800px] flex bg-[#161616]  mx-auto  text-center font-[autom] mb-10 mx-5  ">
        <div className="px-5 py-5 mx-10 text-2xl  text-white font-heading">3.</div>
        <div className="pr-5 py-5   text-[#00C29A] text-xl font-heading ">ujfgeiownnnuuerbgfniwurnhgierwubg
        wnnnuuerbgfniwurnhgierwubgieruwvn</div>

      </div>
      
    </Scrollbar>
    </Modal>  
        </div>
    )
}


export default Side_button