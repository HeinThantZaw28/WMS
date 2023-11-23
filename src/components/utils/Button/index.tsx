import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { ButtonProps } from "./type";

const Button = ({ type, onClick, url, title, disabled, className }: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={className ?? styles.defaultBtn}
        onClick={onClick}
      >
        {url ? <Link href={url}>{title}</Link> : title}
      </button>
    </>
  );
};

export default Button;
