import { FormEvent } from "react";
import { Button } from "../../../../../../../../components/atom/button/button";

export default function PostIDUrl() {
  const handleFormEvent = (e: FormEvent) => {
    e.preventDefault();
    console.log("api call");
  };
  return (
    <form onSubmit={handleFormEvent} className="flex place-content-center">
      <div className="join mt-10">
        <input
          placeholder="Post ID / URL"
          className="input join-item w-96 input-bordered focus:outline-offset-0"
          value=""
        />
        <Button className="btn join-item btn-primary">Grab Post</Button>
      </div>
    </form>
  );
}
