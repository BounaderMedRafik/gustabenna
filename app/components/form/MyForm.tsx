"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuestionnaireBG from "@/public/QuestionnaireBG.svg";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MyForm() {
  const { user } = useUser();
  const [Step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState(user?.firstName);
  const [LastName, setLastName] = useState(user?.lastName);
  const [Email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [Age, setAge] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [CodePostal, setCodePostal] = useState("");
  const [Wilaya, setWilaya] = useState("");

  const wilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arréridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(FirstName, LastName, Age, Email, PhoneNum, CodePostal, Wilaya);

    //supabase stuff dont forget :)
    // const { data, error } = await supabase
    //   .from("Users")
    //   .insert([{ FirstName, LastName, Age, Email }]);
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
                  {" "}
                  <MyInputField
                    title="PhoneNum"
                    type="number"
                    value={PhoneNum}
                    onChange={(e: any) => setPhoneNum(e.target.value)}
                    placeholder="+213 5589 45 84 12"
                  />
                  <MyInputField
                    title="CodePostal"
                    type="number"
                    value={CodePostal}
                    onChange={(e: any) => setCodePostal(e.target.value)}
                    placeholder="96799"
                  />
                  <div className="mt-4">
                    <Label className="mb-2">Wilaya</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {Wilaya == "" ? "choose wilaya" : Wilaya}
                            <ChevronDown size={15} />
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full h-52">
                          {wilayas.map((wilaya) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setWilaya(wilaya)}
                              className="flex justify-between items-center"
                            >
                              {wilaya}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
