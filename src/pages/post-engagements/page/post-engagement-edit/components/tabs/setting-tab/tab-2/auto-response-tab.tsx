import React from "react";
import ReplyInComments from "./components/reply-in-comments";
import { Input } from "../../../../../../../../components/atom/input/input";

export default function PostEngagementAutoResponse() {
  const toggleFields: Array<{ title: string; value: number }> = [
    {
      title: "Enable To Automatically Like Comments",
      value: 1,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {toggleFields?.map((field) => (
          <label
            key={field.value}
            className="flex flex-row items-center justify-between cursor-pointer"
          >
            <span className="opacity-60 xs:text-13 md:text-14">
              {field.title}
            </span>
            <Input type="checkbox" className="toggle toggle-primary" />
          </label>
        ))}
      </div>
      <div className="w-full">
        <h1 className="sub-header">Reply In Comments</h1>
        <hr />
        <ReplyInComments />
      </div>
    </div>
  );
}
