// tabs for capturing tools
import { Link, useLocation } from "react-router-dom";
import LibrarySvg from "../../../../assets/svg/capture-tools-icon/library.icon";
import JsonGeneratorSvg from "../../../../assets/svg/capture-tools-icon/json-generator.icon";
import CheckboxPluginIcon from "../../../../assets/svg/capture-tools-icon/checkbox-plugin.icon";
import MessengerCodeSvg from "../../../../assets/svg/capture-tools-icon/messenger-code.icon";
import PostEngagmentIcon from "../../../../assets/svg/capture-tools-icon/post-engagement.icon";
import SentToMessengerIcon from "../../../../assets/svg/capture-tools-icon/send-to-messenger.icon";
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
      icon: <LibrarySvg />,
    },
    {
      title: "JSON Generator",
      link: "json-generator",
      icon: <JsonGeneratorSvg />,
    },
    {
      title: "Checkbox Plugin",
      link: "checkbox-plugin",
      icon: <CheckboxPluginIcon />,
    },
    {
      title: "Messenger Code",
      link: "messenger-code",
      icon: <MessengerCodeSvg />,
    },
    {
      title: "Post Engagement",
      link: "post-engagement",
      icon: <PostEngagmentIcon />,
    },
    {
      title: "Send To Messenger",
      link: "send-to-messenger",
      icon: <SentToMessengerIcon />,
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
