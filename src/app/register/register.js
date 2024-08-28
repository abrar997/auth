import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const firstName = useRef();
  return (
    <div className="grid relative grid-cols-4 bg-main h-[100vh]">
      <img
        src="assets/signUp.png"
        className="absolute bottom-0 z-10 left-0 hidden lg:flex lg:w-[330px] xl:w-[420px]"
      />
      <div className="col-span-1 hidden lg:flex flex-col absolte z-0 h-full px-[35px] py-[22px] bg-gradient-to-b from-[#455A64] to-[#86AFC2]">
        <Link to="">
          <svg
            width="30"
            height="42"
            viewBox="0 0 32 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6.02899L10.3385 30.8986L32 0L10.3385 52L0 6.02899Z"
              fill="#D9D9D9"
            />
          </svg>
        </Link>
        <p
          style={{
            WebkitTextStroke: "1.2px #263238",
            strokeWidth: "1px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="text-center leading-[52px] font-unique text-white lg:text-[32px] py-8"
        >
          Start your journey with us
        </p>
      </div>
      <div className="rounded-xl px-8 col-span-3 xl:w-[90%]">
        <div className="lg:py-6 grid gap-6 bg-main">
          <h1 className="text-4xl pt-20 text-[#3c3c3c] font-bold">
            Create Account
          </h1>
          <form className="grid gap-5">
            <div className="grid grid-cols-2 gap-12">
              <div className="relative">
                <label
                  htmlFor=""
                  className="absolute font-semibold text-label left-3 -top-3.5 bg-main px-2"
                >
                  First Name
                </label>

                <input
                  ref={firstName}
                  className="px-4 py-2.5 text-[18px] w-full bg-transparent border border-primary rounded-lg"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor=""
                  className="absolute font-semibold text-label left-3 -top-3.5 bg-main px-2"
                >
                  Last Name
                </label>
                <input
                  ref={firstName}
                  className="px-4 py-2.5 text-[18px] w-full bg-transparent border border-primary rounded-lg"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="absolute font-semibold text-label left-3 -top-3.5 bg-main px-2"
              >
                Email
              </label>
              <input
                ref={firstName}
                className="px-4 py-2.5 text-[18px] w-full bg-transparent border border-primary rounded-lg"
              />
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="absolute font-semibold text-label left-3 -top-3.5 bg-main px-2"
              >
                Password
              </label>
              <input
                ref={firstName}
                className="px-4 py-2.5 text-[18px] w-full bg-transparent border border-primary rounded-lg"
              />
            </div>
            <div className="grid gap-1">
              <button className="text-[18px] bg-secondary hover:bg-opacity-85 mt-2 rounded-lg w-full p-2.5 text-white font-semibold">
                create
              </button>
              <p className="pl-3 text-gray-500 font-light text-sm">
                already have an account ?
                <Link to="login" className="px-1 text-primary font-semibold">
                  Log in
                </Link>
              </p>
            </div>
          </form>
          <div className="grid pt-4 gap-10">
            <div className="flex text-gray-500 items-center w-full justify-between gap-4">
              <div className="bg-gray-400 h-[1px] w-full" />
              <span>or</span>
              <div className="bg-gray-400 h-[1px] w-full" />
            </div>
            <div className="flex gap-10 justify-between">
              <button className="rounded-lg w-full justify-center flex border border-primary p-4 py-2 items-center gap-2 hover:bg-gray-300">
                <svg
                  width="40"
                  height="34"
                  viewBox="0 0 42 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7422 34C32.1978 34 41.4845 26.3888 41.4845 17C41.4845 7.61116 32.1978 0 20.7422 0C9.28661 0 0 7.61116 0 17C0 26.3888 9.28661 34 20.7422 34Z"
                    fill="#263238"
                  />
                  <path
                    d="M27.9818 10.2199H13.5027C11.789 10.2199 10.3995 11.3588 10.3995 12.7633V21.24C10.3995 22.6445 11.789 23.7834 13.5027 23.7834H27.9818C29.6954 23.7834 31.085 22.6445 31.085 21.24V12.7599C31.085 11.3555 29.6954 10.2199 27.9818 10.2199ZM27.5604 11.9133L21.4755 16.8971C21.0744 17.2291 20.4181 17.2324 20.013 16.9004L20.009 16.8971L13.924 11.9133H27.5604ZM29.0189 21.24C29.0189 21.7082 28.557 22.0867 27.9858 22.0867H13.5027C12.9315 22.0867 12.4696 21.7082 12.4696 21.24V13.1086L18.5505 18.0924C19.7618 19.0851 21.7226 19.0851 22.938 18.0924L29.0189 13.1086V21.24Z"
                    fill="white"
                  />
                </svg>
                <span> Signup with Email </span>
              </button>
              <button className="rounded-lg w-full justify-center flex border border-primary p-4 py-2 items-center gap-2 hover:bg-gray-300">
                <svg
                  width="38"
                  height="36"
                  viewBox="0 0 38 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.95 35.44C29.4158 35.44 37.9 27.5065 37.9 17.72C37.9 7.93351 29.4158 0 18.95 0C8.4842 0 0 7.93351 0 17.72C0 27.5065 8.4842 35.44 18.95 35.44Z"
                    fill="#3C5A99"
                  />
                  <path
                    d="M20.4231 26.58V18.5091H23.3322L23.7689 15.3493H20.4231V13.3385C20.4231 12.4248 20.6933 11.8053 22.0923 11.8053H23.8652V8.98807C23.558 8.95 22.4994 8.86348 21.2669 8.86348C18.6946 8.86348 16.9329 10.3309 16.9329 13.027V15.3527H14.0349V18.5126H16.9329V26.58H20.4231Z"
                    fill="white"
                  />
                </svg>

                <span> Signup with Facebook </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
