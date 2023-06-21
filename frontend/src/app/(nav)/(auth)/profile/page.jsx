"use client";
import { logOutUserAtom } from "@/atoms/user";
import { useState } from "react";
import { useAtom } from "jotai";
import { useUserQuery } from "@/hooks/queries/user-query";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, logOutUser] = useAtom(logOutUserAtom);

  const userQuery = useUserQuery();

  if (!userQuery.data) {
    return null;
  }

  const user = userQuery.data;

  const logOut = () => {
    logOutUser();
  };

  return (
    <div className="flex justify-center items-center bg-background">
      <div className="w-full max-w-4xl mx-auto  p-6">
        <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
          Profile
        </h1>
        <div className="grid md:grid-cols-2 w-full mt-12 gap-8">
          <div className="">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Name
            </label>
            <div
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            >
              {user.name}
            </div>
          </div>
          <div className="">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Username
            </label>
            {/* <input
            type="text"
            name="username"
            className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            placeholder="Enter Username..."
            onChange={(e) => setUsername(e.target.value)}
          /> */}
            <div
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            >
              {user.username}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 w-full mt-12 gap-8">
          <div className="">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Email
            </label>
            <div
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            >
              {user.email}
            </div>
          </div>

          <div className="">
            <label className="block sm:text-xl text-base mb-2 font-heading">
              Score
            </label>
            <div
              className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            >
              {user.score}
            </div>
          </div>
        </div>

        <div className="sm:mt-12 mt-10 flex justify-center items-center">
          <button
            type="submit"
            className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main
                 onClick={login}"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
