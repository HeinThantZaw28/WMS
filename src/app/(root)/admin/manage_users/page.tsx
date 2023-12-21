"use client";
import { Button } from "@/components/utils";
import Image from "next/image";
import React, { useState } from "react";
import { UserListProps } from "../type";
import UserDetail from "./UserDetail";
import DeletePopup from "./DeletePopup";

const ManageUser = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState({
    isVisible: false,
    onSubmit: (data: any) => {
      // Handle form submission here
      console.log("Modal form data>>>", data);
      // Close the modal
      setModalData({ ...modalData, isVisible: false });
    },
  });
  const userLists: UserListProps[] = [
    { id: "1", name: "Hein", regDate: "12.10.2023", img: "" },
    { id: "2", name: "Thant", regDate: "12.10.2023", img: "" },
    { id: "3", name: "Zaw", regDate: "12.10.2023", img: "" },
    { id: "4", name: "Andres", regDate: "12.10.2023", img: "" },
  ];

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleDeleteModal = () => {
    setModalData({ ...modalData, isVisible: true });
  };

  return (
    <>
      <div className="flex flex-col justify-start mt-2 ms-5 gap-5">
        <h1 className="text-black text-4xl">User Management</h1>
        {/*Content */}
        <div className="flex flex-wrap m-2">
          {userLists?.map((info: UserListProps) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={info.id}>
              <div className="h-[100px] flex items-center bg-primary border p-4 rounded-lg group">
                <>
                  <div className="w-16 h-16 bg-secondary object-cover object-center flex-shrink-0 rounded-full mr-4 group-hover:hidden">
                    {/* <Image fill alt="driver image" src={info.img} /> */}
                  </div>
                  <div className="flex-grow group-hover:hidden">
                    <h2 className="text-gray-900 title-font font-bold">
                      {info.name}
                    </h2>
                    <p className="text-gray-900">{info.regDate}</p>
                  </div>
                </>
                <div className="w-full h-full opacity-0 group-hover:opacity-100 ">
                  <Button
                    type={"button"}
                    title={"Detail"}
                    className="h-full w-[50%] bg-primary hover:bg-tertirary hover:text-white rounded-l-lg"
                    onClick={handleOpenModal}
                  />
                  <Button
                    type={"button"}
                    title={"Delete"}
                    className="h-full w-[50%] bg-primary hover:bg-red-500 hover:text-white rounded-r-lg"
                    onClick={handleDeleteModal}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          type={undefined}
          title={"Add User"}
          className="w-80 h-20 rounded-lg bg-tertirary hover:bg-opacity-80 text-black text-xl"
          url="/admin/manage_users/add_user"
        />
      </div>
      <UserDetail isVisible={openModal} onClose={() => setOpenModal(false)} />
      <DeletePopup
        isVisible={modalData.isVisible}
        onClose={() => setModalData({ ...modalData, isVisible: false })}
        onSubmit={modalData.onSubmit}
      />
    </>
  );
};

export default ManageUser;
