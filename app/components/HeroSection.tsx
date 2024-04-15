import { Button } from "@/components/ui/button";
import React from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
const HeroSection = () => {
  return (
    <div className="w-full bg-[url('/background.png')] bg-center bg-cover text-slate-950 py-32 relative">
      <div className=" pointer-events-none bg-gradient-to-t from-white via-transparent absolute top-0 right-0 w-full h-full to-white"></div>
      <div className="relative z-10">
        <div className="text-7xl max-w-3xl font-bold mx-auto text-center">
          GustaBenna pour votre <span className="text-slate-50">santé</span> et
          vos soins.
        </div>
        <div className="mt-7 w-full flex gap-2 justify-center items-center p-5">
          <SignInButton mode="modal">
            <Button>Se connecter</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant={"secondary"}>Créer un compte</Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
