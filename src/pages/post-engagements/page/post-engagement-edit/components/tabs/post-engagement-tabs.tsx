import React from "react";
import PostMenuTabs from "./post-tab/tabs";
import SettingTabs from "./setting-tab/tabs";

export default function PostEngagementTabs() {
  return (
    <div className="flex w-full flex-1 bg-white rounded-xl xs:flex-col md:flex-col lg:flex-row ">
      <div className="basis-2/5">
        <SettingTabs />
      </div>
      <div className="basis-3/5">
        <PostMenuTabs />
      </div>
    </div>
  );
}
