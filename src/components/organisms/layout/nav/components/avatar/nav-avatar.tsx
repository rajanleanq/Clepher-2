import React from "react";
import { routes } from "../../../../../../constant/routes";
import breadCrumbSvg from "../../../../../../assets/svg/navbar/breadcrumb.svg";

export default function NavAvatar() {
  return (
    <div className="lg:px-2">
      <a className="hidden lg:block" href={routes?.index}>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://graph.facebook.com/237352949662793/picture?type=normal"
              alt="Page Name"
            />
          </div>
        </div>
      </a>
      <label className="btn btn-circle btn-ghost lg:hidden">
        <img src={breadCrumbSvg} alt="breadcrumb" className="w-5 h-5" />
      </label>
    </div>
  );
}