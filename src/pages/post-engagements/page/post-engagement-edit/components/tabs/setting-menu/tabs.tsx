import React, { useState } from "react";
import { cn } from "../../../../../../../lib/utils";
import PostEngagementSettings from "./tab-1/settings";
import PostEngagementAutoResponse from "./tab-2/auto-response";

export default function SettingTabs() {
  const [activeTab, setActiveTab] = useState<Number>(1);
  const tabs = [
    {
      title: "Settings",
      value: 1,
    },
    {
      title: "Auto Response",
      value: 2,
    },
  ];
  return (
    <div className="w-full">
      <div
        role="tablist"
        className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg"
      >
        {tabs?.map((tab) => (
          <a
            role="tab"
            className={cn(
              "tab text-14 h-[56px]",
              activeTab === tab.value && "tab-active"
            )}
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <div className="p-6">
      {activeTab === 1 && <PostEngagementSettings />}

      {activeTab === 2 && <PostEngagementAutoResponse />}
      </div>
    </div>
  );
}
