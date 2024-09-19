import { BreadCrumbIcon } from "../../../../../assets/svg/navbar/navbar.icon";
import { routes } from "../../../../../constant/routes";
export default function NavAvatar() {
  return (
    <div className="lg:px-2">
      <a className="hidden lg:block" href={routes?.index}>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://graph.facebook.com/237352949662793/picture?type=normal"
              alt="Page Name"
            />
          </div>
        </div>
      </a>
      <label
        htmlFor="my-drawer-1"
        className="btn btn-circle drawer-button btn-ghost lg:hidden"
      >
        <BreadCrumbIcon />
      </label>
    </div>
  );
}
