"use client";
import React from "react";
import { BlockProps } from "./type";
import {
  Delete,
  DirectionsCar,
  ContactMail,
  PersonPin,
  ManageSearch,
  PersonAdd,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  const expBlocks: BlockProps[] = [
    {
      id: 1,
      title: "Total Bins",
      icon: Delete,
      desc: "You can see how many bins exist",
      url: "/admin/manage_bin",
    },
    {
      id: 2,
      title: "Drivers",
      icon: DirectionsCar,
      desc: "Quick Access for manage Driver Page",
      url: "/admin/manage_driver",
    },
    {
      id: 3,
      title: "Registered Users",
      icon: PersonAdd,
      desc: "Hello this is fourth text",
      url: "/admin/manage_users",
    },
    {
      id: 4,
      title: "Profile",
      icon: PersonPin,
      desc: "You can check or edit you profile",
      url: "/admin/profile",
    },
  ];
  const directionHandler = (url: string) => {
    if (url !== "") router.push(url);
  };
  return (
    <div className="flex flex-col justify-start mt-2 ms-5 gap-5">
      <h1 className="text-black text-4xl">Admin Dashboard</h1>
      <div className="flex flex-wrap -m-4">
        {/*block */}
        {expBlocks?.map((item: BlockProps) => (
          <div
            className="xl:w-1/3 md:w-1/2 p-4"
            key={item.id}
            onClick={() => directionHandler(item.url as string)}
          >
            <div className="border border-gray-200 p-6 rounded-lg bg-primary hover:bg-tertirary">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {item.icon && <item.icon />}
              </div>
              <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base">{item.desc}</p>
            </div>
          </div>
        ))}
        {/*end */}
      </div>
    </div>
  );
};

export default AdminDashboard;
