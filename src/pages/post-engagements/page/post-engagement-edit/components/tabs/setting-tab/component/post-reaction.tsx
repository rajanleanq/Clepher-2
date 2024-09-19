import LikeSvg from "../../../../../../../../assets/svg/reaction-icons/like.svg";
import HeartSvg from "../../../../../../../../assets/svg/reaction-icons/heart.svg";
import HahaSvg from "../../../../../../../../assets/svg/reaction-icons/haha.svg";
import WowSvg from "../../../../../../../../assets/svg/reaction-icons/wow.svg";
import SadSvg from "../../../../../../../../assets/svg/reaction-icons/sad.svg";
import AngrySvg from "../../../../../../../../assets/svg/reaction-icons/angry.svg";
import "./style/post-reaction.css";
import React, { useState } from "react";
import Badge from "../../../../../../../../components/atom/badge/badge";
interface IReaction {
  reaction: Array<{ title: string; icon: string }>;
}

export default function PostReaction() {
  const [reaction, setReaction] = useState<IReaction["reaction"]>([]);
  const [display, setDisplay] = React.useState(false);
  const reaction_constant: IReaction["reaction"] = [
    {
      title: "Like",
      icon: LikeSvg,
    },
    {
      title: "Love",
      icon: HeartSvg,
    },
    {
      title: "Haha",
      icon: HahaSvg,
    },
    {
      title: "Wow",
      icon: WowSvg,
    },
    {
      title: "Sad",
      icon: SadSvg,
    },
    {
      title: "Angry",
      icon: AngrySvg,
    },
  ];
  const handleReaction = (payload: { title: string; icon: string }) => {
    if (reaction?.find((p) => p?.title === payload?.title)) return;
    setReaction([...(reaction as IReaction["reaction"]), payload]);
  };
  const handleRemoveReaction = (title: string) => {
    setReaction(reaction?.filter((p) => p?.title !== title));
  };
  return (
    <>
      <div className="flex flex-wrap gap-3 mt-4">
        {reaction?.map((reaction) => (
          <Badge
            handleClose={() => handleRemoveReaction(reaction?.title)}
            key={reaction?.title}
          >
            <img src={reaction?.icon} alt="like" className="w-4 h-4 mr-1" />
            <span className="text-13 lowercase">{reaction?.title}</span>
          </Badge>
        ))}
      </div>
      <div className="reaction-wrapper" onMouseLeave={() => setDisplay(false)}>
        {display && (
          <ul className="reactions-box flex gap-4 justify-center mt-6">
            {reaction_constant?.map((reaction, index) => (
              <li
                key={reaction.title}
                className={`reaction `}
                data-reaction={reaction?.title}
                onClick={() => handleReaction(reaction)}
              >
                <div className="flex flex-col gap-2 hover:scale-[1.16] hover:translate-y-[-8px]  items-center relative cursor-pointer">
                  <p className="bg-black-primary bg-opacity-75 text-white text-[10px] text-center w-max px-2 absolute top-[-20px] rounded-[8px] reaction-text">
                    {reaction?.title}
                  </p>
                  <img
                    src={reaction?.icon}
                    alt={reaction?.title}
                    className="reaction-icon w-[48px]"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          className="btn btn-primary w-full reaction-trigger mt-6"
          onMouseEnter={() => setDisplay(true)}
        >
          Require reactions
        </button>
      </div>
    </>
  );
}
