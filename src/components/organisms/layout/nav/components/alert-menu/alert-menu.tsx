import React from "react";
import alertSvg from "../../../../../../assets/svg/navbar/alert.svg";

export default function AlertMenu() {
  return (
    <div className="navbar-end hidden md:inline-flex">
      <button className="btn hover:bg-red-300 btn-circle btn-ghost">
        <img src={alertSvg} alt="alert" className="w-5 h-5" />
      </button>
    </div>
  );
}
