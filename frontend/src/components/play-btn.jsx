"use client";

import { useUserQuery } from "@/hooks/queries/user-query";
import Link from "next/link";

export const PlayButton = () => {
  const userQuery = useUserQuery();

  return (
    <Link
      href={"/play"}
      className={`font-bold font-heading text-xl block text-center outline-none bg-main text-white cursor-pointer transition  duration-300
          sm:py-2 py-1 sm:px-12 px-10 border-2 border-main hover:bg-background hover:text-main ${
            userQuery.isLoading ? "pointer-events-none animate-pulse" : ""
          }`}
    >
      Play
    </Link>
  );
};
