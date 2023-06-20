"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/atoms/user";
import Link from "next/link";

export const PlayButton = () => {
  const [user] = useAtom(userAtom);
  return (
    <Link
      href={"/play"}
      className="font-bold font-heading text-xl block text-center outline-none bg-main text-white cursor-pointer transition  duration-300
          sm:py-2 py-1 sm:px-12 px-10 border-2 border-main hover:bg-background hover:text-main
           onClick={login}"
    >
      Play
    </Link>
  );

  function handlePlay() {
    if (!user) {
    }
  }
};
