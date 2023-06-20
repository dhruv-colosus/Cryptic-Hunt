"use client";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/hooks/mutations/register-mutation";
import { useRouter } from "next/navigation";
import { NotLoggedIn } from "@/components/not-logged-in";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerUserMutation = useRegisterMutation();
  const router = useRouter();

  const registerUser = (data) => {
    registerUserMutation.mutate(data, {
      onSuccess: (data) => {
        router.replace("/");
      },
    });
  };

  console.log(errors);

  return (
    <NotLoggedIn>
      <div className="flex justify-center items-center h-screen bg-background">
        <form className="w-full" onSubmit={handleSubmit(registerUser)}>
          <div className="w-full max-w-4xl mx-auto  p-6">
            <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">
              Sign Up
            </h1>
            <div className="grid md:grid-cols-2 w-full mt-12 gap-8">
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
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 40,
                      message: "Name must be at most 40 characters",
                    },
                  })}
                  type="text"
                  className={`sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background ${
                  errors.name && "border-danger"
                }`}
                  placeholder="Enter Name..."
                />
                {errors.name && (
                  <p className="text-danger text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                  className={`sm:border-3 border-2 border-main w-full text-base
                px-2 py-2 font-sub bg-background ${
                  errors.email && "border-danger"
                }`}
                  placeholder="Enter Email..."
                />
                {errors.email && (
                  <p className="text-danger text-sm mt-1">
                    {errors.email.message}
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
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
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
                className="block text-center bg-main text-black cursor-pointer transition delay-300 duration-300
                sm:py-2 py-1 sm:px-12 px-10 border-2 border-main font-button hover:bg-background hover:text-main
                 onClick={login}"
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
        </form>
      </div>
    </NotLoggedIn>
  );
}
