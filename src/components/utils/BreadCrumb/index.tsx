"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const pathName = usePathname();
  let splitPathName;
  if (pathName !== "/") {
    splitPathName = pathName.split("/");
    splitPathName.shift();
  }

  return (
    <>
      <div className="flex w-full items-center py-2">
        <ul className="flex items-center gap-2">
          {splitPathName ? (
            splitPathName?.map((item, i) => (
              <li className="flex items-center gap-1" key={i}>
                <p className="text-md font-mono">{item}</p>
                <p className="tex-sm">{`>`}</p>
              </li>
            ))
          ) : (
            <li className="flex items-center gap-1">
              <p className="text-md font-mono">home</p>
              <p className="tex-sm">{`>`}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
