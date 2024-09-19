import PostMenuTabs from "./post-tab/post-tab-container";
import SettingTabs from "./setting-tab/setting-tab-container";

export default function PostEngagementTabs() {
  return (
    <div className="flex w-full flex-1 bg-base-100  rounded-xl xs:flex-col md:flex-col lg:flex-row ">
      <div className="basis-2/5">
        <SettingTabs />
      </div>
      <div className="basis-3/5">
        <PostMenuTabs />
      </div>
    </div>
  );
}
