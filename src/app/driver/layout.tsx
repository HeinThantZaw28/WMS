// import { DriverRoleProvider } from "@/context/driverContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <DriverRoleProvider> */}
        <div>{children}</div>
      {/* </DriverRoleProvider> */}
    </>
  );
};

export default layout;
