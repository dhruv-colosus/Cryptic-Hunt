import { BACKEND_URL, getLocalStorageKey } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { userTokenAtom } from "@/atoms/user";
import { useAtom } from "jotai";

export function useJoinTeamMutation() {
  let [userToken] = useAtom(userTokenAtom);
  // userToken =
  //   userToken ||
  //   JSON.parse(localStorage.getItem(getLocalStorageKey("userToken")));
  let localStorageToken;

  // Check if we're in a browser environment before using localStorage
  if (typeof window !== "undefined") {
    localStorageToken = JSON.parse(
      localStorage.getItem(getLocalStorageKey("userToken"))
    );
  }

  // Use the userToken from Jotai if available, otherwise use localStorageToken
  userToken = userToken || localStorageToken;
  return useMutation({
    mutationKey: ["joinTeam"],
    mutationFn: async (code) => {
      let numericCode = parseInt(code);
      if (isNaN(numericCode)) {
        throw new Error("Invalid code");
      }

      const response = await fetch(`${BACKEND_URL}/api/team/member`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          code: numericCode,
        }),
      });

      let body = await response.json();
      if (!response.ok) {
        throw new Error(body.error);
      }

      return body;
    },
  });
}
