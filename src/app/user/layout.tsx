import React from "react";
// import { UserRoleProvider } from "@/context/userContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <UserRoleProvider> */}
      <div className="px-4 py-2">{children}</div>
      {/* </UserRoleProvider> */}
    </>
  );
};

export default layout;
