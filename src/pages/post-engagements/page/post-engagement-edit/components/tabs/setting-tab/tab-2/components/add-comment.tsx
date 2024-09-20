import React, { useState } from "react";
import { Button } from "../../../../../../../../../components/atom/button/button";

export default function AddComment() {
  const [comments, setComments] = useState<Array<string>>([""]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? e.target.value : comment
    );
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (comments?.length !== 10) {
      setComments((prev) => [...prev, ""]);
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {comments.map((item, index) => (
        <div
          key={index}
          className="bg-base-200 p-1.5 mb-1.5 rounded-md border border-dotted border-base-300"
        >
          <div className="flex flex-row items-center gap-1.5">
            <input
              type="text"
              placeholder="Type your comment here"
              className="input w-full focus:outline-offset-0"
              onChange={(e) => handleInputChange(e, index)}
              value={item}
            />
            <Button
              className="btn btn-sm btn-circle btn-ghost rounded-full"
              onClick={() => handleDeleteComment(index)}
            >
              ✕
            </Button>
          </div>
        </div>
      ))}
      {comments?.length !== 10 && (
        <Button
          onClick={handleAddComment}
          className="btn btn-primary btn-md font-semibold w-max mx-auto mt-1"
        >
          Add Comment
        </Button>
      )}
    </div>
  );
}
