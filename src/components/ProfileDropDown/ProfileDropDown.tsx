import React from "react";

const ProfileDropDown: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={"/sample.png"}
        alt="user img"
        className="w-12 h-12 rounded-md"
      />
      <div className="hidden md:block">
        <p className="text-sm font-normal">COMPANY ABC</p>
        <p className="text-xs font-normal">@companyabc</p>
      </div>
      <img
        className="hidden md:block"
        src={"/icons/dropdown.png"}
        alt="dropdown icon"
      />
    </div>
  );
};

export default ProfileDropDown;
