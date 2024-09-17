import React from "react";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen">
      <Navbar />
      <div className="flex w-full min-h-screen pt-[64px]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
