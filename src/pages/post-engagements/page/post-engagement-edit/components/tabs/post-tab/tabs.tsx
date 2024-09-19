import { useState } from "react";
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
        className="tabs h-12 bg-base-100 p-0 rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg"
      >
        {tabs.map((tab) => (
          <div
            key={tab.value}
            role="tab"
            className={cn("tab", activeTab === tab.value && "tab-active")}
            style={{ borderRadius: "0px" }}
            onClick={() => setActiveTab(tab.value)}
          >
            Select A Post
          </div>
        ))}
      </div>
      <div className=" w-full">
        {activeTab === 1 && <SelectAPost />}

        {activeTab === 2 && <PostIDUrl />}
      </div>
    </div>
  );
}
