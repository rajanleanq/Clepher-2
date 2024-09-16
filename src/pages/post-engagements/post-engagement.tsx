import { useState } from "react";
import CaptureTools from "./component/capture-tools/capture-tools";
import PostEngagementTable from "./component/table/post-engagement-table";

export default function PostEngagement() {
  const [tab, setTab] = useState<string>("post-engagement");
  const handleRender = () => {
    switch (tab) {
      case "post-engagement":
        return <PostEngagementTable />;
      default:
        return <div className="text-center text-20 text-red-500">No data</div>;
    }
  };
  return (
    <section className=" bg-[#F2F7FF] h-screen w-screen grid grid-cols-1 gap-6 p-6 lg:grid-cols-9">
      <CaptureTools handleTab={(e) => setTab(e)} />
      {handleRender()}
    </section>
  );
}
