import { useState, useCallback } from "react";
import AlertModal from "../../pages/Modal/alert";
import Modal from "../../components/shared/modal";
import { FileErrorType } from "../utils/fileValidation";

interface FileErrorModalConfig {
  maxFileSizeMB: number;
  maxFileCount: number;
  allowedExtensions: readonly string[];
}

/**
 * 파일 에러 모달 관리 훅
 * 모달 상태 관리와 렌더링만 담당
 */
export const useFileErrorModal = (config: FileErrorModalConfig) => {
  const [activeErrorType, setActiveErrorType] = useState<FileErrorType | null>(
    null
  );

  const showErrorModal = useCallback((errorType: FileErrorType) => {
    setActiveErrorType(errorType);
  }, []);

  const closeErrorModal = useCallback(() => {
    setActiveErrorType(null);
  }, []);

  // 에러 메시지 매핑
  const getErrorMessages = useCallback(
    (errorType: FileErrorType): string[] => {
      const errorMessages: Record<FileErrorType, string[]> = {
        duplicate: ["중복된 파일이 감지되었습니다. 다른 파일을 선택해주세요."],
        maxCount: [
          `파일 등록은 ${config.maxFileCount}개를 초과할 수 없습니다.`,
        ],
        maxSize: [`${config.maxFileSizeMB}MB 미만의 파일만 등록해주세요.`],
        invalidExtension: [
          "등록할 수 없는 파일 형식입니다.",
          "등록 가능한 확장자를 확인해주세요.",
          `[${config.allowedExtensions.join(", ")}]`,
        ],
      };
      return errorMessages[errorType];
    },
    [config.maxFileCount, config.maxFileSizeMB, config.allowedExtensions]
  );

  const FileErrorModal = useCallback(
    () => (
      <Modal isOpen={!!activeErrorType} onClose={closeErrorModal}>
        {activeErrorType && (
          <AlertModal
            onClose={closeErrorModal}
            messages={getErrorMessages(activeErrorType)}
          />
        )}
      </Modal>
    ),
    [activeErrorType, closeErrorModal, getErrorMessages]
  );

  return {
    showErrorModal,
    FileErrorModal,
    isModalOpen: !!activeErrorType,
  };
};
