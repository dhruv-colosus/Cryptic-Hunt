import { useQuery } from "@tanstack/react-query";
import { useUserQuery } from "./user-query";
import { BACKEND_URL } from "@/config";

export function useTeamQuery() {
  let { data: user } = useUserQuery();

  return useQuery({
    queryKey: ["team", user?._id],
    enabled: !!user?._id,
    queryFn: async () => {
      let response = await fetch(
        `${BACKEND_URL}/api/team?${new URLSearchParams({
          teamId: user.teamId,
        })}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch team");
      }

      return response.json();
    },
  });
}
