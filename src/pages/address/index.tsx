import ButtonListTemplate, {
  ButtonListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/address";

const addressPageLinkItems: ButtonListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/daum-postcode/embed`,
    label: "DAUM(KAKAO) - embed",
  },
  {
    path: `${basePath}/daum-postcode/popup`,
    label: "DAUM(KAKAO) - popup",
  },
];

const AddressPage = () => {
  return (
    <ButtonListTemplate title="ADDRESS" linkItems={addressPageLinkItems} />
  );
};

export default AddressPage;
