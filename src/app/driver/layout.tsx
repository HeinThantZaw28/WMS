// import { DriverRoleProvider } from "@/context/driverContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <DriverRoleProvider> */}
      <div className="px-4 py-2">{children}</div>
      {/* </DriverRoleProvider> */}
    </>
  );
};

export default layout;
