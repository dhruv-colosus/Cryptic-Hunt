"use client";

import { userAtom } from "@/atoms/user";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export const Protected = (props) => {
  const [user] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    const wait = setTimeout(() => {
      if (!user) {
        router.push("/login");
      }
    }, 1000);

    return () => clearTimeout(wait);
  }, [user]);

  return <>{props.children}</>;
};
