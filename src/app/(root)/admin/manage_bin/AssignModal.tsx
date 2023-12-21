"use client";
import { Button, DropDown, Label } from "@/components/utils";
import Input from "@/components/utils/Input";
import Modal from "@/components/utils/Modal";
import { Controller, useForm } from "react-hook-form";
import { AssignModalProps } from "../type";
import { useState } from "react";

const OpenModal = ({ isVisible, onClose, onSubmit }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 1, label: "Kyaw Mg" },
    { value: 2, label: "Kyaw Lwin" },
    { value: 3, label: "Kyaw Zaw Linn" },
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
              defaultValue={field.value || "Assign To"} // Use field.value for defaultValue
              onChange={(value) => {
                field.onChange(value); // Update form state
                setSelectedOption(value); // Update local state if needed
              }}
              options={options}
              placeholder="Assign To"
              className="w-full"
            />
          )}
        />
        <Input
          type={"date"}
          label="Assign Date"
          id="assignDate"
          placeholder={`Assign Date`}
          name={"assignDate"}
          rest={{
            ...register("assignDate", {
              required: { message: "Assign Date is required", value: true },
            }),
          }}
          className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
            errors.assignDate ? " border border-red-500" : "text-black"
          }`}
        />
        {errors.assignDate ? <span>{errors.assignDate.message}</span> : null}
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
