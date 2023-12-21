"use client";
import { Button, DropDown, Label } from "@/components/utils";
import Input from "@/components/utils/Input";
import Modal from "@/components/utils/Modal";
import { Controller, useForm } from "react-hook-form";

import { useState } from "react";
import { AssignStatus } from "@/constants/type";
import { AssignModalProps } from "@/app/(root)/admin/type";

const OpenModal = ({ isVisible, onClose, onSubmit }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: AssignStatus.PENDING, label: "Pending" },
    { value: AssignStatus.ONGOING, label: "Ongoing" },
    { value: AssignStatus.SUCCESS, label: "Success" },
  ];
  const defaultValues: AssignModalProps = {
    selectOptions: null,
    assignDate: new Date(),
  };
  const { register, handleSubmit, formState, control, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  const handleReset = () => {
    onClose();
    reset();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Label>Assign Form</Label>
        <Controller
          control={control}
          name="selectOptions"
          render={({ field }) => (
            <DropDown
              {...field}
              defaultValue={field.value || "Assign To"}
              onChange={(value) => {
                field.onChange(value);
                setSelectedOption(value);
              }}
              options={options}
              placeholder="Status"
              className="w-full"
            />
          )}
        />

        <div className="flex gap-3">
          <Button
            type={"button"}
            title={"Cancel"}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleReset}
          />
          <Button
            type={"submit"}
            title={"Submit"}
            className="px-4 py-2 bg-tertirary text-white rounded-md"
          />
        </div>
      </form>
    </Modal>
  );
};

export default OpenModal;
