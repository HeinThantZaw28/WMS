"use client";
import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Button } from "..";
import { TableProps } from "./type";

const Table = ({ data: dataProps, columns }: TableProps) => {
  const data = useMemo(() => dataProps, [dataProps]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // state: {
    //   globalFilter: filterStatus,
    // },
    // onGlobalFilterChange: setFilterStatus,
  });

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 dark:shadow-lg dark:border dark:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-300 dark:text-black">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-3">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel()?.rows.map((row) => (
            <tr
              key={row.id}
              className="dark:bg-white border-b dark:border-gray-700 "
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex group mb-4">
        <Button
          type={"button"}
          title={"First Page"}
          onClick={() => table.setPageIndex(0)}
          className="px-4 py-2 rounded-md bg-tertirary text-white border-r"
        />
        <Button
          type={"button"}
          title={"Previous Page"}
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="px-4 py-2 rounded-md bg-tertirary text-white border-r disabled:bg-slate-400"
        />
        <Button
          type={"button"}
          title={"Next Page"}
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="px-4 py-2 rounded-md bg-tertirary text-white border-r disabled:bg-slate-400"
        />
        {/* )} */}
        <Button
          type={"button"}
          title={"Last Page"}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-4 py-2 rounded-md bg-tertirary text-white"
        />
      </div>
    </>
  );
};

export default Table;
