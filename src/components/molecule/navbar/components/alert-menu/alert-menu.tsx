import { AlertIcon } from "../../../../../assets/svg/navbar/navbar.icon";

export default function AlertMenu() {
  return (
    <div className="navbar-end hidden md:inline-flex">
      <button className="btn hover:bg-red-300 btn-circle btn-ghost">
        <AlertIcon />
      </button>
    </div>
  );
}
