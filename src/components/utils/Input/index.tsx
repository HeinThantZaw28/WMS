import React from "react";
import styles from "./page.module.css";
import { Label } from "..";

interface InputProps {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
  rest: any;
  className?: string;
  autoComplete?: string;
  style?: any;
  multi?: boolean;
  disabled?: boolean;
  id?: string;
  labelClassName?: string;
}

const Input = ({
  type,
  placeholder,
  label,
  rest,
  name,
  className,
  autoComplete,
  style,
  multi,
  disabled,
  id,
  labelClassName,
}: InputProps) => {
  return (
    <>
      {label && (
        <Label htmlFor={id} className={labelClassName ?? ""}>
          {label}
        </Label>
      )}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
        className={className ?? styles.formInput}
        autoComplete={autoComplete}
        style={style}
        multiple={multi}
      />
    </>
  );
};

export default Input;
