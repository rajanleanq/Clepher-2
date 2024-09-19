import PostEngBreadcrumb from "./components/breadcrumb/post-engagement-breadcrumb";
import PostEngagementTabs from "./components/tabs/post-engagement-tabs";

export default function PostEngagementEdit() {
  return (
    <section className=" bg-base-200 w-full min-h-full flex flex-col gap-4 p-6">
      <PostEngBreadcrumb />
      <PostEngagementTabs />
    </section>
  );
}
