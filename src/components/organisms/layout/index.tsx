import React from "react";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div aria-expanded="false" className="drawer lg:drawer-open">
      <input type="checkbox" className="drawer-toggle" readOnly={true} />
      <Navbar />
      <Sidebar />
      <div className="drawer-content pt-[69px]">{children}</div>
    </div>
  );
}
