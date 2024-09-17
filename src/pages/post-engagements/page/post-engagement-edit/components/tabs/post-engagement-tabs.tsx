import React from "react";
import PostMenuTabs from "./post-menu/tabs";
import SettingTabs from "./setting-menu/tabs";

export default function PostEngagementTabs() {
  return (
    <div className="flex w-full flex-1 bg-white rounded-xl">
      <SettingTabs />
      <PostMenuTabs />
    </div>
  );
}
