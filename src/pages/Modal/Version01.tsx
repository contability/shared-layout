import { useState } from "react";
import Modal from "../../components/shared/modal";

const ModalVersion01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>open</button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div className="bg-gray-200 text-3xl">
          <h3 className="text-black">Modal Version01</h3>
        </div>
      </Modal>
    </div>
  );
};

export default ModalVersion01;
