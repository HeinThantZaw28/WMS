"use client";
import React, { useEffect } from "react";
import { Navbar } from "..";

// import { AuthProvider, useAuth } from "@/context/authContext";
// import Login from "@/app/login/page";
import { usePathname, useRouter } from "next/navigation";

const Container = ({ children }: { children: React.ReactNode }) => {
  // const { isAuthenticated } = useAuth();

  // const login = pathName === "/login";
  // const register = pathName === "/register";
  return (
    <>
      <Navbar>
        <div>{children}</div>
      </Navbar>
    </>
  );
};

export default Container;
