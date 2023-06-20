import { useMutation } from "@tanstack/react-query";
import { createUserSchema, registerPostObjSchema } from "@/app/types";
import { BACKEND_URL } from "@/config";
import { useAtom } from "jotai";
import { logInUserAtom } from "@/atoms/user";

export const useRegisterMutation = () => {
  const [, logInUser] = useAtom(logInUserAtom);

  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data) => {
      let parsedData = registerPostObjSchema.parse(data);

      const response = await fetch(`${BACKEND_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedData),
      });

      let responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      const user = createUserSchema.parse(responseData);
      return user;
    },
    onSuccess: (data) => {
      logInUser(data.token);
    },
  });
};
