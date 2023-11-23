"use client";
import { Button, DropDown, Label } from "@/components/utils";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ASSIGNOPTIONS, ComplainProps } from "../type";
import Table from "@/components/utils/Table";
import { mockData } from "@/constants";
import { exampleTableData } from "@/constants/type";
import { createColumnHelper } from "@tanstack/react-table";

const MyComplain = () => {
  const [filterStatus, setFilterStatus] = useState<exampleTableData[]>();
  const options = [
    { value: ASSIGNOPTIONS.NOTASSIGN, label: "Not Assign" },
    { value: ASSIGNOPTIONS.ASSIGNED, label: "Assigned" },
    { value: ASSIGNOPTIONS.COMPLETED, label: "Completed" },
  ];

  //table data
  const columnHelper = createColumnHelper();
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
    // columnHelper.display({
    //   id: 'status',
    //   header: 'Status',
    //   cell: ({ row }) => <Badge badgeName={'enable'} badgeType={BadgeType.Success} />,
    // }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="">
          <Button
            onClick={() => {}}
            title="View"
            type="button"
            className="px-2 py-1 rounded-md bg-tertirary text-white"
          />
        </div>
      ),
    }),
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const defaultValues: ComplainProps = {
    selectOptions: null,
  };
  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit: SubmitHandler<ComplainProps> = (data) => {
    console.log("myComplaindata>>>", data);

    setFilterStatus(
      mockData.filter((item) => item.Status === data.selectOptions.value)
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <Label className="text-2xl font-bold text-black mb-5">My Complain</Label>
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
  );
};

export default MyComplain;
