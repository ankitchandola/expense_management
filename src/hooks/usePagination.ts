import {
  IFetchDataFunction,
  IPaginationState,
} from "@/types/hooks/paginationState";
import { useState, useEffect } from "react";
export const usePagination = (
  initialPageIndex = 0,
  initialPageSize = 10,
  fetchDataFunction: IFetchDataFunction
) => {
  const [pagination, setPagination] = useState<IPaginationState>({
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
  });

  const [total, setTotal] = useState(0);
  const [tblData, setTblData] = useState<any[]>([]);

  const setPageIndex = (pageIndex: number) => {
    setPagination((prev) => ({ ...prev, pageIndex }));
  };

  const setPageSize = (pageSize: number) => {
    setPagination((prev) => ({ ...prev, pageSize }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, total } = await fetchDataFunction(
        pagination.pageIndex,
        pagination.pageSize
      );
      setTotal(total);
      setTblData(data);
    };

    fetchData();
  }, [pagination.pageIndex, pagination.pageSize, fetchDataFunction]);

  return {
    tblData,
    total,
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    setPageIndex,
    setPageSize,
  };
};
