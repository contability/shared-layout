"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import ModalContainer from "./container";
import { FocusTrap } from "focus-trap-react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.querySelector("#root-modal");
      setPortalElement(element);
    }
  }, []);
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  if (portalElement) {
    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <ModalContainer closeModal={closeModal}>
            <motion.div
              className="block px-4"
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 20,
                opacity: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
            >
              <FocusTrap
                active={isOpen}
                focusTrapOptions={{
                  // 포커스 가능한 요소가 없어도 에러가 발생하지 않도록
                  fallbackFocus: "#root-modal",
                  clickOutsideDeactivates: true,
                }}
              >
                {children}
              </FocusTrap>
            </motion.div>
          </ModalContainer>
        )}
      </AnimatePresence>,
      portalElement,
      "root-modal"
    );
  }
  return <></>;
};

export default Modal;
