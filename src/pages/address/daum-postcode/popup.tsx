import { useState } from "react";
import { useDaumPostcodePopup, type Address } from "react-daum-postcode";

/**
 * 
 * react-daum-postcode에서 useDaumPostcodePopup을 사용할 때 scriptUrl은 필수 파라미터이지만, 실제로는 넣지 않아도 작동하는 경우가 있습니다. 그러나 공식적으로는 명시적으로 지정하는 것이 권장됩니다.
scriptUrl을 넣어야 하는 이유는 다음과 같습니다:

- 라이브러리 내부에서 기본값이 설정되어 있더라도, 명시적으로 지정하면 버전 변경이나 서비스 URL 변경에 대응하기 쉽습니다
- 코드의 가독성과 유지보수성이 향상됩니다.

현재 값이 일반적으로 사용되는 scriptURL. 그냥 갖다 넣으면 됨.
 */
const scriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const AddressDaumPostcodePopup = () => {
  const open = useDaumPostcodePopup(scriptUrl);
  const [addressData, setAddressData] = useState<Address | null>(null);

  const handleComplete = (data: Address) => {
    console.log(data);
    setAddressData(data);

    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleOpenClickEvent = () => {
    open({
      onComplete: handleComplete,
    });
  };

  return (
    <article className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-center">
        react-daum-postcode popup
      </h2>
      <button onClick={handleOpenClickEvent}>OPEN</button>
      {addressData && (
        <ul>
          {Object.entries(addressData).map(([key, value], index) => (
            <li key={`address-props__${index}`} className="flex gap-5 text-xl">
              <b className="min-w-64">{key}</b>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default AddressDaumPostcodePopup;
