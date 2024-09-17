import PostReaction from "../component/post-reaction";
import PrivateReply from "../component/private-reply";
import AddItem from "../component/add-item";

export default function PostEngagementSettings() {
  const messages: Array<{ title: string; value: number }> = [
    {
      title: "Enable To Privately Reply To First-Level Comments Only",
      value: 1,
    },
    {
      title: "Send Message To The Same User Only Once Per Post",
      value: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {messages?.map((message) => (
          <label
            key={message.value}
            className="flex flex-row items-center justify-between cursor-pointer"
          >
            <span className="text-gray-500 text-14">{message.title}</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        ))}
      </div>
      <div className="w-full">
        <h1 className="text-14 font-semibold text-gray-900 mb-1">
          Require a Post Reaction
        </h1>
        <hr />
        <PostReaction />
      </div>
      <div className="flex flex-col gap-3">
        <p className="label-text">Exclude Comments With These Keywords</p>
        <AddItem handleChange={() => {}} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="label-text">
          Only Trigger For Comments With These Keywords
        </p>
        <AddItem handleChange={() => {}} />
      </div>
      <div className="w-full">
        <h1 className="text-14 font-semibold text-gray-900 mb-1">
          Private Reply After Post Engagement
        </h1>
        <hr />
        <PrivateReply />
      </div>
    </div>
  );
}
