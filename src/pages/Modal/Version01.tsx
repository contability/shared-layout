import { useState } from "react";
import Modal from "../../components/shared/modal";

const ModalVersion01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <div>
    <button onClick={() => setIsModalOpen(true)}>
      open
      </button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <p>열려라</p>
      </Modal>
  </div>
};

export default ModalVersion01;