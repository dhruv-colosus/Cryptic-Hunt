"use client";
import { useLoginMutation } from "@/hooks/mutations/login-mutation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginPostObjSchema } from "../types";
import { useRouter } from "next/navigation";
import { NotLoggedIn } from "@/components/not-logged-in";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const loginMutation = useLoginMutation();

  const login = (data) => {
    loginMutation.mutate(loginPostObjSchema.parse(data), {
      onSuccess: (data) => {
        console.log(data);
        router.replace("/");
      },
    });
  };

  return (
    <NotLoggedIn>
      <div className="flex justify-center items-center h-screen bg-background">
        <form onSubmit={handleSubmit(login)}>
          <div className="w-96 p-6">
            <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
              Login
            </h1>
            <div className="grid gap-8 mt-8">
              <div className="">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 40,
                      message: "Username must be at most 40 characters",
                    },
                    pattern: {
                      message:
                        "Username must contain only _, letters and numbers",
                      value: /^[a-zA-Z0-9_]+$/,
                    },
                  })}
                  type="text"
                  className={`sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background ${
                  errors.username && "border-danger"
                }`}
                  placeholder="Enter Username..."
                />
                {errors.username && (
                  <p className="text-danger text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className={`sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background ${
                  errors.password && "border-danger"
                }`}
                  placeholder="Enter Password..."
                />
                {errors.password && (
                  <p className="text-danger text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:mt-12 mt-10 flex justify-center items-center">
              <button
                type="submit"
                className="block text-center outline-none bg-main text-black cursor-pointer transition  duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main
                 onClick={login}"
              >
                Login
              </button>
            </div>
            <div className="mt-5 flex justify-center items-center text-center">
              <p className="text-white font-sub">
                Don’t have an account?{" "}
                <a href="/register" className="underline">
                  SignUp
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </NotLoggedIn>
  );
}
