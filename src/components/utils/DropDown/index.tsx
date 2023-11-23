/* eslint-disable react/display-name */
"use client";
import React, { forwardRef, useId } from "react";
import ReactSelect from "react-select";

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

export const DropDown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
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
    }: DropdownProps,
    ref
  ) => (
    <div ref={ref} className="flex gap-3 items-center">
      <ReactSelect
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        className={className}
        placeholder={placeholder}
        isMulti={isMulti}
      />
    </div>
  )
);
