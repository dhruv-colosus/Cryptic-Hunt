"use client";

import { useRouter } from "next/navigation";
import { useUserQuery } from "@/hooks/queries/user-query";
import { useEffect } from "react";

export const Protected = (props) => {
  const userQuery = useUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (userQuery.data) {
      return;
    }

    if (userQuery.isLoading) {
      return;
    }

    if (userQuery.isError) {
      router.push("/login");
      return;
    }

    router.push("/login");
  }, [userQuery.data, userQuery.isLoading, userQuery.isError]);

  return <>{props.children}</>;
};
