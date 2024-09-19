import React from "react";
import DarkIcon from "../../../../../../assets/svg/navbar/dark.icon";
import LightIcon from "../../../../../../assets/svg/navbar/light.icon";
export default function DarkLight() {
  return (
    <label className="swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid">
      <input type="checkbox" className="theme-controller" value="night" />
      <div className="swap-on w-5 h-5">
        <LightIcon />
      </div>
      <div className="swap-off w-5 h-5">
        <DarkIcon />
      </div>
    </label>
  );
}
