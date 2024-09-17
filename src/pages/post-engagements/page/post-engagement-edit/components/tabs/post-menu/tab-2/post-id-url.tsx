import React, { FormEvent } from "react";
import { Button } from "../../../../../../../../components/atom/button/button";

export default function PostIDUrl() {
  const handleFormEvent = (e: FormEvent) => {
    e.preventDefault();
    console.log("api call");
  };
  return (
    <form onSubmit={handleFormEvent} className="join w-full">
      <input
        placeholder="Specify Post ID / URL"
        className="input join-item w-full input-bordered focus:outline-offset-0"
      />
      <Button className="btn join-item btn-primary">Grab Post</Button>
    </form>
  );
}
