import React, { useEffect, useState } from "react";
import style from "./SideBarLeft.style.module.css";
import { sidebarTabs } from "@/utils/constants/sidebar/sidebarTabs.constants";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMediaQuery } from "react-responsive";

const SideBarLeft: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const [activeTab, setActiveTab] = useState("");
  const openHambergerMenu = useSelector(
    (state: RootState) => state.pageConfig.openHambergerMenu
  );
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);
  const displayTabs = sidebarTabs.map((tab) => (
    <div
      className={`${activeTab === tab.id ? style.activePage : ""} ${
        style.sideBarTab
      } cursor-pointer`}
      key={tab.id}
      onClick={() => router.push(tab.id)}
    >
      <img src={tab.icon} alt={tab.name} />
      <p className="font-normal text-base">{tab.name}</p>
    </div>
  ));
  return (
    <section
      className={`${
        openHambergerMenu || !isMobile ? "block" : "hidden"
      } w-full md:w-2/12 gap-4 flex flex-col bg-white ${style.sidebarSection}`}
    >
      <p
        className={`font-normal text-base py-2.5 px-5 gap-2.5 ${style.headingTitle}`}
      >
        Expense management System
      </p>
      <div className="px-5 py-2.5">{displayTabs}</div>
    </section>
  );
};

export default SideBarLeft;
