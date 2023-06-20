import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "@/config";

export const useLeaderboardQuery = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async (params) => {
      // api/users/leaderboard
      const res = await fetch(`${BACKEND_URL}/api/users/leaderboard`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let parsedData = await res.json();
      if (!res.ok) {
        throw new Error(parsedData.message || "Something went wrong.");
      }

      return parsedData;
    },
  });
};
