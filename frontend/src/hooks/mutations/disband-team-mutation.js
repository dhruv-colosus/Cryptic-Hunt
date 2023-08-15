import { errorAtom } from "@/atoms/error";
import { userTokenAtom } from "@/atoms/user";
import { BACKEND_URL, getLocalStorageKey } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export function useDisbandTeamMutation() {
  let userToken = useAtom(userTokenAtom)[0];
  // userToken =
  //   userToken || localStorage.getItem(getLocalStorageKey("userToken"));
  let localStorageToken;

  // Check if we're in a browser environment before using localStorage
  if (typeof window !== "undefined") {
    localStorageToken = JSON.parse(
      localStorage.getItem(getLocalStorageKey("userToken"))
    );
  }

  // Use the userToken from Jotai if available, otherwise use localStorageToken
  userToken = userToken || localStorageToken;

  const router = useRouter();
  const [, setError] = useAtom(errorAtom);

  return useMutation({
    mutationKey: ["disbandTeam"],
    mutationFn: async (data) => {
      let response = await fetch(
        `${BACKEND_URL}/api/team?${new URLSearchParams({
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

    onSuccess: () => {
      router.push("/jointeam");
    },
    onError: (error) => {
      setError({
        title: "Failed to delete team",
        description: error.message,
      });
    },
  });
}
