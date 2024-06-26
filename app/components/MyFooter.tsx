import React from "react";
import MyLogo from "./MyLogo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  {
    name: "Politique et Accord",
    linkTo: "/politique-accord",
  },
  {
    name: "À propos de nous",
    linkTo: "/a-propos",
  },
];

const MyFooter = () => {
  return (
    <div className="w-full border-t py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <MyLogo />
        </div>
        <div>
          <ul className="flex items-center gap-2">
            {links.map((item) => (
              <li key={item.name}>
                <Button variant={"outline"}>
                  <Link href={item.linkTo}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
