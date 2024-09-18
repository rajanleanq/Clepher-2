import React from "react";
import serviceSvg from "../../../../../../assets/svg/navbar/service.svg";
import statusSvg from "../../../../../../assets/svg/navbar/status.svg";
import communitySvg from "../../../../../../assets/svg/navbar/community.svg";
import knowledgeSvg from "../../../../../../assets/svg/navbar/knowledge-base.svg";
interface IMenuProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}
export default function ServiceMenu() {
  const service_menu: IMenuProps[] = [
    {
      title: "Status",
      icon: <img src={statusSvg} alt="status" className="w-5 h-5" />,
      link: "https://status.clepher.com/",
    },
    {
      title: "Community",
      icon: <img src={communitySvg} alt="community" className="w-5 h-5" />,
      link: "https://www.facebook.com/groups/clepher/",
    },
    {
      title: "Knowledge Base",
      icon: <img src={knowledgeSvg} alt="knowledge" className="w-5 h-5" />,
      link: "https://clepher.com/support/",
    },
  ];
  return (
    <div
      role="listbox"
      className="dropdown hidden md:inline-block dropdown-end"
    >
      <label>
        <button className="btn btn-circle btn-ghost">
          <img src={serviceSvg} alt="service" className="w-5 h-5" />
        </button>
      </label>
      <ul
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52"
        role="menu"
      >
        {service_menu.map((item, index) => {
          return (
            <li key={index} role="menuitem">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.icon}

                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
