import Link from "next/link";
import React from "react";

const MyLogo = () => {
  return (
    <Link href="/">
      <div className="px-4 py-1 hover:bg-slate-50 rounded-md font-semibold ">
        Gusta Benna
      </div>
    </Link>
  );
};

export default MyLogo;
