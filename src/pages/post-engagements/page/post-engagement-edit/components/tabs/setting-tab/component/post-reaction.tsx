import React, { useState } from "react";
import LikeSvg from "../../../../../../../../assets/svg/reaction-icons/like.svg";
import HeartSvg from "../../../../../../../../assets/svg/reaction-icons/heart.svg";
import HahaSvg from "../../../../../../../../assets/svg/reaction-icons/haha.svg";
import WowSvg from "../../../../../../../../assets/svg/reaction-icons/wow.svg";
import SadSvg from "../../../../../../../../assets/svg/reaction-icons/sad.svg";
import AngrySvg from "../../../../../../../../assets/svg/reaction-icons/angry.svg";
import Badge from "../../../../../../../../components/atom/badge/badge";
interface IReaction {
  reaction: Array<{ title: string; icon: string }>;
}
export default function PostReaction() {
  const [reaction, setReaction] = useState<IReaction["reaction"]>([]);
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
    setReaction([...(reaction as IReaction["reaction"]), payload]);
  };
  const handleRemoveReaction = (title: string) => {
    setReaction(reaction?.filter((p) => p?.title !== title));
  };
  const handleReactionFilter = () => {
    return reaction_constant?.filter(
      (p) => !reaction?.find((r) => r?.title === p?.title)
    );
  };
  return (
    <>
      <div className="flex flex-wrap gap-3 my-2">
        {reaction?.map((reaction) => (
          <Badge
            handleClose={() => handleRemoveReaction(reaction?.title)}
            key={reaction?.title}
          >
            <img src={reaction?.icon} alt="like" className="w-4 h-4 mr-1" />
            <span className="text-14">{reaction?.title}</span>
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {handleReactionFilter()?.map((reaction) => (
          <div
            key={reaction.title}
            className="tooltip cursor-pointer"
            data-tip={reaction.title}
            onClick={() => handleReaction(reaction)}
          >
            <img
              src={reaction.icon}
              alt="like"
              className="xs:w-6 xs:h-6 lg:w-10 lg:h-10 hover:scale-125 ease-in-out duration-150 transition-all"
            />
          </div>
        ))}
      </div>
    </>
  );
}
