"use client";
import React from "react";
import styles from "./page.module.css";
import { LabelProps } from "./type";

const Label = ({ htmlFor, className, children }: LabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles[className ?? "defaultLabel"]}>
        {children}
      </label>
    </>
  );
};

export default Label;
