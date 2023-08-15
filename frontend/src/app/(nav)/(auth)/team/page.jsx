"use client";
import { FaCrown } from "react-icons/fa";
import Side_button from "@/components/side_button";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTeamQuery } from "@/hooks/queries/get-team";
import { errorAtom } from "@/atoms/error";
import { useUserQuery } from "@/hooks/queries/user-query";
import { useKickUserMutation } from "@/hooks/mutations/kick-user-mutation";
import { useDisbandTeamMutation } from "@/hooks/mutations/disband-team-mutation";

export default function Team() {
  const { data: teamData, isError, error, loading } = useTeamQuery();
  const { data: user } = useUserQuery();
  const [, setError] = useAtom(errorAtom);
  const router = useRouter();
  const kickUserMutation = useKickUserMutation();
  const disbandTeamMutation = useDisbandTeamMutation();

  useEffect(() => {
    if (isError) {
      setError({
        title: "Failed to fetch team details",
        message: error.message,
      });

      router.replace("/jointeam");
    }
  }, [isError]);

  if (loading || !teamData) {
    return "Loading...";
  }
  return (
    <>
      <div className="flex justify-center items-center bg-background">
        <div className="w-192 mt-36">
          <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main"></h1>
          <h1 className="sm:text-2xl block text-center font-heading text-base ">
            CODE FOR YOUR TEAM IS -{" "}
            <span className="text-main">{teamData.teamCode}</span>
          </h1>
          <h1 className="sm:text-xl block sm:mx-0 mx-4 text-center font-sub text-base">
            Only share this code with people you want in your team.
          </h1>
          <div className="w-192 p-6 mt-12 mb-16">
            <h1 className="sm:text-2xl block text-center font-heading text-base">
              Team Members
            </h1>
            <div className="grid grid-cols-2 w-full mt-12 md:gap-8 gap-2">
              {teamData.members.map((member, index) => {
                return (
                  <>
                    <div
                      key={member._id}
                      className="sm:text-xl text-sm text-main font-minecraftia"
                    >
                      {index + 1}) {member.name}
                    </div>
                    {member._id === teamData.teamOwner ? (
                      <div className="sm:text-lg sm:ml-52 ml-24 text-base text-sub ">
                        <FaCrown size={28} />
                      </div>
                    ) : user._id === teamData.teamOwner ? (
                      <div className="sm:text-lg sm:ml-52 ml-24 text-base text-sub ">
                        <button
                          onClick={async () => {
                            kickUserMutation.mutate({
                              teamId: teamData._id,
                              memberId: member._id,
                            });
                          }}
                          disabled={
                            member._id === teamData.teamOwner ||
                            kickUserMutation.isLoading
                          }
                        >
                          Kick
                        </button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {teamData.teamOwner === user._id && (
            <div className="w-full flex ">
              <button
                onClick={async () => {
                  disbandTeamMutation.mutate({ teamId: teamData._id });
                }}
                disabled={disbandTeamMutation.isLoading}
                className="bg-danger px-4 py-2 rounded-md font-minecraftia mx-auto self-center"
              >
                <div className="translate-y-1">Disband Team</div>
              </button>
            </div>
          )}
        </div>
        <Side_button />
      </div>
    </>
  );
}
