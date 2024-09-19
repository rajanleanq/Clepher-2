import React from "react";
import { routes } from "../../../../../../constant/routes";
import { Button } from "../../../../../../components/atom/button/button";
import { Link } from "react-router-dom";

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
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        className="breadcrumbs text-lg p-0"
      >
        <ul>
          {links.map((link, index) => (
            <li role="link" key={index}>
              <Link to={link.link}>{link.title}</Link>
            </li>
          ))}
          <li role="link">Edit</li>
        </ul>
      </div>
      <div>
        <button className="btn btn-sm btn-primary">Save</button>
      </div>
    </div>
  );
}
