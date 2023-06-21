import { useUserQuery } from "@/hooks/queries/user-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const NotLoggedIn = (props) => {
  const userQuery = useUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (userQuery.data) {
      router.replace("/");
    }
  }, [userQuery.data]);

  return props.children;
};
