import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { SignUpButton } from "@clerk/nextjs";
const Statistic = () => {
  return (
    <div className=" max-w-2xl mx-auto flex items-center py-28">
      <div className="text-slate-950 p-10">
        <div className="text-xl font-bold">
          GustaBenna est utilisé par de nombreuses personnes dans le monde pour
          suivre leur santé.
        </div>
        <div className="text-sm mt-3">
          Beaucoup de changements ont eu lieu tout au long de l&apos;année qui
          ont permis à l&apos;intelligence artificielle de s&apos;introduire
          dans tous les domaines, dont l&apos;un est la nutrition. C&apos;est là
          que le rôle de{" "}
          <span className="underline underline-offset-4">GustaBenna</span> entre
          en jeu.
        </div>
        <div className="mt-7">
          <SignUpButton mode="modal">
            <Button
              className="flex items-center justify-center gap-2"
              size={"sm"}
            >
              Commencer maintenant <ArrowRight size={15} />
            </Button>
          </SignUpButton>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <img src="/statistic.svg" />
      </div>
    </div>
  );
};

export default Statistic;
