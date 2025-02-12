import React from "react";
import { flexRender } from "@tanstack/react-table";
import { ITableHeaderProps } from "./TableHeader.d";

const TableHeader: React.FC<ITableHeaderProps> = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              className="border-b-1 py-3 px-6 border-gray-200 bg-gray-50 text-slate-500 text-xs font-medium text-left"
            >
              {header.isPlaceholder ? null : (
                <div>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
