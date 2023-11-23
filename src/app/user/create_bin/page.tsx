"use client";
import { Button, Label } from "@/components/utils";
import Input from "@/components/utils/Input";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateBinProps } from "../type";
import TextArea from "@/components/utils/TextArea";

const CreateBin = () => {
  const defaultValues: CreateBinProps = {
    area: "",
    locality: "",
    landMark: "",
    address: "",
    photo: null,
    note: "",
  };
  const { register, formState, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<CreateBinProps> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col w-full bg-white shadow-xl rounded-lg px-4 py-2 gap-5">
        <Label className="text-2xl font-bold font-sans text-secondary">
          Create Bin
        </Label>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Input
            type={"text"}
            placeholder={`${errors.area ? errors.area.message : "Area..."}`}
            name={"area"}
            rest={{
              ...register("area", {
                required: { message: "Area is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.area
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <Input
            type={"text"}
            placeholder={`${
              errors.locality ? errors.locality.message : "Locality..."
            }`}
            name={"locality"}
            rest={{
              ...register("locality", {
                required: { message: "Locality is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.locality
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <Input
            type={"text"}
            placeholder={`${
              errors.landMark ? errors.landMark.message : "Land mark..."
            }`}
            name={"landMark"}
            rest={{
              ...register("landMark", {
                required: { message: "Land Mark is required", value: true },
              }),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 ${
              errors.landMark
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }`}
          />
          <TextArea
            className={`px-5 py-3 ${
              errors.address
                ? "placeholder-red-500 border border-red-500"
                : "text-black"
            }  w-full px-4 py-2 rounded-md outline outline-slate-200 font-sans text-lg`}
            rows={4}
            cols={5}
            placeholder={`${
              errors.address ? errors.address.message : "Bin Address"
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
          <Input
            type={"file"}
            name={"photo"}
            rest={{
              ...register("photo"),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 text-black`}
          />
          <Input
            type={"text"}
            placeholder={`You can write note... (optionally)`}
            name={"note"}
            rest={{
              ...register("note"),
            }}
            className={`w-full px-4 py-2 rounded-md outline outline-slate-200 text-black`}
          />
          <Button
            type={"submit"}
            title={"Create Bin"}
            className="px-4 py-2 text-white bg-tertirary w-fit rounded-md mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default CreateBin;
