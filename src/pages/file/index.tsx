import ButtonListTemplate, {
  ButtonListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/file";

const filePageLinkItems: ButtonListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const FilePage = () => {
  return <ButtonListTemplate title="FILE" linkItems={filePageLinkItems} />;
};

export default FilePage;
