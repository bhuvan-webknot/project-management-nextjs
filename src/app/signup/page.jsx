"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Input } from "@/components/ui/input";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
const mont = Montserrat({ subsets: ["latin"] });

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputEmail, setInputEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");

  function signUpHandler(e) {
    e.preventDefault();
    router.push("/profile");
  }
  return (
    <>
      <main className="flex w-full h-screen flex-col md:flex-row entryPage">
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
          className={`${mont.className} entryPage-right-side mt-6 h-screen flex flex-col justify-center align-middle text-center`}
        >
          <h1 className="text-3xl font-bold text-slate-400 mb-2">Sign up</h1>
          <p className={mont.className}>Enter all the below details</p>
          <form onSubmit={signUpHandler}>
            <div
              style={{ padding: "3% 23%", width: "100%" }}
              className="forms text-left flex flex-col justify-center align-middle"
            >
              <Input
                type="text"
                className="px-4 py-6 mt-1 mb-2"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                placeholder="Enter your Name"
              />
              <Input
                type="text"
                className="px-4 py-6 mt-1 mb-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                id="roles"
                name="roles"
                placeholder="Enter your role"
              />
              <Input
                type="email"
                className="px-4 py-6 mt-2 mb-2"
                required
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                id="email"
                name="email"
                placeholder="Enter your Email"
              />
              <div className="flex relative justify-center align-middle">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="px-4 py-6 mt-1 mb-2"
                  required
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Enter Password"
                />
                {showPassword ? (
                  <EyeClosedIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-5"
                  />
                ) : (
                  <EyeOpenIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-5"
                  />
                )}
              </div>

              <Button type="submit" className="mt-5">
                Sign-up
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
