import { userTokenAtom } from "@/atoms/user";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { BACKEND_URL, getLocalStorageKey } from "@/config";

export const useUserQuery = () => {
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

  return useQuery({
    queryKey: ["user", userToken],
    queryFn: async (params) => {
      let [_, token] = params.queryKey;

      if (!token) {
        return null;
      }

      let response = await fetch(`${BACKEND_URL}/api/users/secretupdate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        throw new Error("Invalid token.");
      }

      if (!response.ok) {
        return null;
      }

      return await response.json();
    },
  });
};
