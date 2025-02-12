import { AppDispatch } from "@/redux/store";
import React from "react";
import {
  setOpenApproveModel,
  setOpenExpenditureModel,
  setOpenRejectModel,
} from "@/redux/reducer/pageConfigReducer";
import { IFormInput } from "@/types/global/formInput";
import { IDropdownOption } from "@/types/global/dropdownOption";
import { ColumnDef } from "@tanstack/react-table";
import { statusColor } from "./theme";

export const menuOption: IDropdownOption[] = [
  {
    name: "View",
    icon: "/icons/eye.png",
    action: (dispatch: AppDispatch) =>
      dispatch(setOpenExpenditureModel({ status: true, type: "View" })),
  },
  {
    name: "Reject",
    icon: "/icons/close-cross.png",
    action: (dispatch: AppDispatch) => dispatch(setOpenRejectModel(true)),
  },
  {
    name: "Approve",
    icon: "/icons/check.png",
    action: (dispatch: AppDispatch) => dispatch(setOpenApproveModel(true)),
  },
];

export const tableHeader: ColumnDef<any, any>[] = [
  {
    accessorKey: "employeeDetails",
    header: "Employee Details",
    cell: ({ row }) => {
      const employeeId = row.original.employeeId;
      const employeeFirstName = row.original.employeeFirstName;

      return (
        <div>
          <b>{employeeId}</b>
          <p className="text-slate-500">{employeeFirstName}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "expenseId",
    header: "Claim ID",
  },
  {
    accessorKey: "expenditureName",
    header: "Expenditure",
  },
  {
    accessorKey: "totalAmount",
    header: "Amount Claimed",
  },
  {
    accessorKey: "statusByManager",
    header: "Status by manager",
    cell: ({ row }) => {
      const status = row.original.statusByManager;
      const color = statusColor[status];
      const textClass = `text-${color}`;
      const borderClass = `border-${color}`;

      const _class = `${textClass} ${borderClass} border-1 py-2 px-5 border-solid rounded-full`;

      return <p className={_class}>{status}</p>;
    },
  },
  {
    accessorKey: "remark",
    header: "Manager's Comments",
  },
  {
    accessorKey: "statusByAccManager",
    header: "Status by account manager",
    cell: ({ row }) => {
      const status = row.original.statusByAccManager;
      const color = statusColor[status];
      const textClass = `text-${color}`;
      const borderClass = `border-${color}`;

      const _class = `${textClass} ${borderClass} border-1 py-2 px-5 border-solid rounded-full`;

      return <p className={_class}>{status}</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
];

const defaultOptions = [
  {
    id: 1,
    name: "Argentina",
  },
  {
    id: 2,
    name: "Brazil",
  },
];

export const filterForm: IFormInput[] = [
  {
    type: "date",
    placeholder: "Start date",
    name: "startDate",
  },
  {
    type: "date",
    placeholder: "End date",
    name: "endDate",
  },
  {
    type: "combobox",
    placeholder: "Select Employee",
    name: "employeeName",
    options: defaultOptions, //in future call api to get default options
  },
];
