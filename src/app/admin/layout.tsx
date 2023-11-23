import React from "react";
// import { AdminRoleProvider } from "@/context/adminContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <AdminRoleProvider> */}
        <div className="px-4 py-2">{children}</div>
      {/* </AdminRoleProvider> */}
    </>
  );
};

export default layout;
