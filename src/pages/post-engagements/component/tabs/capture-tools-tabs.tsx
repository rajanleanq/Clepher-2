// tabs for capturing tools
import { Link, useLocation } from "react-router-dom";
import {
  CheckboxPluginIcon,
  JsonGeneratorIcon,
  LibraryIcon,
  MessengerCodeIcon,
  PostEngagementIcon,
  SendToMessengerIcon,
} from "../../../../assets/svg/capture-tools-tab-icon/capture-tabs.icon";
interface TabProps {
  title: string;
  link: string;
  icon: JSX.Element;
}
export default function CaptureToolsTabs({
  handleTab,
}: {
  handleTab: (link: string) => void;
}) {
  const location = useLocation();
  const tabs_constant: Array<TabProps> = [
    {
      title: "Links Library",
      link: "links-library",
      icon: <LibraryIcon />,
    },
    {
      title: "JSON Generator",
      link: "json-generator",
      icon: <JsonGeneratorIcon />,
    },
    {
      title: "Checkbox Plugin",
      link: "checkbox-plugin",
      icon: <CheckboxPluginIcon />,
    },
    {
      title: "Messenger Code",
      link: "messenger-code",
      icon: <MessengerCodeIcon />,
    },
    {
      title: "Post Engagement",
      link: "post-engagement",
      icon: <PostEngagementIcon />,
    },
    {
      title: "Send To Messenger",
      link: "send-to-messenger",
      icon: <SendToMessengerIcon />,
    },
  ];
  return (
    <div className="col-span-2 hidden lg:block pr-6">
      <ul
        role="menu"
        className="menu rounded-box bg-base-100 menu-vertical min-w-max"
      >
        <li role="menuitem" className="menu-title">
          <span>Capture Tools</span>
        </li>
        {tabs_constant.map((tab) => {
          return (
            <li key={tab.title} role="menuitem">
              <Link
                to={"/759/capture-tools/" + tab.link}
                aria-current="page"
                onClick={() => handleTab(tab.link)}
                className={
                  location.pathname?.includes(tab.link) ? "active" : ""
                }
              >
                {tab.icon}
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
