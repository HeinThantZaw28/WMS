import React, { useId } from "react";
import ReactSelect from "react-select";
import styles from "./page.module.css";

interface DropdownProps {
  label?: string;
  options?: any;
  rest?: any;
  isMulti?: boolean;
  onChange?: (selectedOption: any) => any;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string | null;
  id?: string;
  onBlur?: () => void;
  placeholder?: string;
}

export const DropDown = ({
  label,
  options,
  rest,
  isMulti,
  className,
  defaultValue,
  onChange,
  id,
  onBlur,
  placeholder,
}: DropdownProps) => (
  <div className="flex gap-3 items-center">
    {/* <ReactSelect
      onBlur={onBlur}
      id={id}
      className={`${className ?? styles["defaultStyle"]} `}
      {...rest}
      isMulti={isMulti || false}
      options={options}
      placeholder={label}
      defaultValue={defaultValue}
      onChange={(selectedOption) => {
        rest.onChange(selectedOption);
        if (onChange) {
          onChange(selectedOption);
        }
      }}
      value={{ label: "Select Options" }}
      autoFocus={autoFocus}
      instanceId={useId()}
    /> */}
    <ReactSelect
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      className={className}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  </div>
);
