import React, { useState } from "react";
import {
  flexRender,
  getFacetedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createColumnHelper, getCoreRowModel } from "@tanstack/react-table";

import data from "./data.json";

import "../../styles/table_styles/ActiveTicketTable.css";

import Filters from "./Filters";

const columns = [
  {
    accessorKey: "Description",
    header: "TICKET DESCRIPTION",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Status",
    header: "STATUS",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Agent",
    header: "AGENT",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Creation date",
    header: "DATE",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

export default function AllTicketsTable() {
  const [tableData, setTableData] = useState(data);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
  });

  console.log(columnFilters);
  return (
    <>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <table>
        <thead className="table-container">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="table-header" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="table-column-header" key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}

          {table.getRowModel().rows.map((row) => (
            <tr className="table-row" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}
