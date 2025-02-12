import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import SubmitButton from "@/components/Shared/SubmitButton/SubmitButton";
import TableTitle from "@/components/DataTable/TableTitle/TableTitle";
import DataTable from "@/components/DataTable/DataTable";
import {
  filterForm,
  menuOption,
  tableHeader,
} from "@/utils/constants/employerExpenseList.constants";
import { getMockData } from "@/utils/mockApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActionOption,
  setFilterFormMenu,
  setIsTripleDotMenu,
  setAddExpenditureModel,
  setOpenExpenditureModel,
  setTableFilterTabs,
} from "@/redux/reducer/pageConfigReducer";
import { filterTabs } from "@/utils/constants/table/filterTabs.d";
import ExpenditureModal from "@/components/Modal/ExpenditureModal/ExpenditureModal";
import { RootState } from "@/redux/store";
import AddExpenditureModal from "@/components/Modal/AddExpenditureModel/AddExpenditureModel";
import { useRouter } from "next/router";
import { IAddExpenditure, IAddNewRecordForm } from "@/types/global/expenditure";
import {
  appendCategories,
  resetExpense,
} from "@/redux/reducer/expenditureReducer";
import { getExpenses } from "@/services/expense.service";

const MyExpenseEmployer: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const openExpenditureModel = useSelector(
    (state: RootState) => state.pageConfig.openExpenditureModel
  );
  const openAddExpenditureModel = useSelector(
    (state: RootState) => state.pageConfig.addExpenditureModel?.isOpen
  );
  const modalType = useSelector(
    (state: RootState) => state.pageConfig.currentActiveModalType
  );
  useEffect(() => {
    dispatch(setActionOption(menuOption));
    dispatch(setTableFilterTabs(filterTabs));
    dispatch(setFilterFormMenu(filterForm));
    dispatch(setIsTripleDotMenu(false));
  }, [pathname]);

  return (
    <section className="p-5">
      <div className="flex justify-between items-center">
        <div className="w-auto md:w-11/12">
          <PageTitle title="My Expenses" />
        </div>
        <div className="w-auto md:w-2/12">
          <SubmitButton
            type="submit"
            value={`Add new claim`}
            bgColor="blue-900"
            borderColor="blue-900"
            textColor="white"
            icon={"/icons/plus.png"}
            onClick={() => {
              dispatch(setOpenExpenditureModel({ status: true, type: "Add" }));
              dispatch(resetExpense());
            }}
          />
        </div>
      </div>
      <section className="border-1 rounded-lg mt-5 border-gray-200 bg-white">
        <TableTitle heading="Expense List" />
        <DataTable cols={tableHeader} fetchDataFunction={getExpenses} />
      </section>
      <ExpenditureModal
        isOpen={openExpenditureModel}
        onRequestClose={() =>
          dispatch(setOpenExpenditureModel({ status: false }))
        }
        title={
          modalType === "View"
            ? "Expenditure Details"
            : modalType === "Edit"
            ? "Edit Claim details"
            : "Add new Claim"
        }
        type={modalType}
      />
      <AddExpenditureModal
        isOpen={!!openAddExpenditureModel}
        onRequestClose={() =>
          dispatch(
            setAddExpenditureModel({ isOpen: false, currentIndex: null })
          )
        }
        title="Add New Expenditure"
      />
    </section>
  );
};

export default MyExpenseEmployer;
