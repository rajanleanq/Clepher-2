import React, { FormEvent } from "react";
import Modal from "../../../../../../components/atom/modal/modal";
import { Button } from "../../../../../../components/atom/button/button";

export default function DeleteModal({ onClose }: { onClose: () => void }) {
  const handleDelete = () => {};
  return (
    <Modal onClose={onClose}>
      <div onSubmit={handleDelete} className="flex flex-col gap-4">
        <p className="text-20 font-semibold  text-center">
          Are you sure you want to delete <br/> the selected entry?
        </p>
        <div className="flex items-center justify-between">
          <Button className="border rounded-lg" onClick={onClose}>Cancel</Button>
          <Button className="bg-blue-400 text-white">Confirm</Button>
        </div>
      </div>
    </Modal>
  );
}
