"use client";
import Navbar from "@/components/ui/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
export default function Profile() {
  const [cemail, setcEmail] = React.useState("bhuvan.s@webknot.in");
  const [crole, setcRole] = React.useState("Software Devlopment Intern");
  const [cName, setcName] = React.useState("Bhuvan");
  const [cphoneNumber, setcPhonenumber] = React.useState("123456789");
  return (
    <>
      <main>
        <Navbar />
        <div
          className="flex flex-col items-center justify-center  align-middle w-full"
          style={{ minHeight: "calc(100vh - 4rem)" }}
        >
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-10 pb-10">
            <div class="flex flex-col items-center">
              <h5 class="mb-2 text-2xl font-medium text-gray-900 dark:text-white">
                Bhuvan S
              </h5>
              <span class="text-md mb-1 text-md text-gray-500 dark:text-gray-400">
                Software Devlopment Intern
              </span>
              <span class="text-sm mb-2 text-gray-500 dark:text-gray-400">
                bhuvan.s@webknot.in
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                123456789
              </span>

              <div class="flex mt-4 md:mt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="py-2 px-4 ms-2 text-sm font-medium text-gray-200 focus:outline-none bg-purple-600 rounded-lg hover:bg-purple-800 focus:z-10 focus:ring-2 focus:ring-gray-100 ">
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="firstname"
                          value={cName}
                          onChange={(e) => setcName(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          value={cemail}
                          onChange={(e) => setcEmail(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          id="pNumber"
                          value={cphoneNumber}
                          onChange={(e) => setcPhonenumber(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Role
                        </Label>
                        <Input
                          type="text"
                          id="role"
                          value={crole}
                          onChange={(e) => setcRole(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
