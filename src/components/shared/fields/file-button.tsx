import { ChangeEvent } from "react";

interface FileButtonProps {
  label?: string;
  id?: string;
  colorType?: "default" | "line" | "point" | "color" | "white";
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileButton = ({
  label = "",
  id,
  className = "",
  onChange,
}: FileButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={`flex justify-center items-center rounded-[0.8rem] text-[1.3rem] md:text-[1.4rem] font-semibold tracking-[0.26px] md:tracking-[0.28px] transition-custom__all cursor-pointer h-[4.2rem] ${className}`}
    >
      <input
        className="hidden"
        type="file"
        id={id}
        onChange={onChange}
        accept="video/*|image/*|audio/*"
        multiple
      />
      <span>{label}</span>
    </label>
  );
};

export default FileButton;
