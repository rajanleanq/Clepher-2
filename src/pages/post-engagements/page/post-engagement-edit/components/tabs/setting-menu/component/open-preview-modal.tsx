import React from "react";
import Modal from "../../../../../../../../components/atom/modal/modal";

export default function OpenPreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <p>Preview Image</p>
    </Modal>
  );
}
