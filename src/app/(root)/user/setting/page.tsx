"use client";
import { Button, Label } from "@/components/utils";
import React from "react";
import { useForm, SubmitHandler, Form } from "react-hook-form";
import { SettingProps } from "../type";
import Input from "@/components/utils/Input";
import { useSearchParams } from "next/navigation";

const Setting = () => {
  const searchParams = useSearchParams();
  const fromPage = searchParams.get("fromPage");
  const defaultValues: SettingProps = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<SettingProps> = (data) => {
    console.log("Setting data>>>", data);
  };

  const adminSubmitHandler: SubmitHandler<SettingProps> = (data) => {
    console.log("Setting admin data>>>", data);
  };

  const driverSubmitHandler: SubmitHandler<SettingProps> = (data) => {
    console.log("Setting driver data>>>", data);
  };

  return (
    <div className="flex flex-col w-full bg-white shadow-xl rounded-lg px-4 py-2 gap-5">
      <Label className="text-2xl font-bold font-sans text-secondary">
        Change Password
      </Label>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(
          (fromPage === "admin" && adminSubmitHandler) ||
            (fromPage === "driver" && driverSubmitHandler) ||
            onSubmit
        )}
      >
        <Input
          type={"password"}
          placeholder={`Current Password`}
          name={"currentPassword"}
          rest={{
            ...register("currentPassword", {
              required: {
                message: "Current Password is required",
                value: true,
              },
            }),
          }}
          className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
            errors.currentPassword ? "border border-red-500" : "text-black"
          }`}
        />
        {errors.currentPassword && (
          <span className="text-red-500">
            {errors.currentPassword?.message}
          </span>
        )}
        <Input
          type={"password"}
          name={"newPassword"}
          placeholder={`New Password`}
          rest={{
            ...register("newPassword", {
              required: { message: "New Password is required", value: true },
            }),
          }}
          className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
            errors.newPassword ? "border border-red-500" : "text-black"
          }`}
        />
        {errors.newPassword && (
          <span className="text-red-500">{errors.newPassword?.message}</span>
        )}
        <Input
          type={"password"}
          name={"confirmPassword"}
          placeholder={`Confirm Password`}
          rest={{
            ...register("confirmPassword", {
              required: {
                message: "Confirm Password is required",
                value: true,
              },
              validate: (val: string) => {
                if (watch("newPassword") != val) {
                  return "Your passwords do no match";
                }
              },
            }),
          }}
          className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
            errors.confirmPassword ? "border border-red-500" : "text-black"
          }`}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">
            {errors.confirmPassword?.message}
          </span>
        )}
        <Button
          type={"submit"}
          title={"Change Password"}
          className="px-4 py-2 bg-tertirary text-white rounded-md"
        />
      </form>
    </div>
  );
};

export default Setting;
