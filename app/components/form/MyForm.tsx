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
  const TotalStep = 10;
  const { user } = useUser();
  const [Step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState(user?.firstName);
  const [LastName, setLastName] = useState(user?.lastName);
  const [Email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [Age, setAge] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [CodePostal, setCodePostal] = useState("");
  const [Wilaya, setWilaya] = useState("");
  const [Gender, setGender] = useState("");
  const [ObjectivePrincipal, setObjectivePrincipal] = useState("");
  const [Taille, setTaille] = useState("");
  const [PoidsAct, setPoidsAct] = useState("");
  const [PoidsSouh, setPoidsSouh] = useState("");
  const [JourneGeneral, setJourneGeneral] = useState("");
  const [ActivitePhy, setActivitePhy] = useState("");
  const [Fatigue, setFatigue] = useState("");
  const [Estomac, setEstomac] = useState("");
  const [LesRepas, setLesRepas] = useState("");
  const [LesTendance, setLesTendance] = useState("");
  const [MangezExt, setMangezExt] = useState("");
  // arrays
  const lesRepas = ["Duex", "Trois", "Quatre", "Cinq"];
  const estomac = ["Oui", "Non", "Je ne suis pas sur"];
  const genders = ["male", "femal"];
  const wilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Bejaia",
    "Biskra",
    "Bechar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tebessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Setif",
    "Saida",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Medea",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arreridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Ain Defla",
    "Naâma",
    "Ain Temouchent",
    "Ghardaia",
    "Relizane",
  ];
  const objectivesPrincipal = [
    "Perdre du poids",
    "Prendre du poids",
    "Rester en forme et en bonne sante",
  ];
  const journesGeneral = [
    "Assis toute la journee au travail",
    "je suis toujours debout",
    "je fais beaucoup d'activite physique",
    "je reste a la maison",
  ];
  const activitePhy = [
    "Sedentaire",
    "Legerement actif",
    "Tres actif",
    "Extremement actif",
  ];
  const fatigues = [
    "Je me sens fatigue toute la journee",
    "Je me sens fatiguee avant les repas",
    "Jai quelque coups de barre l'apres-midi",
    "Je suis une boule de feu toute la journee",
  ];
  const tendaces = [
    "Manager tard le soir",
    "Je ne peux pas m'empecher de manger des bonbons",
    "J'adore les boissons gazeuses",
    "J'aime les aliments gras ou sales",
    "Rien de tout cela",
  ];
  const mangezext = [
    "1-3 fois par semaine",
    "Plus de 4 fois par semaine",
    "1-3 fois par mois ",
    "Presque jamais",
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
                            <div className="flex items-center gap-2">
                              {Wilaya == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
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
              ) : Step == 2 ? (
                <div>
                  <div className="mt-4">
                    <Label className="mb-2">Gender</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {Gender == "" ? "choose gender" : Gender}
                            <div className="flex items-center gap-2">
                              {Gender == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {genders.map((gender) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setGender(gender)}
                              className="flex justify-between items-center"
                            >
                              {gender}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">Objective principal</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {ObjectivePrincipal == ""
                              ? "choose Objective principal"
                              : ObjectivePrincipal}
                            <div className="flex items-center gap-2">
                              {ObjectivePrincipal == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {objectivesPrincipal.map((objective) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setObjectivePrincipal(objective)}
                              className="flex justify-between items-center"
                            >
                              {objective}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <MyInputField
                      title="Taille"
                      type="number"
                      value={Taille}
                      onChange={(e: any) => setTaille(e.target.value)}
                      placeholder="192 cm"
                    />
                    <MyInputField
                      title="Poids Actuel"
                      type="number"
                      value={PoidsAct}
                      onChange={(e: any) => setPoidsAct(e.target.value)}
                      placeholder="57 kg"
                    />
                    <MyInputField
                      title="Poids souhaite"
                      type="number"
                      value={PoidsSouh}
                      onChange={(e: any) => setPoidsSouh(e.target.value)}
                      placeholder="75 kg"
                    />
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      Comment passez-vous generalement votre journee
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {JourneGeneral == ""
                              ? "choose la journee"
                              : JourneGeneral}
                            <div className="flex items-center gap-2">
                              {JourneGeneral == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {journesGeneral.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setJourneGeneral(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ) : Step == 3 ? (
                <div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      Pratiques-vous une activite physique ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {ActivitePhy == ""
                              ? "choose un option"
                              : ActivitePhy}
                            <div className="flex items-center gap-2">
                              {ActivitePhy == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {activitePhy.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setActivitePhy(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      A quel point vous sentez-vous fatiguee pendant la journee
                      ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {Fatigue == "" ? "choose un option" : Fatigue}
                            <div className="flex items-center gap-2">
                              {Fatigue == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {fatigues.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setFatigue(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      Ressentez-vous des maux d&apos;estomac pendant la journee
                      ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {Estomac == "" ? "choose un option" : Estomac}
                            <div className="flex items-center gap-2">
                              {Estomac == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {estomac.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setEstomac(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      Combien de repas par jour aimeriez-vous avoir ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {LesRepas == "" ? "choose un option" : LesRepas}
                            <div className="flex items-center gap-2">
                              {LesRepas == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {lesRepas.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setLesRepas(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ) : Step == 4 ? (
                <div>
                  <div className="mt-4">
                    <Label className="mb-2">Vous avez tendance a ...?</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {LesTendance == ""
                              ? "choose une tendance"
                              : LesTendance}
                            <div className="flex items-center gap-2">
                              {LesTendance == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {tendaces.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setLesTendance(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      A quelle frequence mangez-vous a l&apos;exterieur?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {MangezExt == "" ? "choose une option" : MangezExt}{" "}
                            s
                            <div className="flex items-center gap-2">
                              {MangezExt == "" ? null : (
                                <Check size={15} className="text-green-500" />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {mangezext.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setMangezExt(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ) : null}
            </div>

            {Step == 10 ? (
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

            {Step == 10 ? null : (
              <Button
                onClick={() => setStep(Step + 1)}
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                Next <ArrowRight size={15} />
              </Button>
            )}
          </div>
          <div className="w-full h-2 bg-gray-50 mt-4 border rounded-full">
            <div
              style={{ width: `${(Step / TotalStep) * 100}%` }}
              className=" h-full transition-all bg-green-700 rounded-full"
            ></div>
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
