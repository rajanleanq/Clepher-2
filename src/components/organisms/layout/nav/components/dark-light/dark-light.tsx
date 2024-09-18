import React from 'react'
import lightSvg from "../../../../../../assets/svg/navbar/light.svg";
import darkSvg from "../../../../../../assets/svg/navbar/dark.svg";
export default function DarkLight() {
  return (
    <label className="swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid">
    <input type="checkbox" />
    <img src={lightSvg} alt="light" className="w-5 h-5 swap-on" />
    <img src={darkSvg} alt="dark" className="w-5 h-5 swap-off" />
  </label>
  )
}
