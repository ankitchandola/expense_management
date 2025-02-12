import React from "react";
import style from "./SideBarLeft.style.module.css";

const SideBarRight: React.FC = () => {
  const displayActivity = Array.from({ length: 10 }).map((activity, index) => (
    <div key={`activity-${index}`}>
      {index === 0 && <hr className={style.hr} />}
      <div className="flex gap-3 p-3">
        <div className={style.avatarContainer}>
          <img src={"/activity/avatar.png"} alt="avatar" />
        </div>
        <div>
          <p className="font-medium text-xs">
            Maria improved the UI for SV Stack
          </p>
          <p className={`font-normal text-xs ${style.daysAgo}`}>5 days ago</p>
        </div>
      </div>
      {index !== 9 && <hr className={style.hr} />}
    </div>
  ));
  return (
    <section
      className={`${style.activitySection} bg-white mt-4 w-[16%] hidden md:block`}
    >
      <h3 className="font-medium text-sm p-4">Recent Activity</h3>
      <div className="flex flex-col">{displayActivity}</div>
    </section>
  );
};

export default SideBarRight;
