import React from "react";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer bg-[#F2F7FF] min-h-screen  lg:drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <Navbar />
      <Sidebar />
      <div className="drawer-content pt-[69px]">{children}</div>
    </div>
  );
}
