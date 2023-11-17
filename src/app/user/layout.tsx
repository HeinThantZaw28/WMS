import React from "react";
// import { UserRoleProvider } from "@/context/userContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <UserRoleProvider> */}
        <div>{children}</div>
      {/* </UserRoleProvider> */}
    </>
  );
};

export default layout;
