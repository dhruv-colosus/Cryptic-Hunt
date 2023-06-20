import { BACKEND_URL } from "@/config";
import { useMutation } from "@tanstack/react-query";

export const useCheckQuestionMutation = () => {
  const [user] = useUser();

  return useMutation({
    mutationKey: ["checkQuestion"],
    mutationFn: async (answer) => {
      if (!user) {
        throw new Error("You must be logged in to check the answer.");
      }

      let response = await fetch(`${BACKEND_URL}/api/questions/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ answer }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      return response.json();
    },
  });
};
