import PostReaction from "../component/post-reaction";
import PrivateReply from "../component/private-reply";
import AddKeyword from "../../../../../../../../components/molecule/add-keyword/add-keyword";
import InfoIcon from "../../../../../../../../assets/svg/common/info.icon";

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
  const tooltip_constant = {
    post_reaction:
      "Requiring a post reaction means that additionally to comments, your page visitors need to add a reaction to your selected post before they get your specified reply.",
    exclude_comment:
      "Comments that contain any the excluded keywords specified here will not trigger your private reply.",
    only_trigger:
      "Only comments that contain the keywords specified here will be processed. If you leave this input empty then any comment will trigger your private reply.",
    private_reply_post:
      "This selected flow/card will be sent as a private message to everyone who successfully engaged with your post.",
    private_reply_after:
      "Specify the delay after which users will receive the text message above.",
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          {messages?.map((message) => (
            <label
              key={message.value}
              className="flex flex-row items-center justify-between cursor-pointer"
            >
              <span className="opacity-60 xs:text-13 md:text-14">
                {message.title}
              </span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          ))}
        </div>
        <br />
        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <h1 className="xs:text-[12px] md:text-14 font-semibold text-gray-900 mb-1">
              Require a Post Reaction
            </h1>
            <InfoTooltip value={tooltip_constant.post_reaction} />
          </div>
          <hr />
          <PostReaction />
        </div>
        <br />

        <div className="flex flex-col xs:gap-1 md:gap-3">
          <div className="flex flex-row items-center gap-1">
            <h1 className="xs:text-[13px] md:text-14 text-gray-900 mb-1">
              Exclude Comments With These Keywords
            </h1>
            <InfoTooltip value={tooltip_constant.exclude_comment} />
          </div>
          <AddKeyword handleChange={() => {}} />
        </div>
        <br />

        <div className="flex flex-col xs:gap-1 md:gap-3">
          <div className="flex flex-row items-center gap-1">
            <h1 className="xs:text-[13px] md:text-14 text-gray-900 mb-1">
              Only Trigger For Comments With These Keywords
            </h1>
            <InfoTooltip value={tooltip_constant.only_trigger} />
          </div>

          <AddKeyword handleChange={() => {}} />
        </div>
        <br />
        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <h1 className="xs:text-[13px] md:text-14 font-semibold text-gray-900 mb-1">
              Private Reply After Post Engagement
            </h1>
            <InfoTooltip value={tooltip_constant.private_reply_post} />
          </div>
          <h1 className="xs:text-[13px] md:text-14 font-semibold text-gray-900 mb-1"></h1>
          <hr />
          <PrivateReply />
        </div>
        <br />
        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <h1 className="xs:text-[13px] md:text-14 font-semibold text-gray-900 mb-1">
              Send Private Reply Right After
            </h1>
            <InfoTooltip value={tooltip_constant.private_reply_post} />
          </div>

          <hr />

          <div className="form-control mt-2">
            <select
              spellCheck="true"
              autoComplete="on"
              className="select select-bordered"
            >
              <option value={"immediate"}>Immediately</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

const InfoTooltip = ({ value }: { value: string }) => {
  return (
    <div className="tooltip" data-tip={value}>
      <InfoIcon />
    </div>
  );
};
