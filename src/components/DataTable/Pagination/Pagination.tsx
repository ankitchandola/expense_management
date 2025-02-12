import React from "react";
import { IPaginationProps } from "./Pagination.d";

const Pagination: React.FC<IPaginationProps> = ({
  table,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 py-3 px-6 text-slate-700">
      <span className="font-medium text-sm">
        Page&nbsp;
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </span>
      <div className="flex gap-3">
        <button
          className="border-1 border-gray-300 rounded-lg py-2 px-3.5"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button
          className="border-1 border-gray-300 rounded-lg py-2 px-3.5"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
