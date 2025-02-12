import React from "react";
import { flexRender } from "@tanstack/react-table";
import { ITableBodyProps } from "./TableBody.d";
import { statusColor } from "@/utils/constants/theme";

const TableBody: React.FC<ITableBodyProps> = ({ table }) => {
  console.log(table, "dsfsdf");
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="py-2.5 px-6 border-gray-200 border-b-1 min-w-48"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
