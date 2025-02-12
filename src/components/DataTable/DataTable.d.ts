import { IFetchDataFunction } from "@/types/hooks/paginationState";
import { ICols } from "@/types/global/tableColumn";
import { ColumnDef } from "@tanstack/react-table";

export interface IDataTableProps {
  cols: ColumnDef<any, any>[];
  fetchDataFunction: IFetchDataFunction;
}
