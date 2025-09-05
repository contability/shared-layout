"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { FileManagerOptions, FileManagerResult } from "../../types/File";
import { useFileErrorModal } from "./useFileErrorModal";
import {
  validateFiles,
  ALLOWED_FILE_EXTENSIONS,
} from "../utils/fileValidation";

/**
 * 파일 관리 훅
 * 파일 상태 관리에만 집중
 */
const useFileManager = (options?: FileManagerOptions): FileManagerResult => {
  const {
    maxFileSizeMB = 50,
    maxFileCount = 5,
    allowedExtensions = ALLOWED_FILE_EXTENSIONS,
  } = options || {};

  const [files, setFiles] = useState<File[]>([]);

  // 파일 유효성 검증 설정
  const validationConfig = useMemo(
    () => ({
      maxFileSizeMB,
      maxFileCount,
      allowedExtensions,
    }),
    [maxFileSizeMB, maxFileCount, allowedExtensions]
  );

  // 에러 모달 관리 (별도 관심사)
  const { showErrorModal, FileErrorModal } = useFileErrorModal({
    maxFileSizeMB,
    maxFileCount,
    allowedExtensions,
  });

  /**
   * 파일 추가 핸들러
   */
  const handleFileAdd = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newFiles: File[] = Array.from(event.target.files || []);
      if (newFiles.length === 0) return;

      const errorType = validateFiles(files, newFiles, validationConfig);

      if (errorType) {
        showErrorModal(errorType);
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
    FileErrorModal,
  };
};

export default useFileManager;
