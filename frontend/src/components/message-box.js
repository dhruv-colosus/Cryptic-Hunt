"use client";

// import { useAtom } from "jotai";
// import { errorAtom } from "@/atoms/error";

const MessageBox = (props) => {

  return (
    <div
      className={` absolute z-[1000] top-0 m-4 bg-background border-3 border-main min-w-[18rem] text-center  max-w-max w-[50%] p-3 flex flex-col transition-all duration-500
     ${
       props.error
         ? "right-0"
         : "right-[-50%]"
     }
    `}
    >
      <button
        onClick={props.hideMessage}
        className="absolute top-0 right-0 w-8 h-8 text-[#00C29A] text-3xl text-center font-Autom transition-all duration-300 hover:bg-main hover:text-black"
      >
        X
      </button>
      <div className=" font-heading w-full text-main text-center pb-4">
        {props.error?.title}
      </div>

      <div className=" font-heading w-full justify-start text-main break-words">
        {props.error?.message}
      </div>
    </div>
  );
};

export default MessageBox;
