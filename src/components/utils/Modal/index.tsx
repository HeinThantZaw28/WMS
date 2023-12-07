"use client";
import React from "react";
import { Button, Label } from "..";
import { ModalProps } from "./type";

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    if (e.target.value === "wrapper") onClose();
  };
  return (
    <div
      className="fixed flex inset-0 bg-black bg-opacity-10 justify-center h-screen items-center backdrop-blur-sm"
      id="wrapper"
      onClick={(e) => handleClose(e)}
    >
      <div className="flex w-[500px] flex-col gap-3 bg-white px-4 py-2 rounded-md">
        <Button
          type={undefined}
          title={"X"}
          onClick={() => onClose()}
          className="self-end ps-2 pr-5 py-2 rounded-md text-black border border-black hover:bg-red-500 hover:text-slate-500 w-4 text-left"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
