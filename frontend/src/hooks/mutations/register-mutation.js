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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const user = createUserSchema.parse(await response.json());
      return user;
    },
    onSuccess: (data) => {
      logInUser(data.token);
    },
  });
};
