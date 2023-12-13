"use client";
import { Button } from "@/components/utils";
import Table from "@/components/utils/Table";
import { assignMockData } from "@/constants";
import { AssignApiInfo } from "@/constants/type";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";

const ManageAssign = () => {
  //table data
  const columnHelper = createColumnHelper<AssignApiInfo[]>();
  const [modalData, setModalData] = useState({
    isVisible: false,
    onSubmit: (data: any) => {
      // Handle form submission here
      console.log("Modal form data>>>", data);
      // Close the modal
      setModalData({ ...modalData, isVisible: false });
    },
  });

  const handleActionAssign = (id: string) => {
    console.log(id);
  };

  const columns = [
    columnHelper.accessor("sNo", {
      header: () => "S No",
    }),
    columnHelper.accessor("assignNumber", {
      header: () => "Assign Number",
    }),
    columnHelper.accessor("assignName", {
      header: "Assign Name",
    }),
    columnHelper.accessor("binName", {
      header: "Bin Name",
    }),
    columnHelper.accessor("assignBy", {
      header: "Assign By",
    }),
    columnHelper.accessor("assignTo", {
      header: "Assign To",
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          onClick={() => handleActionAssign((parseInt(row.id) + 1).toString())}
          title="Take Action"
          type="button"
          className="px-2 py-1 rounded-md bg-tertirary hover:bg-indigo-300 text-white"
        />
      ),
    }),
  ];
  return (
    <>
      <div className="overflow-x-auto shadow-lg sm:rounded-lg">
        <Table data={assignMockData} columns={columns} />
      </div>
    </>
  );
};

export default ManageAssign;
