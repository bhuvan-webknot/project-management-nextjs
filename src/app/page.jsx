"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Head from "next/head";

const mont = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();
  function signUpHandler(e) {
    e.preventDefault();
    router.push("/profile");
  }
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <Head>
        <title>Login !!</title>
      </Head>
      <main className="flex flex-col md:flex-row h-screen entryPage">
        <div
          style={{ width: "40%" }}
          className="entryPage-img flex justify-start flex-wrap align-middle"
        >
          <Image
            src="/background_login.svg"
            alt="Background"
            width={1000}
            className="object-fill"
            height={800}
          />
        </div>
        <div
          style={{ width: "60%" }}
          className={`${mont.className} mt-6 h-screen flex flex-col justify-center align-middle text-center`}
        >
          <h1 className="text-3xl font-bold text-slate-400 mb-2">
            Welcome Back
          </h1>
          <p className={mont.className}>
            Enter your Email and password to access this account
          </p>
          <form onSubmit={signUpHandler}>
            <div
              style={{ padding: "7% 23%", width: "100%" }}
              className="forms text-left flex flex-col justify-center align-middle"
            >
              <Label>Email</Label>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="px-4 py-6 mt-2 mb-6"
                required
                id="email"
                name="email"
                placeholder="Enter your Email"
              />
              <Label>Password</Label>
              <div className="flex relative justify-center align-middle">
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  className="px-4 py-6 mt-2 mb-3"
                  required
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />

                {showPassword ? (
                  <EyeClosedIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-6"
                  />
                ) : (
                  <EyeOpenIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-6"
                  />
                )}
              </div>
              <a className="hover:text-purple-400 text-sm cursor-pointer text-slate-400 font-semibold">
                Forgot Password ?
              </a>
              <Button type="submit" className="mt-5">
                Login
              </Button>
            </div>
          </form>

          <p>
            Don&apos;t have an account ?{" "}
            <span className="ml-2 text-purple-500 cursor-pointer font-semibold">
              <Link href="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
