import { useState } from "react";
import { useDaumPostcodePopup, type Address } from "react-daum-postcode";

const AddressDaumPostcodePopup = () => {
  const open = useDaumPostcodePopup();
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
