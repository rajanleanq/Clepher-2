import React, { useState } from "react";
import { cn } from "../../../../../../../lib/utils";
import SelectAPost from "./tab-1/select-a-post";
import PostIDUrl from "./tab-2/post-id-url";

export default function PostMenuTabs() {
  const [activeTab, setActiveTab] = useState<Number>(1);
  const tabs = [
    {
      title: "Select A Post",
      value: 1,
    },
    {
      title: "Post ID / URL",
      value: 2,
    },
  ];
  return (
    <div className="w-full">
      <div
        role="tablist"
        className="tabs tabs-boxed bg-white border-b child:!border-b child:!text-sm  tabs-lg rounded-none"
      >
        {tabs?.map((tab) => (
          <a
            role="tab"
            className={cn(
              "tab text-16 capitalize bg-white",
              activeTab === tab.value && "tab-active"
            )}
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <div className="p-6 w-full">
        {activeTab === 1 && <SelectAPost />}

        {activeTab === 2 && <PostIDUrl />}
      </div>
    </div>
  );
}
