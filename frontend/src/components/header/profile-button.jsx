"use client";

import { userAtom } from "@/atoms/user";
import { useAtom } from "jotai";
import Image from "next/image";

export const ProfileButton = () => {
  const [user] = useAtom(userAtom);

  return (
    <div className="h-full bg-main px-6 py-2 grid place-content-center  text-black  font-heading text-sm md:text-base">
      <div className="flex items-base gap-2">
        {user !== null ? (
          <>
            <Image
              src="/images/default-user-profile.png"
              width={30}
              height={30}
              className="h-4 md:h-5 w-auto"
              alt="profile"
            />
            <span>{firstWord(user?.name)}</span>{" "}
          </>
        ) : (
          <span>Log In</span>
        )}
      </div>
    </div>
  );
};

const firstWord = (str) => {
  if (!str) return "";
  return str.split(" ")[0];
};
