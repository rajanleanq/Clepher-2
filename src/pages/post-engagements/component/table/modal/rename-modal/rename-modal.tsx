import React, { FormEvent } from "react";
import Modal from "../../../../../../components/molecule/modal/modal";
import { Button } from "../../../../../../components/atom/button/button";
import { Input } from "../../../../../../components/atom/input/input";

export default function RenameModal({ onClose }: { onClose: () => void }) {
  const handleRename = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleRename} className="flex flex-col gap-4">
        <p>Please enter a new name:</p>
        <Input className="input input-bordered" placeholder="Enter new name" />
        <div className="flex items-center justify-between">
          <Button
            className="btn btn-error btn-outline btn-sm"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button className="btn btn-primary btn-sm text-white">Confirm</Button>
        </div>
      </form>
    </Modal>
  );
}
