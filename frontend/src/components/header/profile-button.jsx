"use client";

import { useUserQuery } from "@/hooks/queries/user-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ProfileButton = () => {
  const userQuery = useUserQuery();
  const router = useRouter();

  if (userQuery.isLoading) {
    return null;
  }

  const user = userQuery.data;

  return (
    <button
      onClick={() => {
        if (user == null) {
          router.push("/login");
        } else {
          router.push("/profile");
        }
      }}
      className="h-full bg-main px-6 py-2 grid place-content-center  text-black  font-heading text-sm md:text-base"
    >
      <div className="flex items-base gap-2">
        {user != null ? (
          <>
            <Image
              src="/images/default-user-profile.png"
              width={30}
              height={30}
              className="h-4 md:h-5 w-auto"
              alt="profile"
            />
            <span>{firstWord(user?.name)}</span>
          </>
        ) : (
          <span href={"/login"}>Log In</span>
        )}
      </div>
    </button>
  );
};

const firstWord = (str) => {
  if (!str) return "";
  return str.split(" ")[0];
};
