import React from "react";
import {
  DarkIcon,
  LightIcon,
} from "../../../../../assets/svg/navbar/navbar.icon";
import { Input } from "../../../../atom/input/input";
export default function ThemeToggleController() {
  return (
    <label className="swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid">
      <Input type="checkbox" className="theme-controller" value="night" />
      <div className="swap-on w-5 h-5">
        <LightIcon />
      </div>
      <div className="swap-off w-5 h-5">
        <DarkIcon />
      </div>
    </label>
  );
}
