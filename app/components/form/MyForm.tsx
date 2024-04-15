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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function MyForm() {
  const router = useRouter();
  const TotalStep = 7;
  const { user } = useUser();
  const UserFirstname = user?.firstName;
  const UserLastname = user?.lastName;
  const UserEmail = user?.emailAddresses[0].emailAddress;
  const [Step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState(UserFirstname);
  const [LastName, setLastName] = useState(UserLastname);
  const [Email, setEmail] = useState(UserEmail);
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
  const [PrepaRepas, setPrepaRepas] = useState("");
  const [LesVices, setLesVices] = useState("");
  const [MalbouffOuSoda, setMalbouffOuSoda] = useState("");
  const [SatisfaitPoids, setSatisfaitPoids] = useState("");
  const [ConsommationEau, setConsommationEau] = useState("");
  const [TempDormi, setTempDormi] = useState("");
  const [RestrictionAlim, setRestrictionAlim] = useState("");
  const [ProblemeMedicaux, setProblemeMedicaux] = useState("");

  // arrays
  const lesRepas = ["Duex", "Trois", "Quatre", "Cinq"];
  const estomac = ["Oui", "Non", "Je ne suis pas sur"];
  const genders = ["male", "femal"];
  const wilayas = [
    "1. Adrar",
    "2. Chlef",
    "3. Laghouat",
    "4. Oum El Bouaghi",
    "5. Batna",
    "6. Bejaia",
    "7. Biskra",
    "8. Bechar",
    "9. Blida",
    "10. Bouira",
    "11. Tamanrasset",
    "12. Tebessa",
    "13. Tlemcen",
    "14. Tiaret",
    "15. Tizi Ouzou",
    "16. Alger",
    "17. Djelfa",
    "18. Jijel",
    "19. Setif",
    "20. Saida",
    "21. Skikda",
    "22. Sidi Bel Abbès",
    "23. Annaba",
    "24. Guelma",
    "25. Constantine",
    "26. Medea",
    "27. Mostaganem",
    "28. M'Sila",
    "29. Mascara",
    "30. Ouargla",
    "31. Oran",
    "32. El Bayadh",
    "33. Illizi",
    "34. Bordj Bou Arreridj",
    "35. Boumerdès",
    "36. El Tarf",
    "37. Tindouf",
    "38. Tissemsilt",
    "39. El Oued",
    "40. Khenchela",
    "41. Souk Ahras",
    "42. Tipaza",
    "43. Mila",
    "44. Ain Defla",
    "45. Naâma",
    "46. Ain Temouchent",
    "47. Ghardaia",
    "48. Relizane",
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
  const prepa = [
    "Moins de 30min par repas",
    "30-60 minutes par repas",
    "plus de 1 heure par repas",
  ];
  const lesvices = [
    "Incapable de me reposer suffisamment",
    "j'adore le chocolat et les bonbons",
    "le soda est meilleur ami",
    "je consomme beaucoup d'aliment sales",
    "je grignote tard le soir",
    "la malbouffe est mon petit plaisir",
    "je mange chaque fois que je me sens mal",
    "j'ai tendance a trop manger",
    "Aucune de ces reponses",
  ];
  const malbouffousoda = [
    "Presque chaque jour",
    "Plusieurs fois par semaine",
    "Une fois chaque semaine ou toutes les deux semaines",
    "Un fois par mois ou moins sauvent",
    "Aucune de ces reponses",
  ];
  const satisfait = [
    "Il y a 0 a 6 mois",
    "Il y a 6 a 12 mois",
    "Il y a 1 a 3 ans",
    "Il y a plus de 3 ans",
    "jamais",
  ];
  const consommationeau = [
    "Environ 2 verres",
    "2 a 6 verres",
    "plus de 6 verres",
    "je ne bois que du cafe et du the",
    "je ne compte pas, ca depend",
  ];
  const tempdormi = [
    "Moins de 5 heurs",
    "5-6 heurs",
    "7-8 heurs",
    "plus de heurs",
  ];
  const restrictionalim = [
    "Rien de tout cela",
    "Sans lactose",
    "Sans gluten",
    "pas de poisson",
    "pas de fruits de mer",
  ];
  const problemeMed = [
    "Diabete de type 01",
    "hypertension aterielle",
    "cancer",
    "Syndrom des ovaires polykstique (SOPK)",
    "trouble de l'alimentation",
    "hepatites virales",
    "autre maladie ou trouble preexistant",
    "aucun de la liste",
  ];

  //multiple selection
  const lesLiqueds = [
    "Eau",
    "soda",
    "cafe",
    "lait",
    "the",
    "yaourt",
    "jus",
    "autre",
  ];
  const [LesLiqueds, setLesLiqueds] = useState([""]);
  const handleLesLiqueds = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesLiqueds(e.target.value.split(","));
  };

  const lesLegumes = [
    "pomme de terre",
    "tomate",
    "concombre",
    "poivron",
    "oignon",
    "epinards",
    "l'ail",
    "champignons",
    "tomate cerise",
    "laitue",
    "courgette",
    "carotte",
    "citrouille",
    "betteraves",
    "petit pois",
    "aubergine",
    "asperge",
    "brocoli",
    "chou-fleur",
    "radis",
  ];
  const [LesLigumes, setLesLigumes] = useState([""]);
  const handleLesLigumes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesLigumes(e.target.value.split(","));
  };

  const lesPains = [
    "riz",
    "spaghetti",
    "pain complet",
    "couscous",
    "flocons d'avoine",
    "quinoa",
    "pain blanc",
  ];
  const [LesPains, setLesPains] = useState([""]);
  const handleLesPains = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesPains(e.target.value.split(","));
  };

  const lesPoisson = [
    "Thon",
    "sardine",
    "dorade",
    "espadon",
    "merlan",
    "latcha",
    "saumon",
    "poulpe",
    "bonite",
    "crevette",
  ];
  const [LesPoisson, setLesPoisson] = useState([""]);
  const handleLesPoisson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesPoisson(e.target.value.split(","));
  };

  const lesLaitiers = [
    "Yaourt grec",
    "feta",
    "creme",
    "parmesan rape",
    "mozzarella burrata",
    "mozzarella",
    "fromage a la creme light",
  ];
  const [LesLaitiers, setLesLaitiers] = useState([""]);
  const handleLesLaitiers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesLaitiers(e.target.value.split(","));
  };

  const lesViands = [
    "oeuf",
    "escalope de poulet",
    "poitrine de dinde",
    "poulet hache",
    "saucisse de poulet",
    "boeuf",
    "cheval",
    "chevreau",
    "veau",
    "L'agneau",
  ];
  const [LesViands, setLesViands] = useState([""]);
  const handleLesViands = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesViands(e.target.value.split(","));
  };

  const lesFruites = [
    "bananes",
    "pomme",
    "poire",
    "orange",
    "baies fraiches",
    "avocat",
    "mangue",
    "fraise",
  ];
  const [LesFruites, setLesFruites] = useState([""]);
  const handleLesFruites = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLesFruites(e.target.value.split(","));
  };
  //my functionalities

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(
      PhoneNum,
      CodePostal,
      Gender,
      ObjectivePrincipal,
      Taille,
      PoidsAct,
      PoidsSouh,
      JourneGeneral,
      ActivitePhy,
      Fatigue,
      Estomac,
      LesRepas,
      LesTendance,
      MangezExt,
      PrepaRepas,
      LesVices,
      MalbouffOuSoda,
      SatisfaitPoids,
      ConsommationEau,
      TempDormi,
      RestrictionAlim,
      ProblemeMedicaux,
      //array
      LesLiqueds,
      LesLigumes,
      LesPains,
      LesPoisson,
      LesLaitiers,
      LesViands,
      LesFruites
    );

    //supabase stuff dont forget :)
    const { data, error } = await supabase.from("Users").insert([
      {
        FirstName,
        LastName,
        Age,
        Email,
        PhoneNum,
        CodePostal,
        Gender,
        ObjectivePrincipal,
        Taille,
        PoidsAct,
        PoidsSouh,
        JourneGeneral,
        ActivitePhy,
        Fatigue,
        Estomac,
        LesRepas,
        LesTendance,
        MangezExt,
        PrepaRepas,
        LesVices,
        MalbouffOuSoda,
        SatisfaitPoids,
        ConsommationEau,
        TempDormi,
        RestrictionAlim,
        ProblemeMedicaux,
        //array
        LesLiqueds,
        LesLigumes,
        LesPains,
        LesPoisson,
        LesLaitiers,
        LesViands,
        LesFruites,
      },
    ]);
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full h-52 relative">
                          <div className="  bg-gradient-to-t from-black/10 to-50% pointer-events-none rounded-md to-transparent absolute w-full h-full"></div>

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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                            {MangezExt == "" ? "choose une option" : MangezExt}
                            <div className="flex items-center gap-2">
                              {MangezExt == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
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
                  <div className="mt-4">
                    <Label className="mb-2">
                      Combien de temps pouvez-vous consacrer a la preparation de
                      votre repas ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {PrepaRepas == ""
                              ? "choose une option"
                              : PrepaRepas}
                            <div className="flex items-center gap-2">
                              {PrepaRepas == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {prepa.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setPrepaRepas(index)}
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
                      Certains de ces vices vous retiennent-ils ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {LesVices == "" ? "choose une vice" : LesVices}
                            <div className="flex items-center gap-2">
                              {LesVices == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full relative h-52 ">
                          <div className="absolute h-full w-full bg-gradient-to-t from-black/10 to-30% rounded-md pointer-events-none to-transparent  "></div>
                          {lesvices.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setLesVices(index)}
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
              ) : Step == 5 ? (
                <div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      A quelle frequence consommez-vous de la malbouffe ou des
                      sodas ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between 
                          "
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {MalbouffOuSoda == ""
                              ? "choose une option"
                              : MalbouffOuSoda}

                            <div className="flex items-center gap-2">
                              {MalbouffOuSoda == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {malbouffousoda.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setMalbouffOuSoda(index)}
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
                      Quand avez-vous ete satisfait de votre poids pour la
                      derniere fois ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between 
                          "
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {SatisfaitPoids == ""
                              ? "choose une option"
                              : SatisfaitPoids}

                            <div className="flex items-center gap-2">
                              {SatisfaitPoids == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {satisfait.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setSatisfaitPoids(index)}
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
                      Quelle est votre consommation d&apos;eau quotidienne ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between 
                          "
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {ConsommationEau == ""
                              ? "choose une option"
                              : ConsommationEau}

                            <div className="flex items-center gap-2">
                              {ConsommationEau == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {consommationeau.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setConsommationEau(index)}
                              className="flex justify-between items-center"
                            >
                              {index}
                            </DropdownMenuItem>
                          ))}
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez les liqueds que vous consommez pour vous
                      hydrater
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesLiqueds}
                      className="w-full relative "
                      onChange={handleLesLiqueds}
                    >
                      {lesLiqueds.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <div className="mt-4">
                    <Label className="mb-2">
                      Combien de temps dormez-vous habituellement ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {TempDormi == "" ? "choose un option" : TempDormi}
                            <div className="flex items-center gap-2">
                              {TempDormi == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {tempdormi.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setTempDormi(index)}
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
                      Avez-vous de restrictions alimentaires ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {RestrictionAlim == ""
                              ? "choose un option"
                              : RestrictionAlim}
                            <div className="flex items-center gap-2">
                              {RestrictionAlim == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {restrictionalim.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setRestrictionAlim(index)}
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
              ) : Step == 6 ? (
                <div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez <span className="underline">les ligumes</span>{" "}
                      que vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesLigumes}
                      className="w-[350px] relative "
                      onChange={handleLesLigumes}
                    >
                      {lesLegumes.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez{" "}
                      <span className="underline">les Pains et cereales</span>{" "}
                      que vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesPains}
                      className=" w-[350px] bg-white "
                      onChange={handleLesPains}
                    >
                      {lesPains.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez <span className="underline">Les poissons</span>{" "}
                      que vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesPoisson}
                      className=" w-[350px] bg-white "
                      onChange={handleLesPoisson}
                    >
                      {lesPoisson.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez{" "}
                      <span className="underline">Les Produits laitiers</span>{" "}
                      que vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesLaitiers}
                      className=" w-[350px] bg-white "
                      onChange={handleLesLaitiers}
                    >
                      {lesLaitiers.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez{" "}
                      <span className="underline">Les viands et oeufs</span> que
                      vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesViands}
                      className=" w-[350px] bg-white "
                      onChange={handleLesViands}
                    >
                      {lesViands.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex w-full  flex-col gap-2 mt-5">
                    <Label className="">
                      Choisissez{" "}
                      <span className="underline">Les viands et oeufs</span> que
                      vous aimez
                    </Label>
                    <Select
                      placeholder="Hello"
                      size="sm"
                      radius="sm"
                      color="primary"
                      variant="bordered"
                      selectionMode="multiple"
                      selectedKeys={LesFruites}
                      className=" w-[350px] bg-white "
                      onChange={handleLesFruites}
                    >
                      {lesFruites.map((index) => (
                        <SelectItem className="" key={index} value={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              ) : Step == 7 ? (
                <div>
                  <div className="mt-4">
                    <Label className="mb-2">
                      Souffrez-vous de l&apos;un des problemes medicaux suivants
                      ?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <Button
                          className="w-full flex justify-between"
                          variant="outline"
                        >
                          <div className="flex justify-between w-full items-center">
                            {ProblemeMedicaux == ""
                              ? "choose un option"
                              : ProblemeMedicaux}
                            <div className="flex items-center gap-2">
                              {ProblemeMedicaux == "" ? null : (
                                <Check
                                  size={15}
                                  className="bg-green-500 p-0.5 text-white rounded-sm "
                                />
                              )}

                              <ChevronDown size={15} />
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[350px]">
                        <ScrollArea className="w-full ">
                          {problemeMed.map((index) => (
                            <DropdownMenuItem
                              //@ts-ignore
                              onClick={() => setProblemeMedicaux(index)}
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

            {Step == TotalStep ? (
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

            {Step == TotalStep ? null : (
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
