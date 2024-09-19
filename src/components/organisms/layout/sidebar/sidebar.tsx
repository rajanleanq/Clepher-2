import { cn } from "../../../../lib/utils";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import DashboardIcon from "../../../../assets/svg/sidebar/dashboard.icon";
import AudienceIcon from "../../../../assets/svg/sidebar/audience.icon";
import PostEngagementIcon from "../../../../assets/svg/sidebar/post-engagement.icon";
import CaptureToolsIcon from "../../../../assets/svg/sidebar/capture-tools.icon";
import BroadcastsIcon from "../../../../assets/svg/sidebar/broadcasts.icon";
import AutomationIcon from "../../../../assets/svg/sidebar/automation.icon";
import SheetIcon from "../../../../assets/svg/sidebar/sheet.icon";
import MarketIcon from "../../../../assets/svg/sidebar/market.icon";
import SettingIcon from "../../../../assets/svg/sidebar/setting.icon";

export default function Sidebar() {
  const current_location = useLocation();
  const sidebar_items = [
    {
      link: "/759/dashboard",
      icon: <DashboardIcon />,
    },
    {
      link: "/759/audience",
      icon: <AudienceIcon />,
    },
    {
      link: "/759/capture-tools/messages",
      icon: <PostEngagementIcon />,
    },
    {
      link: "/759/capture-tools/post-engagement",
      icon: <CaptureToolsIcon />,
    },
    {
      link: "/759/broadcasts",
      icon: <BroadcastsIcon />,
    },
    {
      link: "/759/automation",
      icon: <AutomationIcon />,
    },
    {
      link: "/759/capture-tools/sheets",
      icon: <SheetIcon />,
    },
    {
      link: "/759/capture-tools/markets",
      icon: <MarketIcon />,
    },
    ,
    {
      link: "/759/settings",
      icon: <SettingIcon />,
    },
  ];
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-1"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
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
