"use client";
import { Button, Label } from "@/components/utils";
import Modal from "@/components/utils/Modal";
import Table from "@/components/utils/Table";
import { mockData } from "@/constants";
import React, { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";

const SamplePage = () => {
  const [openModal, setOpenModal] = useState(false);
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
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => {}}
            title="Delete"
            type="button"
            className="px-2 py-1 rounded-md bg-red-500 text-white"
          />
          <Button
            onClick={() => {}}
            title="Approve"
            type="button"
            className="px-2 py-1 rounded-md bg-tertirary text-white"
          />
        </div>
      ),
    }),
  ];
  return (
    <>
      <Button
        type={"button"}
        title={"Open Modal"}
        onClick={() => setOpenModal(true)}
        className="px-4 py-2 rounded-md bg-tertirary ms-5 my-5"
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

      {/*Table */}
      <div className="w-full overflow-x-auto shadow-lg sm:rounded-lg px-5">
        <Table data={mockData} columns={columns} />
      </div>
    </>
  );
};

export default SamplePage;
