import React from "react";
import { Link } from "react-router-dom";
import StatusIcon from "../../../../../../assets/svg/navbar/status.icon";
import CommunityIcon from "../../../../../../assets/svg/navbar/community.icon";
import KnowledgeBaseIcon from "../../../../../../assets/svg/navbar/knowledge-base.icon";
import ServiceIcon from "../../../../../../assets/svg/navbar/service.icon";
interface IMenuProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}
export default function ServiceMenu() {
  const service_menu: IMenuProps[] = [
    {
      title: "Status",
      icon: <StatusIcon />,
      link: "https://status.clepher.com/",
    },
    {
      title: "Community",
      icon: <CommunityIcon />,
      link: "https://www.facebook.com/groups/clepher/",
    },
    {
      title: "Knowledge Base",
      icon: <KnowledgeBaseIcon />,
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
          <ServiceIcon />
        </button>
      </label>
      <ul
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52"
        role="menu"
      >
        {service_menu.map((item, index) => {
          return (
            <li key={index} role="menuitem">
              <Link to={item.link} target="_blank" rel="noreferrer">
                {item.icon}

                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
