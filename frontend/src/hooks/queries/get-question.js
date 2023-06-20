import { userAtom } from "@/atoms/user";
import { BACKEND_URL } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

export const useQuestionQuery = () => {
  const [user] = useAtom(userAtom);

  return useQuery({
    queryKey: ["question", user],
    queryFn: async (params) => {
      let [key, user] = params.queryKey;
      if (!user) throw new Error("No level provided");

      const res = await fetch(`${BACKEND_URL}/api/questions`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      return res.json();
    },
  });
};
