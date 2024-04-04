"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuestionnaireBG from "@/public/QuestionnaireBG.svg";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import MyInputField from "./MyInputField";
import supabase from "@/app/config/supabaseClient";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MyForm() {
  const { user } = useUser();
  const [Step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState(user?.firstName);
  const [LastName, setLastName] = useState(user?.lastName);
  const [Email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [Age, setAge] = useState("");
  const [Fruits, setFruits] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [CodePostal, setCodePostal] = useState("");
  const [Wilaya, setWilaya] = useState("");
  const [choice, setChoice] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(FirstName, LastName, Age, Email, Fruits);
    const { data, error } = await supabase
      .from("Users")
      .insert([{ FirstName, LastName, Age, Email, Fruits }]);
  };

  return (
    <div className="w-full h-[92vh] lg:grid lg:min-h-[900vh] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] ">
          <div className="grid gap-2 text-start">
            <h1 className="text-3xl font-bold">Questionnaire</h1>
            <p className="text-balance text-muted-foreground">
              Relax and answer with most accurate response
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              {Step == 0 ? (
                <div>
                  <MyInputField
                    title="FirstName"
                    type="text"
                    value={FirstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    placeholder="Med Rafik"
                  />
                  <MyInputField
                    title="LastName"
                    type="text"
                    value={LastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                    placeholder="Bounader"
                  />
                  <MyInputField
                    title="Email"
                    type="email"
                    value={Email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="Bounader@gmail.com"
                  />
                  <MyInputField
                    title="Age"
                    type="number"
                    value={Age}
                    onChange={(e: any) => setAge(e.target.value)}
                    placeholder="21 Years old"
                  />
                </div>
              ) : Step == 1 ? (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full">
                      <Button className="w-full" variant="outline">
                        {Fruits == "" ? "Choose a fruite" : Fruits}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[250px]">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setFruits("banane")}>
                        banane
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFruits("apples")}>
                        apples
                      </DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : null}
            </div>

            {Step == 1 ? (
              <Button
                onClick={() => toast.success("new user added succefuly")}
                type="submit"
                className="w-full flex justify-center items-center gap-2 mt-7"
                variant="submit"
              >
                Submit
                <Check size={15} />
              </Button>
            ) : null}
          </form>
          <div className="flex justify-between gap-2 mt-1">
            <Button
              disabled={Step < 1 ? true : false}
              onClick={() => setStep(Step - 1)}
              className="w-full flex justify-center items-center gap-2"
            >
              <ArrowLeft size={15} />
              Previous
            </Button>

            {Step == 1 ? null : (
              <Button
                onClick={() => setStep(Step + 1)}
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                Next <ArrowRight size={15} />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={QuestionnaireBG}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
