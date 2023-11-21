"use client";
import { Button, Label } from "@/components/utils";
import Input from "@/components/utils/Input";
import TextArea from "@/components/utils/TextArea";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterformProps } from "../../type";

const UserCreate = () => {
  const searchParams = useSearchParams();
  const fromPage = searchParams.get("fromPage");
  const defaultValues = {
    userName: "",
    address: "",
    contactInfo: "",
    email: "",
    password: "",
  };
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: defaultValues,
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<RegisterformProps> = (data) => {
    console.log("user data", data);
  };

  const driverOnSubmit: SubmitHandler<RegisterformProps> = (data) => {
    console.log("driver data", data);
  };

  return (
    <>
      <div className="flex items-center h-[80vh] justify-center">
        <form
          onSubmit={handleSubmit(
            fromPage === "add_driver" ? driverOnSubmit : onSubmit
          )}
          className="flex flex-col w-[500px] gap-6 px-20 py-5 bg-primary rounded-lg h-[600px] overflow-y-auto"
        >
          <Label className={"text-3xl ms-10 font-sans font-bold text-black"}>
            {fromPage === "add_driver" ? "Driver" : "User"} Registration
          </Label>
          <Input
            name="userName"
            type={"text"}
            placeholder={`${
              errors.userName ? errors.userName.message : "User Name"
            }`}
            rest={{
              ...register("userName", {
                required: { message: "Input is required", value: true },
              }),
            }}
            className={`px-5 py-3 ${
              errors.userName
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg`}
          />
          <Input
            name="email"
            type={"email"}
            placeholder={`${errors.email ? errors.email.message : "Email"}`}
            rest={{
              ...register("email", {
                required: { message: "Email is a required field", value: true },
              }),
            }}
            className={`px-5 py-3 ${
              errors.email
                ? " border border-red-500 placeholder-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg`}
          />
          <Input
            name="password"
            type={"password"}
            placeholder={`${
              errors.password ? errors.password.message : "Password"
            }`}
            rest={{
              ...register("password", {
                required: {
                  message: "Password is a required field",
                  value: true,
                },
              }),
            }}
            className={`px-5 py-3 ${
              errors.password
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg`}
          />
          <Input
            name="contactInfo"
            type={"text"}
            placeholder={`${
              errors.contactInfo ? errors.contactInfo.message : "Contact Info"
            }`}
            rest={{
              ...register("contactInfo", {
                required: {
                  message: "Contact infomation is a required field",
                  value: true,
                },
              }),
            }}
            className={`px-5 py-3 ${
              errors.contactInfo
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg`}
          />

          <TextArea
            className={`px-5 py-3 ${
              errors.email
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg`}
            rows={4}
            cols={5}
            placeholder={`${
              errors.address ? errors.address.message : "User Address"
            }`}
            rest={{
              ...register("address", {
                required: {
                  message: "Address is a required field",
                  value: true,
                },
              }),
            }}
          />

          <Button
            type={"submit"}
            title={"Submit"}
            className="px-4 py-3 rounded-md bg-tertirary"
          />
        </form>
      </div>
    </>
  );
};

export default UserCreate;
