import "./reaction.css";
import React from "react";
import Badge from "../../atom/badge/badge";


export interface IReactionProps {
  reaction: { title: string; icon: string };
}
export interface IReactionHandlerProps {
  reactions: Array<IReactionProps["reaction"]>;
  selected_reactions: IReactionProps["reaction"][];
  onReactionSelect: (reaction: IReactionProps["reaction"][]) => void;
  btn_name?: string;
}


export default function ReactionHandler({
  reactions,
  onReactionSelect,
  selected_reactions,
  btn_name,
}: IReactionHandlerProps) {
  const [display, setDisplay] = React.useState(false);

  const handleReaction = (payload: IReactionProps['reaction']) => {
    if (selected_reactions?.find((p) => p?.title === payload?.title)) return;
    onReactionSelect([...(selected_reactions as IReactionProps["reaction"][]), payload]);
  };

  const handleRemoveReaction = (title: string) => {
    let filtered_value = selected_reactions?.filter((p) => p?.title !== title);
    onReactionSelect(filtered_value);
  };
  return (
    <>
      <div className="flex flex-wrap gap-3 mt-4">
        {selected_reactions?.map((reaction) => (
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
            {reactions?.map((reaction) => (
              <li
                key={reaction.title}
                className={`reaction `}
                data-reaction={reaction?.title}
                onClick={() => handleReaction(reaction)}
              >
                <div className="flex flex-col gap-2 hover:scale-[1.16] hover:translate-y-[-8px] ease-in-out duration-150 transition-all  items-center relative cursor-pointer">
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
          {btn_name ?? "Require reactions"}
        </button>
      </div>
    </>
  );
}
