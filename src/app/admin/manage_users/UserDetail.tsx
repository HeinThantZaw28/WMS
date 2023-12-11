import { Label } from "@/components/utils";
import Modal from "@/components/utils/Modal";
import React from "react";

const UserDetail = ({ isVisible, onClose, onSubmit }: any) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Label className="font-bold font-mono text-2xl text-center">
        User Detail
      </Label>
      <div className="flex items-center justify-around gap-4">
        <div className="flex items-start flex-col gap-2">
          <Label>User Name</Label>
          <Label>Address</Label>
          <Label>Contact Info</Label>
          <Label>Email</Label>
          <Label>FullName</Label>
        </div>
        <div className="flex items-start flex-col gap-2">
          <Label>heinthant</Label>
          <Label>Sanfransisco</Label>
          <Label>0987654345678</Label>
          <Label>heinthantzaw52@gamil.com</Label>
          <Label>Hein Thant Zaw</Label>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetail;
