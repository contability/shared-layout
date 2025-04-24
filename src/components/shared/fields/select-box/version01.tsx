import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import type { UseFormRegisterReturn } from "react-hook-form";
import { IdNamePair } from "../../../../types/Common";
import { parseValue } from "../../../../lib/utils/common";

interface DefaultSelectBoxProps {
  optionList: IdNamePair[];
  value: string;
  label?: string;
  register?: UseFormRegisterReturn;
}

const DefaultSelectBox = ({
  optionList,
  value,
  label,
  register,
}: DefaultSelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption =
    optionList.find((option) => parseValue(option.id) === parseValue(value))
      ?.name || "전체";

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
        <MdOutlineKeyboardArrowDown
          size={24}
          className={`text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
        {label && (
          <span className="absolute left-3 top-0 -translate-y-1/2 bg-white text-14-r md:text-16-r text-black">
            {label}
          </span>
        )}
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full rounded-lg border  border-primary-500 bg-white py-2 shadow-lg animate-in fade-in slide-in-from-top-5"
        >
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
      {register && <input type="hidden" aria-hidden="true" {...register} />}
    </div>
  );
};

export default DefaultSelectBox;
