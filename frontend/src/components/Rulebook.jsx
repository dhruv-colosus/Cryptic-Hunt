"use client";


export const Rulebook = (props) => {
    return (
        <div
            className={
                "py-24 bottom-[-100vh] flex transition-all duration-1000 z-20 sticky w-full h-max bg-black bg-opacity-25 backdrop-blur-md justify-center items-center" +
                props.rules2
            }
        >
            <div className="relative w-11/12 pb-20 bg-[#0b0b0b00] flex flex-col justify-center items-center border-3 border-[#00C29A]">
                <h1 className="flex justify-center items-center text-[#00C29A] text-center font-Autom text-5xl md:text-6xl m-20 mb-10">
                    Rulebook
                </h1>
                <button
                    onClick={props.rulesRule}
                    className="absolute top-0 right-0 w-20 h-20 text-[#00C29A] text-5xl text-center font-Autom transition-all duration-300 hover:bg-main hover:text-black"
                >
                    X
                </button>
                <div className="mb-5 w-11/12 py-5 flex flex-col justify-center items-center bg-[#16161600]">
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            1.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            What does the fox say? Does the fox say? The fox
                            say? Fox say? Say? ? What does the fox say? Does the
                            fox say? The fox say? Fox say? Say? ?
                        </div>
                    </div>
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            2.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            Click Monkey in the Menu
                        </div>
                    </div>
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            3.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            I'm sexy and I know it.
                        </div>
                    </div>
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            4.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            Dance while reading rule no. 3
                        </div>
                    </div>
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            5.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            Lmfao
                        </div>
                    </div>
                    <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
                        <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
                            6.
                        </div>
                        <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
                            Good Job
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
