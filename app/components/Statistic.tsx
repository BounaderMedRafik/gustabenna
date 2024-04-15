import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { SignUpButton } from "@clerk/nextjs";
const Statistic = () => {
  return (
    <div className=" max-w-2xl mx-auto flex items-center py-28">
      <div className="text-slate-950 p-10">
        <div className="text-xl font-bold">
          GustaBenna is used by many people around the world to track their
          health.
        </div>
        <div className="text-sm mt-3">
          Alot of changements happened throught out the year that made
          artificial intilligence get into every field, one of the fields is
          nuetritions, Here it come the job of{" "}
          <span className="underline underline-offset-4">GustaBenna</span>
        </div>
        <div className="mt-7">
          <SignUpButton mode="modal">
            <Button
              className="flex items-center justify-center gap-2"
              size={"sm"}
            >
              Start Now <ArrowRight size={15} />
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
