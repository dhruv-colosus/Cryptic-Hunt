"use client";

import { useAtom } from "jotai";
import { useQuestionQuery } from "@/hooks/queries/get-question";
import { useUserQuery } from "@/hooks/queries/user-query";
import { useCheckQuestionMutation } from "@/hooks/mutations/check-mutation";

export const QuestionBlock = () => {
  const questionQuery = useQuestionQuery();
  const userQuery = useUserQuery();
  const checkQuestionMutation = useCheckQuestionMutation();

  if (!userQuery.data) {
    return null;
  }

  const user = userQuery.data;

  return (
    <div className="bg-[#181717] w-3/4 flex flex-col sm:flex-row justify-center items-start py-10 md:py-20 md:pr-16 md:pl-6 ">
      {questionQuery.isLoading ? (
        <div className="h-40 animate-pulse"></div>
      ) : (
        <>
          <div className="w-1/12 m-10 text-center flex justify-center items-center font-Minecraftia text-4xl md:text-6xl">
            {user.level}.
          </div>
          <div className="w-10/12 flex flex-col justify-start items-center ">
            <div className=" pl-8 sm:pr-6 text-[#00C29A] font-fira-code-2 text-base md:text-base">
              {questionQuery.data?.name}
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-center items-center md:flex-row md:justify-start sm:pr-6 pl-8"
            >
              <input
                className="w-full mt-5 p-2 flex text-center font-Autom bg-[#0b0b0b00] border-4 focus:border-[#21a087] border-[#00C29A] focus-visible:outline-none focus-visible:border-5 md:w-8/12 md:mr-3 lg:w-9/12"
                type="text"
                placeholder="Answer"
                name="answer"
              />
              <input
                className="w-1/2 mt-5 p-2 font-Autom font-bold block text-center outline-none bg-main text-white cursor-pointer transition  duration-300 border-4 border-main hover:bg-background hover:text-main md:w-3/12 md:ml-3 lg:w-2/12"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    let answer = e.target.answer.value;

    checkQuestionMutation.mutate(
      { answer },
      {
        onError: (error) => {
          alert(error.message);
        },
      }
    );
  }
};
