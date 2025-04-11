"use client";

import { ChangeEvent, useCallback, useState } from "react";
import AlertModal from "../../pages/Modal/alert";
import Modal from "../../components/shared/modal";

interface UseFileProps {
  maxFileSize?: number;
  maxFileAmount?: number;
}

const useFile = (props?: UseFileProps) => {
  const { maxFileSize = 50, maxFileAmount = 5 } = props || {};
  // default - 50MB
  const MAX_FILE_SIZE_BYTES = maxFileSize * 1024 * 1024;
  // default - 5EA
  const MAX_FILE_AMOUNT = maxFileAmount;
  // 사용 가능한 확장자
  const EXTENSION = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "pdf",
    "mp4",
    "avi",
    "mov",
    "wmv",
  ];

  // file 객체 state
  const [files, setFiles] = useState<File[]>([]);

  // #region 모달
  /** 파일 개수 초과 모달 props */
  const [isMaxAmountModalOpen, setIsMaxAmountModalOpen] = useState(false);
  const model_maxAmountModal = {
    isOpen: isMaxAmountModalOpen,
    closeModal: () => setIsMaxAmountModalOpen(false),
    children: (
      <AlertModal
        onClose={() => setIsMaxAmountModalOpen(false)}
        messages={[`File registration cannot exceed ${MAX_FILE_AMOUNT} files.`]}
      />
    ),
  };

  /** 파일 크기 초과 모달 props */
  const [isMaxSizeModalOpen, setIsMaxSizeModalOpen] = useState(false);
  const model_maxSizeModal = {
    isOpen: isMaxSizeModalOpen,
    closeModal: () => setIsMaxSizeModalOpen(false),
    children: (
      <AlertModal
        onClose={() => setIsMaxSizeModalOpen(false)}
        messages={[`Please register only files less than ${maxFileSize}MB.`]}
      />
    ),
  };

  /** 파일 확장자 모달 props */
  const [isExtensionModalOpen, setIsExtensionModalOpen] = useState(false);
  const model_extensionModal = {
    isOpen: isExtensionModalOpen,
    closeModal: () => setIsExtensionModalOpen(false),
    children: (
      <AlertModal
        onClose={() => setIsExtensionModalOpen(false)}
        messages={[
          `This is not a file format that can be registered.`,
          `Please check the extensions that can be registered.`,
          `[${EXTENSION.join(", ")}]`,
        ]}
      />
    ),
  };
  // #endregion

  // #region 파일 유효성 검사
  /**
   *  파일 유효성 검사 함수
   * @param fileDatas 새로 등록될 파일 목록
   * @returns 유효성 검사 통과 여부
   */
  const checkFiles = (fileDatas: File[]) => {
    // 기존 state의 파일 개수 + 새로 등록될 파일 개수가 MAX FILE AMOUNT에서 정한 개수를 넘어간다면
    if (files.length + fileDatas.length > MAX_FILE_AMOUNT) {
      setIsMaxAmountModalOpen(true);
      return false;
    }

    // 파일 용량 체크
    const isValidFileSize = fileDatas.every(
      (file) => file.size <= MAX_FILE_SIZE_BYTES
    );
    if (!isValidFileSize) {
      setIsMaxSizeModalOpen(true);
      return false;
    }

    // 파일 확장자 체크
    const isValidFileExtension = fileDatas.every((file) => {
      if (file.name.lastIndexOf(".") > 0) {
        const fileExtension = file.name.substring(
          file.name.lastIndexOf(".") + 1,
          file.name.length
        );
        return EXTENSION.includes(fileExtension);
      }
      return false;
    });

    if (!isValidFileExtension) {
      setIsExtensionModalOpen(true);
      return false;
    }

    return true;
  };

  /** 파일 state 등록 */
  const setFilesData = (e: ChangeEvent<HTMLInputElement>) => {
    const fileDatas: File[] = Array.from(e.target.files || []);

    if (checkFiles(fileDatas)) setFiles([...files, ...fileDatas]);
  };

  /** 파일 state에서 파일 제거 */
  const removeFileData = useCallback(
    (fileIndex: number) => {
      const removeFiles = files.filter((_, index) => index !== fileIndex);
      setFiles(removeFiles);
    },
    [files]
  );

  /** 파일 state 내 파일 모두 제거 */
  const clearFileData = useCallback(() => {
    setFiles([]);
  }, []);

  /** 에러 모달 모음 */
  const ErrorModals = () => (
    <>
      <Modal {...model_extensionModal} />
      <Modal {...model_maxAmountModal} />
      <Modal {...model_maxSizeModal} />
    </>
  );

  return {
    files,
    setFilesData,
    removeFileData,
    clearFileData,
    ErrorModals,
  };
};

export default useFile;
