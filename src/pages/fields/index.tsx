import ButtonListTemplate, {
  ButtonListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/fields";

const fieldsPageLinkItems: ButtonListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/input/interaction-placeholder`,
    label: "input interaction-placeholder",
  },
];

const FieldsPage = () => {
  return <ButtonListTemplate title="FIELDS" linkItems={fieldsPageLinkItems} />;
};

export default FieldsPage;
