import React, { FormEvent } from "react";
import Modal from "../../../../../../components/atom/modal/modal";
import { Button } from "../../../../../../components/atom/button/button";

export default function RenameModal({ onClose }: { onClose: () => void }) {
  const handleRename = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleRename} className="flex flex-col gap-4">
        <p>Please enter a new name:</p>
        <input className="input input-bordered" placeholder="Enter new name" />
        <div className="flex items-center justify-between">
          <Button className="border rounded-lg" onClick={onClose}>Cancel</Button>
          <Button className="bg-blue-400 text-white">Confirm</Button>
        </div>
      </form>
    </Modal>
  );
}
