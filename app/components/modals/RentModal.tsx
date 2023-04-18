"use client";
import useRentModal from "@/app/hooks/useRentModal";

import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      title="Airbnb your home!"
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      isOpen={rentModal.isOpen}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
