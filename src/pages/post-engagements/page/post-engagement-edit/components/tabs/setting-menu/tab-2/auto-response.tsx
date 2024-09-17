import React from "react";
import ReplyInComments from "./components/reply-in-comments";

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
            <span className="text-gray-500 text-14">{field.title}</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        ))}
      </div>
      <div className="w-full">
        <h1 className="text-14 font-semibold text-gray-900 mb-1">
          Reply In Comments
        </h1>
        <hr />
        <ReplyInComments />
      </div>
    </div>
  );
}
