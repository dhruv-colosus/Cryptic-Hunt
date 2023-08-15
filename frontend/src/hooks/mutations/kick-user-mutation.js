import { userTokenAtom } from "@/atoms/user";
import { BACKEND_URL, getLocalStorageKey } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { useTeamQuery } from "../queries/get-team";
import { useAtom } from "jotai";

export function useKickUserMutation() {
  const teamQuery = useTeamQuery();
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
    mutationKey: ["kickUser"],
    mutationFn: async (data) => {
      const response = await fetch(
        `${BACKEND_URL}/api/team/member?${new URLSearchParams({
          memberId: data.memberId,
          teamId: data.teamId,
        })}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      let json = await response.json();
      if (!response.ok) {
        throw new Error(json.error);
      }

      return json;
    },
    onSuccess: (data) => {
      teamQuery.refetch();
    },
  });
}
