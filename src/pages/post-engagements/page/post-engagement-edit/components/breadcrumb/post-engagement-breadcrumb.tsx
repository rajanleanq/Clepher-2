import BreadCrumb, {
  IBreadCrumbProps,
} from "../../../../../../components/atom/breadcrumb/breadcrumb";
import { Button } from "../../../../../../components/atom/button/button";
import { routes } from "../../../../../../constant/routes";

export default function PostEngBreadcrumb() {
  const links: IBreadCrumbProps["previous_links"] = [
    {
      name: "Capture Tools",
      link: routes?.index,
    },
    {
      name: "Post Engagement",
      link: routes?.index,
    },
  ];
  return (
    <div className="flex items-center justify-between px-2">
      <BreadCrumb current_link_title="Edit" previous_links={links} />
      <div>
        <Button className="btn btn-sm btn-primary">Save</Button>
      </div>
    </div>
  );
}
