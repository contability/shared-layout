import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import type { UseFormRegisterReturn } from "react-hook-form";
import { IdNamePair } from "../../../../types/Common";
import { parseValue } from "../../../../lib/utils/common";

/**
 * 드롭다운 선택 상자 컴포넌트의 속성 인터페이스
 * @param optionList - 선택 가능한 옵션 목록 (id와 name 쌍)
 * @param value - 현재 선택된 값
 * @param label - 선택 상자 위에 표시되는 레이블 (선택 사항)
 * @param register - react-hook-form의 register 객체 (선택 사항)
 */
interface DefaultSelectBoxProps {
  optionList: IdNamePair[];
  value: string;
  label?: string;
  register?: UseFormRegisterReturn;
}

/**
 * 기본 선택 상자 컴포넌트
 * 드롭다운 메뉴를 통한 항목 선택 기능 제공
 * react-hook-form과 통합 가능
 */
const DefaultSelectBox = ({
  optionList,
  value,
  label,
  register,
}: DefaultSelectBoxProps) => {
  // 드롭다운 메뉴의 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);
  // 드롭다운 버튼에 대한 참조
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 현재 선택된 옵션의 이름을 찾음, 없으면 '전체'를 기본값으로 사용
  const selectedOption =
    optionList.find((option) => parseValue(option.id) === parseValue(value))
      ?.name || "전체";

  // 컴포넌트 외부 클릭 감지 및 드롭다운 닫기 처리
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /**
   * 옵션 선택 처리 함수
   * register가 있을 경우 react-hook-form에 값 업데이트
   * @param optionId - 선택된 옵션의 ID
   */
  const handleSelectOption = (optionId: string | number) => {
    if (register) {
      register.onChange({
        target: {
          name: register.name,
          value: parseValue(optionId),
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* 선택 상자 버튼 */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex w-full items-center justify-between rounded-lg border border-primary-200 bg-white p-3 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 md:p-4 ${
          isOpen ? "border-primary-500" : "border-primary-200"
        }`}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <p className="text-14-r text-black md:text-16-r">{selectedOption}</p>
        {/* 화살표 아이콘 (열림/닫힘 상태에 따라 회전) */}
        <MdOutlineKeyboardArrowDown
          size={24}
          className={`text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
        {/* 레이블이 있는 경우 표시 */}
        {label && (
          <span className="absolute left-3 top-0 -translate-y-1/2 bg-white text-14-r md:text-16-r text-black">
            {label}
          </span>
        )}
      </button>
      {/* 드롭다운 메뉴 (열린 상태일 때만 표시) */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full rounded-lg border  border-primary-500 bg-white py-2 shadow-lg animate-in fade-in slide-in-from-top-5"
        >
          {/* 옵션 목록 렌더링 */}
          {optionList.map((option) => (
            <li
              key={`select-box__link-${option.id}`}
              role="option"
              aria-selected={String(option.id) === String(value)}
            >
              <button
                onClick={() => handleSelectOption(option.id)}
                className={`flex w-full  items-center justify-between px-3 py-2 text-14-r hover:bg-primary-100 ${String(option.id) === String(value) ? "bg-accent-50" : ""}`}
              >
                <span className="text-black">{option.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* react-hook-form 통합을 위한 숨겨진 입력 필드 */}
      {register && <input type="hidden" aria-hidden="true" {...register} />}
    </div>
  );
};

export default DefaultSelectBox;
