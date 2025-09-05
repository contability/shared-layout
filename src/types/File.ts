import { ChangeEvent, ReactNode } from "react";

/**
 * 파일 관리 훅의 설정 옵션
 */
export interface FileManagerOptions {
  /** 최대 파일 크기 (MB 단위) */
  maxFileSizeMB?: number;
  /** 최대 파일 개수 */
  maxFileCount?: number;
  /** 허용 가능한 파일 확장자 */
  allowedExtensions?: readonly string[];
}

/**
 * 파일 관리 훅의 반환 타입
 */
export interface FileManagerResult {
  /** 현재 관리 중인 파일 목록 */
  files: File[];
  /** 파일 추가 핸들러 */
  handleFileAdd: (event: ChangeEvent<HTMLInputElement>) => void;
  /** 특정 파일 제거 핸들러 */
  handleFileRemove: (fileIndex: number) => void;
  /** 모든 파일 제거 핸들러 */
  handleFilesClear: () => void;
  /** 파일 에러 모달 컴포넌트 */
  FileErrorModal: () => ReactNode;
}
