import React from "react";
import styles from "./page.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  label?: string;
  name: string;
  rest: any;
  className?: string;
  autoComplete?: string;
}

const Input = ({
  type,
  placeholder,
  label,
  rest,
  name,
  className,
  autoComplete,
}: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
        className={className ?? styles.formInput}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Input;
