import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const MyInputField = ({ title, type, placeholder, value, onChange }: any) => {
  return (
    <div className="mt-3">
      <Label htmlFor={title} className=" capitalize">
        {title}
      </Label>
      <Input
        className="mt-1"
        id={title}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default MyInputField;
