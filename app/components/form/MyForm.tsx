"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuestionnaireBG from "@/public/QuestionnaireBG.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import MyInputField from "./MyInputField";
import supabase from "@/app/config/supabaseClient";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

export function MyForm() {
  const { user } = useUser();
  const [Step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState(user?.firstName);
  const [LastName, setLastName] = useState(user?.lastName);
  const [Email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [Age, setAge] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(FirstName, LastName, Age, Email);
    const { data, error } = await supabase
      .from("Users")
      .insert([{ FirstName, LastName, Age, Email }]);
  };
  return (
    <div className="w-full h-[92vh] lg:grid lg:min-h-[900vh] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-3xl font-bold">Questionnaire</h1>
            <p className="text-balance text-muted-foreground">
              Relax and answer with most accurate response
            </p>
          </div>

          <form onSubmit={handleSubmit}>
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
              <div>page of nigas;-;</div>
            ) : null}

            {/*--- submit buttons */}
            <div className="flex justify-between gap-2 mt-5">
              <Button
                onClick={() => setStep(Step - 1)}
                type="submit"
                className="w-full flex justify-center items-center gap-2"
              >
                <ArrowLeft size={15} />
                Previous
              </Button>
              <Button
                onClick={() => setStep(Step + 1)}
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                Next <ArrowRight size={15} />
              </Button>
            </div>
          </form>
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
