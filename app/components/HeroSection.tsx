"use client";
import React from "react";
import Image from "next/image";
import HeroSecBG from "@/public/HeroSecBG.svg";
import { SignUpButton } from "@clerk/clerk-react";
const HeroSection = () => {
  return (
    <div className="bg-slate-50 min-h-[85vh] flex justify-center items-center">
      <div className="relative z-10 ">
        <div className="text-7xl font-bold">Gusta Benna Prototype</div>
        <div className="mt-2">
          let's{" "}
          <SignUpButton mode="modal">
            <span className="text-green-500  hover:underline cursor-pointer">
              Start Now
            </span>
          </SignUpButton>{" "}
          This prototyp and see how it goes
        </div>
      </div>
      <Image
        loading="lazy"
        placeholder="empty"
        quality={100}
        src={HeroSecBG}
        layout="fill"
        objectFit="cover"
        alt="background"
      />
    </div>
  );
};

export default HeroSection;
