import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

interface ModalContainerProps {
  closeModal: () => void;
}

const ModalContainer = ({
  closeModal,
  children,
}: PropsWithChildren<ModalContainerProps>) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="fixed inset-0 z-[1] flex h-dvh bg-black/70"
      onClick={closeModal}
    >
      <div
        className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
        // 부모 요소인 Overlay의 onClick 이벤트(closeModal)가 전파되지 않도록 막음.
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ModalContainer;
