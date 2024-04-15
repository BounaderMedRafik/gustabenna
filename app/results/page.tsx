"use client";
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import toast from "react-hot-toast";
const page = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.from("Users").select();

      if (error) {
        toast.error("could not fetch user :<");
        setUser(null);
      }
    };
  }, []);
  return <div>{user}</div>;
};

export default page;
