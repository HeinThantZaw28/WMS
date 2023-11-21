"use client";
import { Button, Label } from "@/components/utils";
import Modal from "@/components/utils/Modal";
import React, { useState } from "react";

const SamplePage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        type={"button"}
        title={"Open Modal"}
        onClick={() => setOpenModal(true)}
        className="px-4 py-2 rounded-md bg-tertirary ms-5 mt-5"
      />
      <Modal isVisible={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col gap-3">
          <Label className="text-center font-bold text-xl">User Detail</Label>
          <div className="flex justify-between items-center w-full">
            <Label className="flex flex-1">User Name</Label>
            <Label className="flex flex-1">Hein Thant</Label>
          </div>
          <div className="flex justify-between items-center w-full">
            <Label className="flex flex-1">Email</Label>
            <Label className="flex flex-1">hein@gmail.com</Label>
          </div>
          <div className="flex justify-between items-center w-full">
            <Label className="flex flex-1">Contact Info</Label>
            <Label className="flex flex-1">09764202917</Label>
          </div>
          <div className="flex justify-between items-center w-full">
            <Label className="flex flex-1">Address</Label>
            <Label className="flex flex-1">
              No.579, Thiri Myaing 9th St, Hlaing Tsp, Yangon.
            </Label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SamplePage;
