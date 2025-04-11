import ButtonListTemplate, {
  ButtonListTempltateProps as LayoutListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/in-view";

const inViewPageLinkItems: LayoutListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const InViewPage = () => {
  return (
    <ButtonListTemplate
      title="Intersection Observer"
      linkItems={inViewPageLinkItems}
    />
  );
};

export default InViewPage;
