import React from "react";
import { useReactTable } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";

import data from "./data.json";

export default function ActiveTicketTable({ columns, data }) {
  const columnsDef = [
    {
      accessorKey: "Description",
      header: "Description",
    },
    {
      accessorKey: "Status",
      header: "Status",
    },
    {
      accessorKey: "Agent",
      header: "Agent",
    },
    {
      accessorKey: "Creation Date",
      header: "Creation Date",
    },
  ];
}
