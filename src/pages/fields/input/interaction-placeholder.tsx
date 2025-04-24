import { useCallback, useState } from "react";
import InputIneractionLabel from "../../../components/shared/fields/input/interaction-label";
import React from "react";

const InputInteractionPlaceHolder = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 안정적인 이벤트 처리를 위한 함수
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">인터랙션 플레이스홀더</h2>
        <p className="text-gray-400 mb-6">
          이 예제는 사용자가 입력할 때 라벨이 위로 이동하는 상호작용 방식을
          보여준다. 입력 필드가 포커스를 받거나 값이 있을 때 라벨이 위치를
          변경한다.
        </p>
      </div>

      <div className="grid gap-6">
        <div>
          <InputIneractionLabel
            label="사용자 이름"
            name="username"
            id="username-input"
            onChange={handleChange}
            value={values.username}
            className="bg-gray-700 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div>
          <InputIneractionLabel
            label="이메일"
            name="email"
            id="email-input"
            type="email"
            onChange={handleChange}
            value={values.email}
            className="bg-gray-700 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div>
          <InputIneractionLabel
            label="비밀번호"
            name="password"
            id="password-input"
            type="password"
            onChange={handleChange}
            value={values.password}
            className="bg-gray-700 border-gray-600 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-700 rounded-lg">
        <h3 className="text-lg font-medium mb-2">현재 입력값:</h3>
        <pre className="bg-gray-800 p-3 rounded overflow-auto">
          {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default InputInteractionPlaceHolder;
