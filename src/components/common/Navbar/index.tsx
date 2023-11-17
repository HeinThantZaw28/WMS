"use client";
import React, { useEffect, useState } from "react";
import { BreadCrumb, Button, Toggle } from "@/components/utils";
import { Dashboard, FormatIndentIncrease } from "@mui/icons-material";
import Link from "next/link";
import { getMenuByRole } from "@/constants";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  // const {filteredMenu}=useAuth();
  const [open, setOpen] = useState(false);

  const userRole = "admin";
  const menuItems = getMenuByRole(userRole);

  const sideBarOpenHandler = () => {
    setOpen(!open);
  };


  return (
    <>
      <div className="w-full flex">
        <div
          className={`bg-slate-300 h-screen z-10 px-4 fixed shadow-xl ${
            open ? "w-[20rem]" : "w-16"
          } duration-500`}
        >
          <div className="flex justify-between items-center py-3">
            {open ? (
              <div className="font-bold text-2xl font-sans">WMS</div>
            ) : (
              ""
            )}
            <button
              onClick={sideBarOpenHandler}
              className={`${!open && "ml-2"}`}
            >
              <FormatIndentIncrease className="cursor-pointer w-26 h-26" />
            </button>
          </div>
          <div className="mt-4 relative">
            <div
              className={`flex flex-col gap-4 relative mt-4 ${
                open && "h-[calc(100vh-56px)] overflow-y-auto"
              } `}
            >
              {menuItems.map((item, i) => (
                <Link
                  href={item.url}
                  className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-400 rounded-md group"
                  key={i}
                >
                  <div>{React.createElement(item.icon ?? Dashboard)}</div>
                  <h2
                    style={{
                      ...(open && { transitionDelay: `${i + 2}00ms` }),
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "overflow-hidden translate-x-28 opacity-0"
                    }`}
                  >
                    {item.label}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    {item.label}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ml-[64px] relative">
          <nav className="w-[97%] bg-slate-400 flex flex-col py-2 px-4 h-[70px] fixed z-10">
            <div className="flex justify-between items-center h-[50%]">
              <div className={`font-bold text-2xl font-sans`}>
                {!open ? "WMS" : ""}
              </div>
              {/* Dark Mode  */}
              <div className="flex justify-center items-center">
                <Toggle />
              </div>
            </div>
            <div className="border-t border-gray-600  h-[50%]">
              <BreadCrumb />
            </div>
          </nav>
          <main className="h-[200vh] bg-sky-200">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Navbar;
