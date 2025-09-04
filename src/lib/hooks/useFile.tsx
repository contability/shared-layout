"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { FileManagerOptions, FileManagerResult } from "../../types/File";
import { useFileErrorModals } from "./useFileErrorModals";
import {
  validateFiles,
  ALLOWED_FILE_EXTENSIONS,
} from "../utils/fileValidation";

/**
 * 파일 관리 훅
 * 파일 업로드, 삭제, 유효성 검증 등을 관리한다
 */
const useFileManager = (options?: FileManagerOptions): FileManagerResult => {
  const {
    maxFileSizeMB = 50,
    maxFileCount = 5,
    allowedExtensions = ALLOWED_FILE_EXTENSIONS,
  } = options || {};

  const [files, setFiles] = useState<File[]>([]);

  // 에러 모달 관리 훅
  const {
    showErrorModal,
    FileErrorModals,
    isModalOpen: isErrorModalOpen,
  } = useFileErrorModals({
    maxFileSizeMB,
    maxFileCount,
  });

  // 파일 유효성 검증 설정
  const validationConfig = useMemo(
    () => ({
      maxFileSizeMB,
      maxFileCount,
      allowedExtensions,
    }),
    [maxFileSizeMB, maxFileCount, allowedExtensions]
  );

  /**
   * 파일 추가 핸들러
   */
  const handleFileAdd = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newFiles: File[] = Array.from(event.target.files || []);
      if (newFiles.length === 0) return;

      const validationResult = validateFiles(files, newFiles, validationConfig);

      if (!validationResult.isValid && validationResult.errorType) {
        showErrorModal(validationResult.errorType);
        return;
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    },
    [files, validationConfig, showErrorModal]
  );

  /**
   * 특정 파일 제거 핸들러
   */
  const handleFileRemove = useCallback((fileIndex: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  }, []);

  /**
   * 모든 파일 제거 핸들러
   */
  const handleFilesClear = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    handleFileAdd,
    handleFileRemove,
    handleFilesClear,
    FileErrorModals,
    isErrorModalOpen,
  };
};

export default useFileManager;
