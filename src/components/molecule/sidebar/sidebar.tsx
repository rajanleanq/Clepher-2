import { cn } from "../../../lib/utils";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  AudienceIcon,
  AutomationIcon,
  BroadcastIcon,
  CaptureToolsIcon,
  DashboardIcon,
  MarketIcon,
  PostEngagementIcon,
  SettingIcon,
  SheetIcon,
} from "../../../assets/svg/sidebar/siderbar.icon";

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
      icon: <BroadcastIcon />,
    },
    {
      link: "/759/automation",
      icon: <AutomationIcon />,
    },
    {
      link: "/759/capture-tools/sheets",
      icon: <SheetIcon />
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
    <div className="drawer-side z-10">
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
