import React from "react";
import NavBar from "@/components/Layout/NavBar/NavBar";
import SideBarLeft from "@/components/Layout/SideBarLeft/SideBarLeft";
import SideBarRight from "@/components/Layout/SideBarRight/SideBarRight";
import { ILayoutProps } from "./Layout.d";
import style from "./Layout.style.module.css";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <main>
      <NavBar />
      <div className={`md:flex ${style.viewArea}`}>
        <SideBarLeft />
        <div className="w-full md:w-4/6 mt-4">{children}</div>
        <SideBarRight />
      </div>
    </main>
  );
};

export default Layout;
