"use client";
import { Button, DropDown, Label } from "@/components/utils";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Table from "@/components/utils/Table";
import { mockData } from "@/constants";
import { exampleTableData } from "@/constants/type";
import { createColumnHelper } from "@tanstack/react-table";
import { ASSIGNOPTIONS, ComplainProps } from "@/app/user/type";
import Input from "@/components/utils/Input";
import Modal from "@/components/utils/Modal";
import { AssignModalProps } from "../type";

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

const ManageBin = () => {
  const [filterStatus, setFilterStatus] = useState<exampleTableData[]>();
  const [modalData, setModalData] = useState({
    isVisible: false,
    onSubmit: (data: any) => {
      // Handle form submission here
      console.log("Modal form data>>>", data);
      // Close the modal
      setModalData({ ...modalData, isVisible: false });
    },
  });
  const options = [
    { value: ASSIGNOPTIONS.NOTASSIGN, label: "Not Assign" },
    { value: ASSIGNOPTIONS.ASSIGNED, label: "Assigned" },
    { value: ASSIGNOPTIONS.COMPLETED, label: "Completed" },
  ];

  //table data
  const columnHelper = createColumnHelper();

  const [selectedOption, setSelectedOption] = useState(null);
  const defaultValues: ComplainProps = {
    selectOptions: null,
    binNumber: "",
  };
  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<ComplainProps> = (data) => {
    console.log("myComplaindata>>>", data);
    setFilterStatus(
      data.selectOptions && data.binNumber
        ? mockData.filter(
            (item) =>
              item.Status === data.selectOptions.value &&
              item["Complain Number"] === data.binNumber
          )
        : data.selectOptions
        ? mockData.filter((item) => item.Status === data.selectOptions.value)
        : data.binNumber
        ? mockData.filter((item) => item["Complain Number"] === data.binNumber)
        : undefined
    );
  };

  const handleRejectBin = () => {};
  const handleAssignBin = () => {
    setModalData({ ...modalData, isVisible: true });
  };

  const columns = [
    columnHelper.accessor("S No", {
      header: () => "S No",
    }),
    columnHelper.accessor("Complain Number", {
      header: () => "Complain Number",
      // cell: ({ row }) => dayjs(row.id).format('YYYY-MM-DD'),
    }),
    columnHelper.accessor("Bin Name", {
      header: "Bin Name",
    }),
    columnHelper.accessor("Mobile Number", {
      header: "Mobile Number",
    }),
    columnHelper.accessor("Email", {
      header: "Email",
    }),
    columnHelper.accessor("Status", {
      header: "Status",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-3 items-center">
          <Button
            onClick={handleRejectBin}
            title="Reject"
            type="button"
            className="px-2 py-1 rounded-md bg-red-500 text-white"
          />
          <Button
            onClick={handleAssignBin}
            title="Assign"
            type="button"
            className="px-2 py-1 rounded-md bg-tertirary text-white"
          />
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <Label className="text-2xl font-bold text-black mb-5">
          Manage Complains
        </Label>
        <form
          className="w-full shadow-xl rounded-md px-4 py-2 flex gap-5 items-center border border-slate-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name="selectOptions"
            render={({ field }) => (
              <DropDown
                {...field}
                defaultValue={field.value || selectedOption} // Use field.value for defaultValue
                onChange={(value) => {
                  field.onChange(value); // Update form state
                  setSelectedOption(value); // Update local state if needed
                }}
                options={options}
                placeholder="Select Status"
                className="w-[250px]"
              />
            )}
          />
          <Input
            name=""
            type={"text"}
            placeholder={`Complain No`}
            rest={{
              ...register("binNumber"),
            }}
            className={`px-5 py-1 text-black rounded-md font-sans text-lg border border-slate-200 active:outline outline-blue-400`}
          />
          <Button
            type={"submit"}
            title={"Search"}
            className="px-4 py-2 rounded-md text-white bg-tertirary hover:bg-indigo-300"
          />
        </form>
        <div className="w-full overflow-x-auto shadow-lg sm:rounded-lg">
          <Table data={filterStatus ?? mockData} columns={columns} />
        </div>
      </div>
      <OpenModal
        isVisible={modalData.isVisible}
        onClose={() => setModalData({ ...modalData, isVisible: false })}
        onSubmit={modalData.onSubmit}
      />
    </>
  );
};

export default ManageBin;
