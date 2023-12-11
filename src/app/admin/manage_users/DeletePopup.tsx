import { Button, Label } from "@/components/utils";
import Modal from "@/components/utils/Modal";
import TextArea from "@/components/utils/TextArea";
import React from "react";
import { useForm } from "react-hook-form";

const DeletePopup = ({ isVisible, onClose, onSubmit }: any) => {
  const defaultValues = {
    rejectReasons: "",
  };
  const { register, handleSubmit, formState, control, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Label>Are you sure to Delete?</Label>
        <TextArea
          className={`px-5 py-3 resize-none ${
            errors.rejectReasons
              ? "placeholder-red-500 border border-red-500"
              : "text-black border border-black"
          }  rounded-md font-sans text-lg`}
          rows={4}
          cols={5}
          placeholder={`${
            errors.rejectReasons
              ? errors.rejectReasons.message
              : "Enter Reject Reasons"
          }`}
          rest={{
            ...register("rejectReasons", {
              required: {
                message: "You need to enter reason for rejection",
                value: true,
              },
            }),
          }}
        />
        <Button
          type={"submit"}
          title={"Submit"}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        />
      </form>
    </Modal>
  );
};

export default DeletePopup;
