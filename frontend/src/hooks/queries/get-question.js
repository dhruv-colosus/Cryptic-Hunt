import { userTokenAtom } from "@/atoms/user";
import { BACKEND_URL } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useUserQuery } from "@/hooks/queries/user-query";

export const useQuestionQuery = () => {
  const [token] = useAtom(userTokenAtom);
  const userQuery = useUserQuery();

  return useQuery({
    queryKey: ["question", userQuery.data?.level, token],
    queryFn: async (params) => {
      let [key, _level, token] = params.queryKey;
      if (!token) throw new Error("No Token provided");

      const res = await fetch(`${BACKEND_URL}/api/questions`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.json();
    },
  });
};
