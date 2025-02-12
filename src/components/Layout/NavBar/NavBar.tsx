import React from "react";
import BreadCrumbs from "@/components/BreadCrumb/BreadCrumb";
import ProfileDropDown from "@/components/ProfileDropDown/ProfileDropDown";
import { useRouter } from "next/router";
import { pageUrlMapping } from "@/utils/pageUrls";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { setOpenHambergerMenu } from "@/redux/reducer/pageConfigReducer";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    if (isMobile) dispatch(setOpenHambergerMenu());
  };
  return (
    <nav className="flex justify-between py-5">
      <div
        className="w-2/12 flex gap-3 items-center px-4"
        onClick={handleMenuClick}
      >
        <img
          src="/logo.svg"
          alt="logo"
          className="lg:w-[35%] md:w-[60%] w-full"
        />
      </div>
      <div className="flex justify-between w-5/6 px-7">
        <div className="w-3/5">
          <div>
            <p className="text-lg font-medium">
              {pageUrlMapping[pathname as keyof typeof pageUrlMapping]}
            </p>
          </div>
          <div>
            <BreadCrumbs
              currentPage={
                pageUrlMapping[pathname as keyof typeof pageUrlMapping]
              }
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <ProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
