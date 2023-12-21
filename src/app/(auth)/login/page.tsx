"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/utils/Input";
import { Button, DropDown, Label } from "@/components/utils";
import { LoginFormProps } from "./type";
import Link from "next/link";
import { roleSelection } from "@/constants";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const validationSchema = yup.object({
    userName: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    selectOptions: yup
      .object({
        label: yup.string().required("Label is required"),
        value: yup.string().required("Value is required"),
      })
      .required("Please select an option"),
  });

  const defaultValues: LoginFormProps = {
    userName: "",
    password: "",
    selectOptions: { label: "", value: "" },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <form
          action=""
          className="flex flex-col items-center w-[500px] gap-6 px-20 py-5 bg-primary rounded-lg overflow-y-auto min-h-[450px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Label className={"text-3xl ms-10 font-sans font-bold text-black"}>
            {"Login Form"}
          </Label>
          <Input
            name="userName"
            type={"text"}
            placeholder={`${
              errors.userName ? errors.userName.message : "Enter your Username"
            }`}
            rest={{
              ...register("userName"),
            }}
            className={`px-5 py-3 ${
              errors.userName
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg w-full`}
          />
          <Input
            name="password"
            type={"text"}
            placeholder={`${
              errors.password ? errors.password.message : "Enter your Password"
            }`}
            rest={{
              ...register("password"),
            }}
            className={`px-5 py-3 ${
              errors.password
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  rounded-md font-sans text-lg w-full`}
          />
          <Controller
            control={control}
            name="selectOptions"
            render={({ field }) => (
              <DropDown
                {...field}
                defaultValue={field.value.value || selectedOption} // Use field.value for defaultValue
                onChange={(value) => {
                  field.onChange(value); // Update form state
                  setSelectedOption(value); // Update local state if needed
                }}
                options={roleSelection}
                placeholder="Select Status"
                className="w-[340px]"
              />
            )}
          />
          <p className="self-end mr-5 text-red-600">
            {errors?.selectOptions?.message}
          </p>
          <Button
            type={"submit"}
            title={"Submit"}
            className="px-4 py-3 rounded-md bg-tertirary w-full"
          />
          <Link
            href="/request_form"
            className="border-b border-black font-serif hover:text-slate-400"
          >
            If you are new, request for a account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
