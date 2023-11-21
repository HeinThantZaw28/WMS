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

const AdminDashboard = () => {
  const expBlocks: BlockProps[] = [
    {
      id: 1,
      title: "Total Bins",
      icon: Delete,
      desc: "You can see how many bins exist",
      url: "",
    },
    {
      id: 2,
      title: "Drivers",
      icon: DirectionsCar,
      desc: "Quick Access for manage Driver Page",
      url: "",
    },
    {
      id: 3,
      title: "Complain Users",
      icon: ContactMail,
      desc: "Hello this is third text",
      url: "",
    },
    {
      id: 4,
      title: "Reg Users",
      icon: PersonAdd,
      desc: "Hello this is fourth text",
      url: "",
    },
    {
      id: 5,
      title: "Search",
      icon: ManageSearch,
      desc: "You can search drivers, bins and users",
      url: "",
    },
    {
      id: 6,
      title: "Profile",
      icon: PersonPin,
      desc: "You can check or edit you profile",
      url: "",
    },
  ];
  return (
    <div className="flex flex-col justify-start mt-2 ms-5 gap-5">
      <h1 className="text-black text-4xl">Admin Dashboard</h1>
      <div className="flex flex-wrap -m-4">
        {/*block */}
        {expBlocks?.map((item: BlockProps) => (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={item.id}>
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
