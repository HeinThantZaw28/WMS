import React from "react";
// import { AdminRoleProvider } from "@/context/adminContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <AdminRoleProvider> */}
        <div className="">{children}</div>
      {/* </AdminRoleProvider> */}
    </>
  );
};

export default layout;
