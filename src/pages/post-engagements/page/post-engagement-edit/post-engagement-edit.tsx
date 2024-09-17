import React from "react";
import PostEngBreadcrumb from "./components/breadcrumb/post-engagement-breadcrumb";
import PostEngagementTabs from "./components/tabs/post-engagement-tabs";

export default function PostEngagementEdit() {
  return (
    <section className=" bg-[#F2F7FF] h-screen w-screen flex flex-col gap-4">
      <PostEngBreadcrumb />
      <PostEngagementTabs />
    </section>
  );
}
