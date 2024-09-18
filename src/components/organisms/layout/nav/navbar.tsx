import ServiceMenu from "./components/service-menu/service-menu";
import ProfileMenu from "./components/profile-menu/profile-menu";
import DarkLight from "./components/dark-light/dark-light";
import AlertMenu from "./components/alert-menu/alert-menu";
import ChannelLink from "./components/channel-link/channel-link";
import NavAvatar from "./components/avatar/nav-avatar";

export default function Navbar() {
  return (
    <nav className="navbar fixed z-20 border-b border-b-base-300 bg-base-100">
      <NavAvatar />
      <ChannelLink />
      <AlertMenu />
      <DarkLight />
      <ServiceMenu />
      <ProfileMenu />
    </nav>
  );
}
