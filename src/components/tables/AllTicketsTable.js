import React, { useState } from "react";
import {
  flexRender,
  getFacetedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { BiSolidTrashAlt } from "react-icons/bi";

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
      <main>
        <section>
          <Filters
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          />
        </section>
        <section className="table-section">
          {/* <div className="table-container">
            <table>
              <thead className="table-body">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    id="table-col-header"
                    className="table-header"
                    key={headerGroup.id}
                  >
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </thead>
            </table>
          </div> */}
          <div>
            {table.getRowModel().rows.map((row) => (
              <div className="table-row" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
                <BiSolidTrashAlt />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
