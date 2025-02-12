import React from "react";
import { IStatsCardProps } from "./StatsCard.d";

const StatsCard: React.FC<IStatsCardProps> = ({ tabs }) => {
  const displayTabs = tabs.map((tab, index) => (
    <div
      className="-amber-50 border-1 rounded-xl flex flex-col bg-white w-[45%] md:w-[22%]"
      key={`statTab-${index}`}
    >
      <div className="flex justify-between items-center p-4">
        <p className="font-medium text-sm">{tab.title}</p>
        <img src={tab.icon} alt="receipt" />
      </div>
      <hr className="-slate-200 border-1" />
      <p className={`font-medium text-2xl ${tab.colorClass} p-4`}>{tab.data}</p>
    </div>
  ));
  return (
    <section className="flex gap-6 justify-between flex-wrap">
      {displayTabs}
    </section>
  );
};

export default StatsCard;
