import React from "react";
import { IBreadCrumbsProps } from "./BreadCrumb.d";
import Link from "next/link"; // Use Next.js's built-in Link component
import style from "./BreadCrumb.style.module.css";

const BreadCrumb: React.FC<IBreadCrumbsProps> = ({ currentPage }) => {
  return (
    <div>
      <ol className={style.cdBreadcrumb}>
        <li>
          <Link href="/">Home</Link> {/* Use Next.js Link component */}
        </li>
        <li className="current">
          <p>{currentPage}</p>
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
