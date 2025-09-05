/**
 * 파일 유효성 검증 관련 유틸리티
 */

// 허용 가능한 파일 확장자
export const ALLOWED_FILE_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "pdf",
  "mp4",
  "avi",
  "mov",
  "wmv",
  "webp",
] as const;

export type AllowedFileExtension = (typeof ALLOWED_FILE_EXTENSIONS)[number];

export interface FileValidationConfig {
  maxFileSizeMB: number;
  maxFileCount: number;
  allowedExtensions: readonly string[];
}

export type FileErrorType =
  | "duplicate"
  | "maxCount"
  | "maxSize"
  | "invalidExtension";

/**
 * 파일 확장자 추출
 */
export const extractFileExtension = (fileName: string): string | null => {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex <= 0) return null;

  return fileName.substring(lastDotIndex + 1).toLowerCase();
};

/**
 * 파일 확장자 유효성 검사
 */
export const validateFileExtension = (
  file: File,
  allowedExtensions: readonly string[]
): boolean => {
  const extension = extractFileExtension(file.name);
  return extension ? allowedExtensions.includes(extension) : false;
};

/**
 * 파일 크기 유효성 검사
 */
export const validateFileSize = (file: File, maxSizeMB: number): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

/**
 * 중복 파일 검사
 */
export const hasDuplicateFiles = (
  existingFiles: File[],
  newFiles: File[]
): boolean => {
  return existingFiles.some((existingFile) =>
    newFiles.some((newFile) => existingFile.name === newFile.name)
  );
};

/**
 * 파일 개수 유효성 검사
 */
export const validateFileCount = (
  existingFileCount: number,
  newFileCount: number,
  maxFileCount: number
): boolean => {
  return existingFileCount + newFileCount <= maxFileCount;
};

/**
 * 종합적인 파일 유효성 검사 - 첫 번째 에러 타입만 반환
 */
export const validateFiles = (
  existingFiles: File[],
  newFiles: File[],
  config: FileValidationConfig
): FileErrorType | null => {
  // 중복 파일 검사
  if (hasDuplicateFiles(existingFiles, newFiles)) {
    return "duplicate";
  }

  // 파일 개수 검사
  if (
    !validateFileCount(
      existingFiles.length,
      newFiles.length,
      config.maxFileCount
    )
  ) {
    return "maxCount";
  }

  // 파일 크기 검사
  const hasInvalidSize = newFiles.some(
    (file) => !validateFileSize(file, config.maxFileSizeMB)
  );
  if (hasInvalidSize) {
    return "maxSize";
  }

  // 파일 확장자 검사
  const hasInvalidExtension = newFiles.some(
    (file) => !validateFileExtension(file, config.allowedExtensions)
  );
  if (hasInvalidExtension) {
    return "invalidExtension";
  }

  return null; // 모든 검사 통과
};
