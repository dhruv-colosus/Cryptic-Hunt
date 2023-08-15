"use client";
import { errorAtom } from "@/atoms/error";
import Side_button from "@/components/side_button";
import { useJoinTeamMutation } from "@/hooks/mutations/join-team-mutation";
import { useUserQuery } from "@/hooks/queries/user-query";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JoinTeam() {

  const [code, setCode] = useState('');
  const { mutate, isLoading } = useJoinTeamMutation()
  const [, setError] = useAtom(errorAtom)
  const router = useRouter()
  const userQuery = useUserQuery()

  useEffect(() => {
    if (userQuery?.data?.teamId != null) {
      router.push('/team')
    }
  }, [userQuery.data])

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-background">
        <div className="w-96 p-6">
          <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">Join A Team</h1>
          <div className="sm:mt-12 mt-8">
            <label className="block sm:text-xl text-base mb-2 font-heading">Team Code</label>
            <input type="text" name="username" className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background" placeholder="Enter Code..." onChange={e => setCode(e.target.value)} value={code} />
          </div>


          <div className="sm:mt-12 mt-4 flex justify-center items-center">
            <button type="submit" className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main"
              onClick={() => mutate(code, {
                onSuccess: async () => {
                  await userQuery.refetch()
                },
                onError: (error) => {
                  setError({
                    title: "Failed to join team",
                    message: error.message
                  })
                }
              })}
              disabled={isLoading}
            >Submit</button>
          </div>

          <Link href="/create-team" className="block text-center text-main cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 font-button hover:bg-background hover:text-main mt-4"
          >Or Create Team</Link>
        </div>
      </div >

      <Side_button />
    </>
  );
}
