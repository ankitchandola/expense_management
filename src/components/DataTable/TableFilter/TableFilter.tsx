import Tabs from "@/components/Tabs/Tabs";
import DateField from "@/components/Shared/DateField/DateField";
import ComboBox from "@/components/Shared/ComboBox/ComboBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ITableFilterProps } from "./TableFilter.d";
import { useState } from "react";

const TableFilter: React.FC<ITableFilterProps> = ({ table }) => {
  const { setColumnFilters } = table;
  const [activeTab, setActiveTab] = useState<string>("View all");

  const handleFilterChange = (filterId: string, value: any) => {
    setColumnFilters((old) => [
      ...old.filter((f) => f.id !== filterId),
      { id: filterId, value },
    ]);
  };
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    handleFilterChange("tabFilter", tabName);
  };

  const filterFormMenu = useSelector(
    (state: RootState) => state.pageConfig.filterFormMenu
  );
  const tableFilterTabs = useSelector(
    (state: RootState) => state.pageConfig.tableFilterTabs
  );
  const displayFormItem = filterFormMenu.map((menu, index) => {
    switch (menu.type) {
      case "date":
        return (
          <div className="w-[47%] md:w-fit">
            <DateField
              key={`filter-form-${index}`}
              setSelectedDate={(value: Date | null) =>
                handleFilterChange(menu.name, value)
              }
              placeholder={menu.placeholder}
            />
          </div>
        );
      case "combobox":
        return (
          <div className="w-[47%] md:w-fit">
            <ComboBox
              key={`filter-form-${index}`}
              options={menu.options || []}
              onChange={(id) => handleFilterChange(menu.name, id)}
              placeholder="Select Employee"
            />
          </div>
        );
    }
  });
  const displayTabs = tableFilterTabs.map((tab, index) => (
    <div
      key={`tab-${index}`}
      onClick={() => handleTabClick(tab)}
      className="flex"
    >
      <Tabs title={tab} isActive={tab === activeTab} />
      {index !== tableFilterTabs.length - 1 && (
        <div className="w-px h-full bg-gray-300" />
      )}
    </div>
  ));
  return (
    <div className="flex justify-between flex-col md:flex-row gap-3">
      <div className="flex border-1 rounded-lg overflow-hidden border-gray-300 w-full md:w-fit">
        {displayTabs}
      </div>
      <div className="flex gap-3 justify-between flex-wrap md:flex-nowrap">
        {displayFormItem}
        <button className="py-2.5 px-3.5 bg-blue-900 rounded-lg text-white text-base font-normal w-[47%] md:w-fit">
          Search
        </button>
      </div>
    </div>
  );
};

export default TableFilter;
