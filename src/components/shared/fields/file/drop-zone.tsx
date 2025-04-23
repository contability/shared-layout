import { ChangeEvent, DragEvent, ReactNode, useRef, useState } from "react";

/**
 * DropZone 컴포넌트 Props 인터페이스
 * @property {ReactNode} children - 컴포넌트 내부에 렌더링할 자식 요소
 * @property {string} className - 추가적인 CSS 클래스명 (기본값: "")
 * @property {Function} onChange - 파일 입력 변경 시 호출될 콜백 함수
 * @property {Function} onDropFiles - 파일이 드롭되었을 때 호출될 콜백 함수
 */
interface DropZoneProps {
  children?: ReactNode;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onDropFiles?: (files: File[]) => void;
}

/**
 * 파일 드래그 앤 드롭을 지원하는 컴포넌트
 * 사용자가 영역에 파일을 드래그하거나 클릭하여 파일을 선택할 수 있음
 */
const DropZone = ({
  children,
  className = "",
  onChange,
  // onDropFiles,
}: DropZoneProps) => {
  // 드래그 상태를 관리하는 state (드래그 중일 때 UI 변경에 사용)
  const [isDragging, setIsDragging] = useState(false);

  // 숨겨진 file input 요소에 접근하기 위한 ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * 드래그가 시작될 때 호출되는 이벤트 핸들러
   * 요소 위로 파일이 드래그될 때 발생
   * @param {DragEvent} e - 드래그 이벤트 객체
   */
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 브라우저 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    setIsDragging(true); // 드래그 상태를 true로 설정
  };

  /**
   * 드래그가 떠날 때 호출되는 이벤트 핸들러
   * 요소 밖으로 드래그가 나갈 때 발생
   * @param {DragEvent} e - 드래그 이벤트 객체
   */
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 브라우저 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    setIsDragging(false); // 드래그 상태를 false로 설정
  };

  /**
   * 드래그 중 호출되는 이벤트 핸들러
   * 요소 위에서 드래그가 계속될 때 반복적으로 발생
   * @param {DragEvent} e - 드래그 이벤트 객체
   */
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 브라우저 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    if (!isDragging) {
      setIsDragging(true); // 드래그 상태가 아직 true가 아니면 true로 설정
    }
  };

  // const handleDropFiles = (droppedFiles: File[]) => {
  //   const customEvent = {
  //     target: {
  //       files: droppedFiles,
  //     },
  //   } as unknown as React.ChangeEvent<HTMLInputElement>;

  //   setFilesData(customEvent);
  // };

  /**
   * 파일이 드롭될 때 호출되는 이벤트 핸들러
   * 사용자가 파일을 영역에 놓았을 때 발생
   * @param {DragEvent} e - 드래그 이벤트 객체
   */
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 브라우저 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    setIsDragging(false); // 드래그 상태를 false로 설정

    // dataTransfer에서 파일 목록을 배열로 변환
    const files = Array.from(e.dataTransfer.files);

    // 파일이 하나 이상 있고 onDropFiles 콜백이 제공된 경우 호출
    if (files.length > 0 && onChange) {
      // ChangeEvent를 커스텀으로 만들어서 onChange 아규먼트로 주고 함수 실행
      const customEvent = {
        target: {
          files: files,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(customEvent);
    }
  };

  /**
   * 컴포넌트 클릭 시 호출되는 핸들러
   * 클릭하면 숨겨진 file input을 트리거
   */
  const handleClick = () => {
    // optional chaining으로 fileInputRef.current가 존재할 때만 click() 호출
    fileInputRef.current?.click();
  };

  return (
    <div
      // 클래스명 조합: 기본 클래스 + 사용자 정의 클래스 + 드래그 중 스타일링
      className={`relative ${className} ${
        isDragging ? "bg-gray-100 border-dashed border-2 border-blue-400" : ""
      }`}
      onDragEnter={handleDragEnter} // 드래그 진입 이벤트 핸들러
      onDragLeave={handleDragLeave} // 드래그 이탈 이벤트 핸들러
      onDragOver={handleDragOver} // 드래그 오버 이벤트 핸들러
      onDrop={handleDrop} // 드롭 이벤트 핸들러
      onClick={handleClick} // 클릭 이벤트 핸들러
    >
      {/* 
        숨겨진 파일 입력 요소
        - hidden 클래스로 화면에 표시되지 않음
        - ref로 JavaScript에서 접근 가능
        - accept로 허용되는 파일 타입 제한 (비디오, 이미지, 오디오)
        - multiple 속성으로 다중 파일 선택 허용
      */}
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        onChange={onChange} // 파일 선택 시 실행되는 콜백
        accept="video/*|image/*|audio/*" // 허용되는 파일 타입 지정
        multiple // 다중 파일 선택 허용
      />

      {/* 컴포넌트의 자식 요소 렌더링 */}
      {children}

      {/* 
        드래그 중일 때만 표시되는 오버레이
        - absolute 포지셔닝으로 컨테이너 전체 영역 덮음
        - pointer-events-none로 마우스 이벤트 무시하여 하위 요소로 전달
      */}
      {isDragging && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 bg-opacity-70 pointer-events-none">
          <p className="text-blue-500 font-medium">파일을 여기에 놓으세요</p>
        </div>
      )}
    </div>
  );
};

export default DropZone;
