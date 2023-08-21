"use client";

export const Rulebook = (props) => {
  return (
    <div
      className={
        "py-32 bottom-[-90vh] flex transition-all duration-1000 z-32 sticky w-full h-full bg-black bg-opacity-25 backdrop-blur-md justify-center items-center  " +
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
              The hunt will last for 24 hours , 26 Aug 12 PM - 27 Aug 12PM .
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              2.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              The answers are case sensitive and can contain special letters but
              are one word only. Eg : if the answer is "ye is the goat" then the
              correct submission would be "yeisthegoat"
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              3.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              A minor typo will result in an incorrect answer, so be doubly sure
              of what you enter. For example, if the answer is "nsut" and you
              enter "nsit", it will be considered INCORRECT
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              4.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              Hints will be posted on the
              <a
                className="underline"
                href="https://discord.gg/SbVgXvdTuu"
                target="_blank"
              >
                Discord server
              </a>
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              5.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              Laptop may be necessary to solve some of the questions, so be
              prepared.
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              6.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              Spamming the admins for hints is frowned upon.
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              7.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              The use of any unfair means will be dealt strictly and your team
              shall be permanently disqualified form participating
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              8.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              There is no restriction on the number of times you can enter an
              answer, so feel free to guess, although random answers are highly
              unlikely to Work.
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              9.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              If you feel you're stuck at any point it's best to clear your head
              and start thinking from scratch.
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              10.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              Leads will be open from time to time for 20 mins and admins for
              that window will be assigned each time, you can ask them if you
              are going in the correct direction or not and they shall reply you
              with a yes or no
            </div>
          </div>
          <div className="mb-5 bg-[#181717] w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/12 pt-3 pl-3 m-5 mt-14 mr-3 flex justify-center items-center font-Minecraftia text-start text-4xl md:m-10 md:text-5xl">
              11.
            </div>
            <div className="mx-5 py-10 w-10/12 flex flex-col justify-center items-start text-center text-[#00C29A] font-fira-code-2 text-md md:text-left md:text-lg">
              GAME ON !!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
