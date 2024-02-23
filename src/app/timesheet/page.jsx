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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import timesheetDetails from "@/data/timesheetDetails";
import employeeDetails from "@/data/employeeDetails";

export default function TimesheetPage() {
  const [date, setDate] = React.useState("");

  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <h1 className="text-3xl py-10 px-10 mt-10">Timesheet</h1>
        <div className="flex justify-around">
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" ml-10 mb-10 py-2 px-4 ms-2 text-sm font-medium text-gray-200 focus:outline-none bg-purple-600 rounded-lg hover:bg-purple-800 focus:z-10 focus:ring-2 focus:ring-gray-100 ">
                Add Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit</DialogTitle>
                <DialogDescription>
                  Make changes to your timesheet here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="projectName" className="text-right">
                    Project Name
                  </Label>
                  <Input type="text" id="projectName" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="employeeName" className="text-right">
                    Employee Name
                  </Label>
                  <Input type="text" id="employeeName" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="employeeName" className="text-right">
                    Start date
                  </Label>
                  <Input type="text" id="employeeName" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="desc" className="text-right">
                    Description
                  </Label>
                  <Input type="text" id="desc" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="duration" className="text-right">
                    Duration
                  </Label>
                  <Input type="text" id="duration" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <select
            className="bg-slate-950 border border-gray-600 rounded text-sm h-1/2 px-4 py-2"
            name="empName"
            id="empName"
          >
            <option className="bg-gray-900" value="Select Employee">
              Select Employee
            </option>
            {employeeDetails.map((ele) => {
              return (
                <option className="bg-gray-900" value={ele.name}>
                  {ele.name}
                </option>
              );
            })}
          </select>
        </div>
        <Table className="my-10">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl.no</TableHead>
              <TableHead>Employee Name</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Number of Hrs.</TableHead>
              <TableHead>Edit Entry</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timesheetDetails.map((ele) => (
              <TableRow key={ele.id}>
                <TableCell>{ele.id}</TableCell>
                <TableCell className="py-4 font-medium">
                  Emp {ele.employee_id}
                </TableCell>
                <TableCell>Project {ele.project_id}</TableCell>
                <TableCell>{ele.desc}</TableCell>
                <TableCell>{ele.duration}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="py-2 px-4 ms-2 text-sm font-medium text-gray-200 focus:outline-none bg-purple-600 rounded-lg hover:bg-purple-800 focus:z-10 focus:ring-2 focus:ring-gray-100 ">
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit</DialogTitle>
                        <DialogDescription>
                          Make changes to your timesheet here. Click save when
                          you're done.
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
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="employeeName" className="text-right">
                            Employee Name
                          </Label>
                          <Input
                            type="text"
                            id="employeeName"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="desc" className="text-right">
                            Description
                          </Label>
                          <Input type="text" id="desc" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="duration" className="text-right">
                            Duration
                          </Label>
                          <Input
                            type="text"
                            id="duration"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
