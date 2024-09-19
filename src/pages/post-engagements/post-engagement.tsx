import { useState } from "react";
import PostEngagementTable from "./component/table/post-engagement-table";
import CaptureToolsTabs from "./component/tabs/capture-tools-tabs";

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
  const handleTab = (e: string) => {
    setTab(e);
  };

  return (
    <section className="  min-h-full w-full grid grid-cols-1 gap-6 p-6 lg:grid-cols-9">
      <CaptureToolsTabs handleTab={handleTab} />
      {handleRender()}
    </section>
  );
}
