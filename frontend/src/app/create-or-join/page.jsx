"use client";
import { PlayButton } from "@/components/play-btn";
import Side_button from "@/components/side_button";
import { useRouter } from 'next/navigation'

export default function Teamoptions() {
    const router = useRouter()
  return (
    <>
      {/* body */}
      <div className="flex justify-center items-center h-screen bg-background">
        <div className="w-96 p-6">
            <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">Team</h1>
            <div>
            <div className="grid grid-cols-2 mt-12 md:gap-8 gap-2 ml-5 sm:ml-0">
            <div className="flex justify-center items-center sm:text-3xl text-2xl block text-center font-heading text-sub sm:h-40 h-32 sm:w-40 w-32 sm:border-3 border-2 border-main">
                        <button onClick={() => router.push('/create-team')}>
                        CREATE
                        </button></div>
                    
            <div className="flex justify-center items-center sm:text-3xl text-2xl block text-center font-heading text-sub sm:h-40 h-32 sm:w-40 w-32 sm:border-3 border-2 border-main">
                        <button onClick={() => router.push('/jointeam')}>
                        JOIN
                        </button></div>
                    
                    
                </div>
            </div>
        </div>
    </div>
      {/* body ends */}

      {/* side buttons */}

      <Side_button />
      {/* side buttons end */}


    </>
  );
}