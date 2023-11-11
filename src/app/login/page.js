import SignInForm from "@src/components/SignInForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
