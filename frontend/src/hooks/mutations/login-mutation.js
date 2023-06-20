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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    },

    onSuccess: (data) => {
      logInUser(data.token);
    },
  });
};
