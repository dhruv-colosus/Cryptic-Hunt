"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {};

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-96 p-6">
        <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
          Sign Up
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
            type="text"
            name="username"
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

        <div className="sm:mt-12 mt-10 flex justify-center items-center">
          <button
            type="submit"
            className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main
                 onClick={login}"
            onClick={register}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-5 flex justify-center items-center text-center">
          <p className="text-white font-sub">
            Already have an account?{" "}
            <a href="/login" className="underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
