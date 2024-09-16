// tabs for capturing tools
import LibrarySvg from "../../../../assets/svg/library.svg";
import JsonGeneratorSvg from "../../../../assets/svg/json-generator.svg";
import CheckboxPluginSvg from "../../../../assets/svg/checkbox-plugin.svg";
import MessengerCodeSvg from "../../../../assets/svg/messenger-code.svg";
import PostEngagementSvg from "../../../../assets/svg/post-engagement.svg";
import SendToMessengerSvg from "../../../../assets/svg/send-to-messenger.svg";
import { Link, useLocation } from "react-router-dom";
interface TabProps {
  title: string;
  link: string;
  icon: string;
}
export default function CaptureTools() {
  const location = useLocation();
  const tabs_constant: Array<TabProps> = [
    {
      title: "Links Library",
      link: "/759/capture-tools/links-library",
      icon: LibrarySvg,
    },
    {
      title: "JSON Generator",
      link: "/759/capture-tools/json-generator",
      icon: JsonGeneratorSvg,
    },
    {
      title: "Checkbox Plugin",
      link: "/759/capture-tools/checkbox-plugin",
      icon: CheckboxPluginSvg,
    },
    {
      title: "Messenger Code",
      link: "/759/capture-tools/messenger-code",
      icon: MessengerCodeSvg,
    },
    {
      title: "Post Engagement",
      link: "/759/capture-tools/post-engagement",
      icon: PostEngagementSvg,
    },
    {
      title: "Send To Messenger",
      link: "/759/capture-tools/send-to-messenger",
      icon: SendToMessengerSvg,
    },
  ];
  return (
    <div className="col-span-2 hidden  lg:block">
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
                to={tab.link}
                aria-current="page"
                className={location.pathname === tab.link ? "active" : ""}
              >
                <img
                  src={tab.icon || ""}
                  alt={tab?.title}
                  className={location.pathname === tab.link ? "svg-active" : ""}
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
