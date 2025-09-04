import { useState, ReactNode } from "react";
import AlertModal from "../../pages/Modal/alert";
import Modal from "../../components/shared/modal";
import { ALLOWED_FILE_EXTENSIONS } from "../utils/fileValidation";

export type FileErrorType =
  | "duplicate"
  | "maxCount"
  | "maxSize"
  | "invalidExtension";

export interface FileErrorModalConfig {
  maxFileSizeMB: number;
  maxFileCount: number;
}

export interface FileErrorModalState {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

/**
 * 파일 에러 모달 관리 훅
 */
export const useFileErrorModals = (config: FileErrorModalConfig) => {
  const [activeErrorType, setActiveErrorType] = useState<FileErrorType | null>(
    null
  );

  const closeModal = () => setActiveErrorType(null);

  const showErrorModal = (errorType: FileErrorType) => {
    setActiveErrorType(errorType);
  };

  const getErrorModalContent = (errorType: FileErrorType): ReactNode => {
    const errorMessages: Record<FileErrorType, string[]> = {
      duplicate: ["Duplicate files detected. Please select different files."],
      maxCount: [
        `File registration cannot exceed ${config.maxFileCount} files.`,
      ],
      maxSize: [
        `Please register only files less than ${config.maxFileSizeMB}MB.`,
      ],
      invalidExtension: [
        "This is not a file format that can be registered.",
        "Please check the extensions that can be registered.",
        `[${ALLOWED_FILE_EXTENSIONS.join(", ")}]`,
      ],
    };

    return (
      <AlertModal onClose={closeModal} messages={errorMessages[errorType]} />
    );
  };

  const modalStates: Record<FileErrorType, FileErrorModalState> = {
    duplicate: {
      isOpen: activeErrorType === "duplicate",
      closeModal,
      children: getErrorModalContent("duplicate"),
    },
    maxCount: {
      isOpen: activeErrorType === "maxCount",
      closeModal,
      children: getErrorModalContent("maxCount"),
    },
    maxSize: {
      isOpen: activeErrorType === "maxSize",
      closeModal,
      children: getErrorModalContent("maxSize"),
    },
    invalidExtension: {
      isOpen: activeErrorType === "invalidExtension",
      closeModal,
      children: getErrorModalContent("invalidExtension"),
    },
  };

  const FileErrorModals = () => (
    <>
      {Object.entries(modalStates).map(([errorType, modalState]) => (
        <Modal key={errorType} {...modalState} />
      ))}
    </>
  );

  return {
    showErrorModal,
    FileErrorModals,
    isModalOpen: activeErrorType !== null,
    activeErrorType,
  };
};
