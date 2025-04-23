import {
  type InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
  type ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputIneractionLabel = (
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    type = "text",
    className = "",
    label,
    id,
    value,
    defaultValue,
    name,
    ...restProps
  } = props;
  const [hasValue, setHasValue] = useState<boolean>(!!value || !!defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setHasValue(!!value);
    }
  }, [value]);

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        {...restProps}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        autoComplete="new-password"
        placeholder=""
        id={id}
        aria-labelledby={label ? `${name}-label` : undefined}
        className={twMerge(
          "peer w-full rounded-lg border border-[#FFFFFF] p-3 focus:border-[#acacac] md:p-4 md:text-16-r",
          className
        )}
        onChange={(e) => {
          const newValue = e.target.value;
          setHasValue(newValue.length > 0);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
      {label && (
        <label
          id={`${id}-label`}
          htmlFor={id}
          className={`absolute left-3 bg-[#242424] text-14-r transition-[top,left,transform] cursor-auto ${
            hasValue
              ? "top-0 -translate-y-1/2 text-primary"
              : "top-1/2 -translate-y-1/2 md:left-5"
          } peer-focus:left-3 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-primary md:text-16-r`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

InputIneractionLabel.displayName = "Input";
export default forwardRef(InputIneractionLabel);
