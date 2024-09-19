import LikeSvg from "../../../../../../../../assets/svg/reaction-icons/like.svg";
import HeartSvg from "../../../../../../../../assets/svg/reaction-icons/heart.svg";
import HahaSvg from "../../../../../../../../assets/svg/reaction-icons/haha.svg";
import WowSvg from "../../../../../../../../assets/svg/reaction-icons/wow.svg";
import SadSvg from "../../../../../../../../assets/svg/reaction-icons/sad.svg";
import AngrySvg from "../../../../../../../../assets/svg/reaction-icons/angry.svg";
import { useState } from "react";
import ReactionHandler, {
  IReactionProps,
} from "../../../../../../../../components/molecule/reaction-handler/reaction-handler";

export default function PostReaction() {
  const [reaction, setReaction] = useState<IReactionProps["reaction"][]>([]);
  const reaction_constant: IReactionProps["reaction"][] = [
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
  const handleReaction = (payload: IReactionProps["reaction"][]) => {
    setReaction(payload);
  };
  return (
    <>
      <ReactionHandler
        reactions={reaction_constant}
        onReactionSelect={handleReaction}
        selected_reactions={reaction}
      />
    </>
  );
}
