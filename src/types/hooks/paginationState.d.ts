export interface IPaginationState {
  pageIndex: number;
  pageSize: number;
}

export type IFetchDataFunction = (
  pageIndex: number,
  pageSize: number
) => Promise<{ data: any[]; total: number }>;
