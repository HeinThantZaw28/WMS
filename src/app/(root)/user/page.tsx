"use client";
import React from "react";
import { BlockProps } from "../admin/type";
import { useRouter } from "next/navigation";
import {
  AutoDelete,
  DeleteForever,
  DeleteOutline,
  PersonPin,
} from "@mui/icons-material";

const UserDashboard = () => {
  const router = useRouter();
  const userDashboard: BlockProps[] = [
    {
      id: 1,
      title: "Create Bin",
      icon: DeleteOutline,
      desc: "Create Bin for your green environment",
      url: "/user/create_bin",
    },
    {
      id: 2,
      title: "Total Bins",
      icon: AutoDelete,
      desc: "Your created bins",
      url: "/user/complain",
    },
    // {
    //   id: 3,
    //   title: "Complete Bins",
    //   icon: DeleteForever,
    //   desc: "You can check your completed bins",
    //   url: "",
    // },
    {
      id: 3,
      title: "Profile",
      icon: PersonPin,
      desc: "You can check or edit you profile",
      url: "/user/profile",
    },
  ];
  const directionHandler = (url: string) => {
    if (url !== "") router.push(url);
  };
  return (
    <>
      <div className="flex flex-col justify-start mt-2 ms-5 gap-5">
        <h1 className="text-black text-4xl">User Dashboard</h1>
        <div className="flex flex-wrap -m-4">
          {/*block */}
          {userDashboard?.map((item) => (
            <>
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
            </>
          ))}
          {/*end */}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
