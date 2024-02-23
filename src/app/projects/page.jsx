"use client";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
import projectDetails from "@/data/projectDetails";
import { PlusIcon } from "@radix-ui/react-icons";

export default function ProjectsPage() {
  const [projectName, setProjectName] = React.useState("");
  const [projectCategory, setProjectcategory] = React.useState("");
  const [inputFields, setInputFields] = React.useState([
    {
      employeeName: "",
      role: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { employeeName: "", role: "" };

    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <>
      <main className="h-screen w-full">
        <Navbar />
        <h1 className="text-3xl py-10 px-10 mt-10">Projects </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-10 mb-10">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-4">Add Project</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add project</DialogTitle>
              <DialogDescription>
                Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="projectName" className="text-right">
                  Project Name
                </Label>
                <Input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Category" className="text-right">
                  Category
                </Label>
                <Input
                  type="text"
                  id="Category"
                  value={projectCategory}
                  onChange={(e) => setProjectcategory(e.target.value)}
                  className="col-span-3"
                />
              </div>
              {inputFields.map((input, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-4 items-center gap-3  "
                  >
                    <Label htmlFor="Category" className="text-right">
                      Employee
                    </Label>
                    <Input
                      value={input.employeeName}
                      label="Employee"
                      onChange={(event) => handleFormChange(index, event)}
                    />
                    <Label htmlFor="Category" className="text-right">
                      Role
                    </Label>
                    <DropdownMenu
                      value={input.role}
                      onChange={(event) => handleFormChange(index, event)}
                    >
                      <DropdownMenuTrigger className="text-sm py-1 px-1 border border-gray-300 rounded">
                        Select Role
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Manager</DropdownMenuItem>
                        <DropdownMenuItem>Lead</DropdownMenuItem>
                        <DropdownMenuItem>Developer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              })}
              <Button onClick={addFields}>
                <PlusIcon className="mr-3" />
                Add
              </Button>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Table className="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl.no</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Employee-Role</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectDetails.map((proj) => (
              <TableRow key={proj.project_id}>
                <TableCell>{proj.project_id}</TableCell>
                <TableCell className="py-4 font-medium">
                  {proj.project_name}
                </TableCell>
                <TableCell>{proj.category}</TableCell>
                <TableCell>
                  {proj.employee.map((emp, index) => {
                    return (
                      <p key={index}>
                        {emp.employee_name} - {emp.role}
                      </p>
                    );
                  })}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="py-2 px-4 ms-2 text-sm font-medium">
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit project</DialogTitle>
                        <DialogDescription>
                          Click save when you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="projectName" className="text-right">
                            Project Name
                          </Label>
                          <Input
                            type="text"
                            id="projectName"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="Category" className="text-right">
                            Category
                          </Label>
                          <Input
                            type="text"
                            id="Category"
                            value={projectCategory}
                            onChange={(e) => setProjectcategory(e.target.value)}
                            className="col-span-3"
                          />
                        </div>

                        {inputFields.map((input, index) => {
                          return (
                            <div
                              key={index}
                              className="grid grid-cols-4 items-center gap-3  "
                            >
                              <Label htmlFor="Category" className="text-right">
                                Employee
                              </Label>
                              <Input
                                value={input.employeeName}
                                label="Employee"
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                              />
                              <Label htmlFor="Category" className="text-right">
                                Role
                              </Label>
                              <DropdownMenu
                                value={input.role}
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                              >
                                <DropdownMenuTrigger className="text-sm py-1 px-1 border border-gray-300 rounded">
                                  Select Role
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>Manager</DropdownMenuItem>
                                  <DropdownMenuItem>Lead</DropdownMenuItem>
                                  <DropdownMenuItem>Developer</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          );
                        })}
                        <Button onClick={addFields}>
                          <PlusIcon className="mr-3" />
                          Add
                        </Button>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Button variant="destructive">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </>
  );
}
