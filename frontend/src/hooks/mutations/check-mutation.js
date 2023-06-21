import { BACKEND_URL } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { userTokenAtom } from "@/atoms/user";
import { useUserQuery } from "../queries/user-query";

export const useCheckQuestionMutation = () => {
  const [token] = useAtom(userTokenAtom);
  const userQuery = useUserQuery();

  return useMutation({
    mutationKey: ["checkQuestion"],
    mutationFn: async ({ answer }) => {
      if (!token) {
        throw new Error("You must be logged in to check the answer.");
      }

      let response = await fetch(`${BACKEND_URL}/api/questions/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ answer }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      let parsedData = await response.json();

      if (parsedData.isAnswerCorrect === false) {
        throw new Error("Incorrect answer.");
      }
      return parsedData;
    },
    onSuccess: (data) => {
      userQuery.refetch();
    },
  });
};
