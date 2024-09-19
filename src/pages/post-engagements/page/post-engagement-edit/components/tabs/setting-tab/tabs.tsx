import React, { useState } from "react";
import { cn } from "../../../../../../../lib/utils";
import PostEngagementSettings from "./tab-1/settings-tab";
import PostEngagementAutoResponse from "./tab-2/auto-response-tab";

export default function SettingTabs() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [direction, setDirection] = useState<string>("slide-right");

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

  const handleTabChange = (tabValue: number) => {
    if (tabValue > activeTab) {
      setDirection("slide-left");
    } else {
      setDirection("slide-right");
    }
    setActiveTab(tabValue);
  };

  return (
    <div className="w-full">
      <div
        role="tablist"
        className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg"
      >
        {tabs.map((tab) => (
          <p
            role="tab"
            className={cn(
              "tab text-14",
              activeTab === tab.value && "tab-active"
            )}
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
          >
            {tab.title}
          </p>
        ))}
      </div>
      <div className="relative h-[75vh] overflow-y-auto  overflow-x-hidden">
        <div
          className={cn(
            "absolute z-10 w-full transition-transform duration-500 px-6 py-3.5",
            direction === "slide-right" ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {activeTab === 1 && <PostEngagementSettings />}
        </div>
        <div
          className={cn(
            "absolute w-full transition-transform duration-500 px-6 py-3.5",
            direction === "slide-left" ? "translate-x-0" : "translate-x-full"
          )}
        >
          {activeTab === 2 && <PostEngagementAutoResponse />}
        </div>
      </div>
    </div>
  );
}
