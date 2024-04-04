"use client";
import React from "react";
import MyLogo from "./MyLogo";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { SignUpButton } from "@clerk/clerk-react";

const Navigationbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full border-b relative z-10 bg-white/85 backdrop-blur-md">
      <div className="container mx-auto border-x p-5 flex justify-between items-center">
        <MyLogo />
        <div className=" flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Log in</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="outline">
                <div className="flex justify-center items-center gap-2">
                  Create account <MoveUpRight size={14} />
                </div>
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            {pathname == "/questionnaire" ? null : (
              <Button variant="link">
                <a href="/questionnaire">Questionnaire</a>
              </Button>
            )}
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
