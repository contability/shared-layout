import { useCallback } from "react";
import InputIneractionLabel from "../../../components/shared/fields/input/interaction-label";
import React from "react";

const InputInteractionPlaceHolder = () => {
  // 안정적인 이벤트 처리를 위한 함수
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    console.log(e.target.value);
  }, []);

  return (
    <InputIneractionLabel
      label="PLACEHOLDER"
      name="test"
      id="label-input"
      onChange={handleChange}
    />
  );
};

export default InputInteractionPlaceHolder;
