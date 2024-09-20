import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

export interface IBreadCrumbProps {
  previous_links: Array<{ name: string; link: string }>;
  current_link_title: string;
  className?: string;
}
export default function BreadCrumb({
  previous_links,
  current_link_title,
  className,
}: IBreadCrumbProps) {
  return (
    <div
      role="navigation"
      aria-label="Breadcrumbs"
      className={cn("breadcrumbs text-lg p-0", className)}
    >
      <ul>
        {previous_links.map((link, index) => (
          <li role="link" key={index}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
        <li role="link">{current_link_title}</li>
      </ul>
    </div>
  );
}
