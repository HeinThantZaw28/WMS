import React from "react";
import { BlockProps } from "./type";

const AdminDashboard = () => {
  const expBlocks: BlockProps[] = [
    { id: 1, title: "Text 1", icon: "", desc: "Hello this is first text" },
    { id: 2, title: "Text 2", icon: "", desc: "Hello this is second text" },
    { id: 3, title: "Text 3", icon: "", desc: "Hello this is third text" },
    { id: 4, title: "Text 4", icon: "", desc: "Hello this is fourth text" },
    { id: 5, title: "Text 5", icon: "", desc: "Hello this is fifth text" },
  ];
  return (
    <div className="flex flex-col justify-start mt-2 ms-5 gap-5">
      <h1 className="text-primary text-4xl">Admin Dashboard</h1>
      <div className="flex flex-wrap -m-4">
        {/*block */}
        {expBlocks?.map((item: BlockProps) => (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={item.id}>
            <div className="border border-gray-200 p-6 rounded-lg bg-primary hover:bg-tertirary">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
