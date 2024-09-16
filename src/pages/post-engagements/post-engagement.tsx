import CaptureTools from "./component/capture-tools/capture-tools";
import PostEngagementTable from "./component/table/post-engagement-table";

export default function PostEngagement() {
  return (
    <section className=" bg-[#F2F7FF] h-screen w-screen grid grid-cols-1 gap-6 p-6 lg:grid-cols-9">
      <CaptureTools />
      <PostEngagementTable />
    </section>
  );
}
