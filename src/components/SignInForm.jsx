"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@src/store/users/users.action";
import { useRouter } from "next/navigation";
import Button from "./Button";

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSignInHandler = (ev) => {
    ev.preventDefault();
    dispatch(loginUser({ username: ev.target.username.value }));
    router.push("/");
  };

  return (
    <form className="space-y-6" onSubmit={onSignInHandler}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            required
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="px-2 block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-primary hover:text-primary"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <Button type="submit" className="flex w-full justify-center">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
