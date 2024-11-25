import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaUser } from "react-icons/fa";
const AlertDialoge = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <FaUser
            size={35}
            className="text-black border border-black  hover:scale-110 hover:transition ease-in-out duration-300 hover:cursor-pointer  p-2 rounded-full"
          />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex  flex-col items-center justify-center ">
                <div className="p-8  ">
                  <h2 className="text-gray-800 text-center text-2xl font-bold">
                    Sign in
                  </h2>
                  <form className="mt-8 space-y-4">
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        User name
                      </label>
                      <div className="relative flex items-center">
                        <input
                          name="username"
                          type="text"
                          required
                          className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                          placeholder="Enter user name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          name="password"
                          type="password"
                          required
                          className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-3 block text-sm text-gray-800"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a
                          href="jajvascript:void(0);"
                          className="text-blue-600 hover:underline font-semibold"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div className="!mt-8">
                      <button
                        type="button"
                        className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="text-gray-800 text-sm !mt-8 text-center">
                      Don't have an account?{" "}
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                      >
                        Register here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialoge;
