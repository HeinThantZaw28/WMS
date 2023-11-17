import React, { useId } from "react";
import ReactSelect from "react-select";
import styles from "./page.module.css";

interface DropdownProps {
  label: string;
  options: any;
  rest: any;
  isMulti?: boolean;
  onChange?: (selectedOption: any) => any;
  autoFocus?: boolean;
  className?: string;
  defaultValue: string;
}

export const DropDown = ({
  label,
  options,
  rest,
  isMulti,
  onChange,
  autoFocus,
  className,
  defaultValue,
}: DropdownProps) => (
  <div className="flex gap-3 items-center">
    <ReactSelect
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
      value={{ label: "Select Options"}}
      autoFocus={autoFocus}
      instanceId={useId()}
    />
  </div>
);
