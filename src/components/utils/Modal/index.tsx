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
      onClick={handleClose}
    >
      <div className="flex w-[500px] flex-col gap-3 bg-white px-4 py-2 rounded-md">
        {children}
        <Button
          type={undefined}
          title={"Close"}
          onClick={() => onClose()}
          className="px-4 py-2 rounded-md text-primary bg-tertirary hover:bg-indigo-300 hover:text-slate-500"
        />
      </div>
    </div>
  );
};

export default Modal;
