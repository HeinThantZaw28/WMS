import React from "react";
import { TextAreaProps } from "./type";

const TextArea = ({
  className,
  rows,
  cols,
  placeholder,
  children,
  rest,
}: TextAreaProps) => {
  return (
    <textarea
      className={className}
      rows={rows ?? 5}
      cols={cols ?? 6}
      placeholder={placeholder}
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
