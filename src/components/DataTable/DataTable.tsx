import React, { useMemo, useState } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { usePagination } from "@/hooks/usePagination";
import TableHeader from "@/components/DataTable/TableHeader/TableHeader";
import TableBody from "@/components/DataTable/TableBody/TableBody";
import Pagination from "@/components/DataTable/Pagination/Pagination";
import { IDataTableProps } from "./DataTable.d";
import TableFilter from "@/components/DataTable/TableFilter/TableFilter";
import ActionDropDown from "@/components/DataTable/ActionDropDown/ActionDropDown";
import TripleDotButton from "@/components/Shared/TripleDotButton/TripleDotButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ActionMenu from "../ActionMenu/ActionMenu";

const DataTable: React.FC<IDataTableProps> = ({ cols, fetchDataFunction }) => {
  const isTripleDotMenu = useSelector(
    (state: RootState) => state.pageConfig.isTripleDotMenu
  );
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleDropdownToggle = (rowIndex: number) => {
    setDropdownOpen(dropdownOpen === rowIndex ? null : rowIndex);
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      ...cols,
      {
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <div>
            {isTripleDotMenu ? (
              <TripleDotButton
                handleDropdownToggle={handleDropdownToggle}
                dropdownOpen={dropdownOpen}
                index={row.index}
              >
                <ActionDropDown />
              </TripleDotButton>
            ) : (
              <ActionMenu />
            )}
          </div>
        ),
        size: 50,
      },
    ],
    [cols, dropdownOpen, isTripleDotMenu]
  );

  const { tblData, total, pageIndex, pageSize, setPageIndex, setPageSize } =
    usePagination(0, 10, fetchDataFunction);

  const defaultData = useMemo(() => [], []);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: tblData ?? defaultData,
    columns,
    pageCount: total,
    state: {
      pagination,
    },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const nextState = updater(pagination);
        setPageIndex(nextState.pageIndex);
        setPageSize(nextState.pageSize);
      }
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  return (
    <div>
      <div className="h-2" />
      <div className="py-4 px-6">
        <TableFilter table={table} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <TableHeader table={table} />
          <TableBody table={table} />
        </table>
      </div>
      <div className="h-2" />
      <Pagination table={table} />
    </div>
  );
};

export default DataTable;
