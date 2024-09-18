import React from "react";
import Modal from "../../../../../../../../components/molecule/modal/modal";

export default function OpenPreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <p>Preview Image</p>
    </Modal>
  );
}
