import StatsCard from "@/components/StatsCard/StatsCard";
import TableTitle from "@/components/DataTable/TableTitle/TableTitle";
import DataTable from "@/components/DataTable/DataTable";
import {
  tableHeader,
  filterForm,
  menuOption,
} from "@/utils/constants/employeeExpenseList.constants";
import { getMockData } from "@/utils/mockApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setActionOption,
  setFilterFormMenu,
  setIsTripleDotMenu,
  setOpenApproveModel,
  setOpenExpenditureModel,
  setOpenRejectModel,
  setTableFilterTabs,
} from "@/redux/reducer/pageConfigReducer";
import ExpenditureModal from "@/components/Modal/ExpenditureModal/ExpenditureModal";
import { RootState } from "@/redux/store";
import { filterTabs } from "@/utils/constants/table/filterTabs.d";
import ApproveRejectModal from "@/components/Modal/ApproveRejectModal/ApproveRejectModal";
import { useRouter } from "next/router";

const EmployeeExpense: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const openExpenditureModel = useSelector(
    (state: RootState) => state.pageConfig.openExpenditureModel
  );
  const openApproveModel = useSelector(
    (state: RootState) => state.pageConfig.openApproveModel
  );
  const openRejectModel = useSelector(
    (state: RootState) => state.pageConfig.openRejectModel
  );
  useEffect(() => {
    dispatch(setActionOption(menuOption));
    dispatch(setTableFilterTabs(filterTabs));
    dispatch(setFilterFormMenu(filterForm));
    dispatch(setIsTripleDotMenu(true));
  }, [pathname]);
  const tabs = [
    {
      title: "Total Expense Request",
      icon: "/cards/receipt.png",
      data: 1200,
      colorClass: "text-purple-600",
    },
    {
      title: "Pending Expense Request",
      icon: "/cards/transaction-minus.png",
      data: 1200,
      colorClass: "text-amber-600",
    },
    {
      title: "Completed Expense Request",
      icon: "/cards/receipt2.png",
      data: 1200,
      colorClass: "text-green-600",
    },
    {
      title: "Overdue Expense Request",
      icon: "/cards/timer.png",
      data: 1200,
      colorClass: "text-orange-600",
    },
  ];
  return (
    <section className="p-5">
      <StatsCard tabs={tabs} />
      <section className="border-1 rounded-lg mt-5 border-gray-200 bg-white">
        <TableTitle heading="Expense List" />
        <DataTable cols={tableHeader} fetchDataFunction={getMockData} />
        <ExpenditureModal
          isOpen={openExpenditureModel}
          onRequestClose={() =>
            dispatch(setOpenExpenditureModel({ status: false, type: "View" }))
          }
          title="Claim Details"
          type="View"
        />
        <ApproveRejectModal
          isOpen={openApproveModel || openRejectModel}
          onRequestClose={() => {
            if (openApproveModel) dispatch(setOpenApproveModel(false));
            else dispatch(setOpenRejectModel(false));
          }}
          type={openApproveModel ? "Approve" : "Reject"}
        />
      </section>
    </section>
  );
};

export default EmployeeExpense;
