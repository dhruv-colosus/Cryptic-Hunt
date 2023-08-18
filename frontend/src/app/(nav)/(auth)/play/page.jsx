import Countdown from "@/components/Countdown";
import { QuestionBlock } from "./question-block";

export default function Questions() {
  return (
    <>
      <div className="bg-[#0b0b0b] my-32 w-full flex flex-col justify-center items-center ">
        {/* <h1 className="flex justify-center items-center text-center text-[#00C29A] font-Autom text-6xl md:text-7xl mb-8 sm:items-center">
          RIDDLE ME THIS
        </h1> */}
        {/* <QuestionBlock /> */}
        <Countdown />
      </div>
    </>
  );
}
