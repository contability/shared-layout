import { useState } from "react";
import Modal from "../../components/shared/modal";
import AlertModal from "./alert";

const ModalVersion01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>open</button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <AlertModal
          messages={["Modal Version01"]}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ModalVersion01;
