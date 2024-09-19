import React from "react";
import dashboardSvg from "../../../../assets/svg/sidebar/dashboard.svg";
import audienceSvg from "../../../../assets/svg/sidebar/audience.svg";
import captureToolsSvg from "../../../../assets/svg/sidebar/capture-tools.svg";
import automationSvg from "../../../../assets/svg/sidebar/automation.svg";
import broadcastsSvg from "../../../../assets/svg/sidebar/broadcasts.svg";
import settingsSvg from "../../../../assets/svg/sidebar/setting.svg";
import sheetSvg from "../../../../assets/svg/sidebar/sheet.svg";
import marketSvg from "../../../../assets/svg/sidebar/market.svg";
import postEngagementSvg from "../../../../assets/svg/sidebar/post-engagement.svg";
import { cn } from "../../../../lib/utils";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const current_location = useLocation();
  const sidebar_items = [
    {
      link: "/759/dashboard",
      icon: <img src={dashboardSvg} alt="dashboard-icon" className="w-5 h-5" />,
    },
    {
      link: "/759/audience",
      icon: <img src={audienceSvg} alt="audience-icon" className="w-5 h-5" />,
    },
    {
      link: "/759/capture-tools/messages",
      icon: (
        <img
          src={postEngagementSvg}
          alt="post-engagement-icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      link: "/759/capture-tools/post-engagement",
      icon: (
        <img
          src={captureToolsSvg}
          alt="capture-tools-icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      link: "/759/broadcasts",
      icon: (
        <img src={broadcastsSvg} alt="broadcast-icon" className="w-5 h-5" />
      ),
    },
    {
      link: "/759/automation",
      icon: (
        <img src={automationSvg} alt="automation-icon" className="w-5 h-5" />
      ),
    },
    {
      link: "/759/capture-tools/sheets",
      icon: <img src={sheetSvg} alt="sheet-icon" className="w-5 h-5" />,
    },
    {
      link: "/759/capture-tools/markets",
      icon: <img src={marketSvg} alt="market-icon" className="w-5 h-5" />,
    },
    ,
    {
      link: "/759/settings",
      icon: <img src={settingsSvg} alt="settings-icon" className="w-5 h-5" />,
    },
  ];
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu border-r border-r-base-300 min-h-full bg-base-100 pt-20">
        {sidebar_items.map((item, index) => (
          <li key={index}>
            <Link
              to={item?.link || "#"}
              className={cn(
                "flex items-center py-4",
                current_location.pathname === item?.link ? "active" : ""
              )}
            >
              {item?.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
