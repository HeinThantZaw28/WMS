"use client";
import { Button, Label } from "@/components/utils";
import Input from "@/components/utils/Input";
import { ProfileProps } from "@/constants/type";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Profile = () => {
  const defaultValues: ProfileProps = {
    fullName: "",
    userName: "",
    email: "",
    address: "",
    contactInfo: "",
    registrationData: "",
  };
  const { register, formState, handleSubmit } = useForm({
    defaultValues,
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<ProfileProps> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col w-full bg-white shadow-xl rounded-lg px-4 py-2 gap-5">
        <Label className="text-2xl font-bold font-sans text-secondary">
          Admin Profile
        </Label>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type={"text"}
            label="Full Name"
            id="fullName"
            placeholder={`${errors.fullName ? errors.fullName.message : ""}`}
            name={"fullName"}
            rest={{
              ...register("fullName", {
                required: { message: "Full Name is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.fullName
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <Input
            type={"text"}
            name={"userName"}
            id="userName"
            label="User Name"
            disabled={true}
            rest={{
              ...register("userName", {
                required: { message: "User Name is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 text-black disabled:bg-slate-200`}
          />
          <Input
            type={"text"}
            name={"email"}
            id="email"
            label="Email"
            placeholder={`${errors.email ? errors.email.message : ""}`}
            rest={{
              ...register("email", {
                required: { message: "Email is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.email
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <Input
            type={"text"}
            name={"contactInfo"}
            id="contactInfo"
            label="Contact Info"
            placeholder={`${
              errors.contactInfo ? errors.contactInfo.message : ""
            }`}
            rest={{
              ...register("contactInfo", {
                required: {
                  message: "Contact Number is required",
                  value: true,
                },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.contactInfo
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <Input
            disabled={true}
            type={"text"}
            name={"registrationData"}
            label="Registration Date"
            id="registrationDate"
            placeholder={`${
              errors.registrationData ? errors.registrationData.message : ""
            }`}
            rest={{
              ...register("registrationData", {
                required: {
                  message: "Registration Date is required",
                  value: true,
                },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 disabled:bg-slate-200 text-black`}
          />
          <Button
            type={"submit"}
            title={"Update"}
            className="px-4 py-2 bg-tertirary text-white rounded-md"
          />
        </form>
      </div>
    </>
  );
};

export default Profile;
