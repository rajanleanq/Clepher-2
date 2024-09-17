import React from "react";
import { routes } from "../../../../../../constant/routes";
import { Button } from "../../../../../../components/atom/button/button";

export default function PostEngBreadcrumb() {
  const links = [
    {
      title: "Capture Tools",
      link: routes?.index,
    },
    {
      title: "Post Engagement",
      link: routes?.index,
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="breadcrumbs text-sm">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className="text-16 font-semibold">
                {link.title}
              </a>
            </li>
          ))}
          <li className="text-16 font-semibold">Edit</li>
        </ul>
      </div>
      <Button className="bg-blue-400 text-white text-[13px]">Save</Button>
    </div>
  );
}
