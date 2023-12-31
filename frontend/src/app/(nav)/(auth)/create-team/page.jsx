"use client";
import { useState } from "react";
import Side_button from "@/components/side_button";
import { useCreateTeamMutation } from "@/hooks/mutations/create-team-mutation";
import { useAtom } from "jotai";
import { errorAtom } from "@/atoms/error";
import { useRouter } from "next/navigation";
import { useUserQuery } from "@/hooks/queries/user-query";
import { useEffect } from "react";

export default function CreateTeam() {
  const [teamname, setTeamname] = useState("");
  const [member, setMember] = useState("");

  const [, setError] = useAtom(errorAtom);

  const router = useRouter();
  const createTeam = useCreateTeamMutation();
  const userQuery = useUserQuery();

  useEffect(() => {
    if (userQuery?.data?.teamId != null) {
      router.push("/team");
    }
  }, [userQuery.data]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-background">
        <div className="w-96 p-6">
          <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
            Create Your Team
          </h1>
          <div className="sm:mt-12 mt-8">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Team Name
            </label>
            <input
              type="text"
              name="username"
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
              placeholder="Enter Team Name ..."
              onChange={(e) => setTeamname(e.target.value)}
              value={teamname}
            />
          </div>
          <div className="mt-7">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Team Size
            </label>
            <input
              type="number"
              name="size"
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background "
              placeholder="(1-3)"
              onChange={(e) => setMember(e.target.value)}
              value={member}
            />
          </div>

          <div className="sm:mt-12 mt-10 flex justify-center items-center">
            <button
              type="submit"
              className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main"
              disabled={createTeam.isLoading}
              onClick={() => {
                createTeam.mutate(
                  { teamname, member },
                  {
                    onSuccess: () => {
                      userQuery.refetch();
                    },
                    onError: (err) => {
                      setError({
                        title: "Failed to create team",
                        message: err.message,
                      });
                    },
                  }
                );
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Side_button />
    </>
  );
}
