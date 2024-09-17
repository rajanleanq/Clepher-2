import React from "react";
import PostEngBreadcrumb from "./components/breadcrumb/post-engagement-breadcrumb";
import PostEngagementTabs from "./components/tabs/post-engagement-tabs";
import Layout from "../../../../components/molecule/layout/layout";

export default function PostEngagementEdit() {
  return (
    <Layout>
      <section className=" bg-[#F2F7FF] w-full min-h-full flex flex-col gap-4 p-6">
        <PostEngBreadcrumb />
        <PostEngagementTabs />
      </section>
    </Layout>
  );
}
