// tabs for capturing tools
import LibrarySvg from "../../../../assets/svg/capture-tools-icon/library.svg";
import JsonGeneratorSvg from "../../../../assets/svg/capture-tools-icon/json-generator.svg";
import CheckboxPluginSvg from "../../../../assets/svg/capture-tools-icon/checkbox-plugin.svg";
import MessengerCodeSvg from "../../../../assets/svg/capture-tools-icon/messenger-code.svg";
import PostEngagementSvg from "../../../../assets/svg/capture-tools-icon/post-engagement.svg";
import SendToMessengerSvg from "../../../../assets/svg/capture-tools-icon/send-to-messenger.svg";
import { Link, useLocation } from "react-router-dom";
interface TabProps {
  title: string;
  link: string;
  icon: string;
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
      icon: LibrarySvg,
    },
    {
      title: "JSON Generator",
      link: "json-generator",
      icon: JsonGeneratorSvg,
    },
    {
      title: "Checkbox Plugin",
      link: "checkbox-plugin",
      icon: CheckboxPluginSvg,
    },
    {
      title: "Messenger Code",
      link: "messenger-code",
      icon: MessengerCodeSvg,
    },
    {
      title: "Post Engagement",
      link: "post-engagement",
      icon: PostEngagementSvg,
    },
    {
      title: "Send To Messenger",
      link: "send-to-messenger",
      icon: SendToMessengerSvg,
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
                <img
                  src={tab.icon || ""}
                  alt={tab?.title}
                  className={
                    location.pathname?.includes(tab.link) ? "svg-active" : ""
                  }
                />
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
