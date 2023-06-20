"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Edit = () => {};

  return (
    <div className="flex justify-center items-center bg-background">
      <div className="w-96 p-6">
        <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
          Profile
        </h1>
        <div className="sm:mt-12 mt-8">
          <label className="block sm:text-xl text-base mb-2 font-heading">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            placeholder="Enter Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="sm:mt-7 mt-8">
          <label className="block sm:text-xl text-base mb-2 font-heading">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-7">
          <label className="block sm:text-xl text-base mb-2 font-heading">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background "
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-7">
          <label className="block sm:text-xl text-base mb-2 font-heading">
            Score
          </label>
          <input
            type="text"
            name="score"
            className="sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background "
            placeholder="Score"
          />
        </div>

        <div className="sm:mt-12 mt-10 flex justify-center items-center">
          <button
            type="submit"
            className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main
                 onClick={login}"
            onClick={Edit}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
