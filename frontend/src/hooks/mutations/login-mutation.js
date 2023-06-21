import { logInUserAtom } from "@/atoms/user";
import { BACKEND_URL } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";

export const useLoginMutation = () => {
  const [, logInUser] = useAtom(logInUserAtom);

  return useMutation({
    mutationKey: ["login"],

    mutationFn: async (data) => {
      let response = await fetch(`${BACKEND_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      return responseData;
    },

    onSuccess: (data) => {
      logInUser(data.token);
    },
  });
};
