import ButtonListTemplate, { ButtonListTempltateProps as LayoutListTempltateProps } from "../../components/shared/template/ButtonList";

const basePath = "/layout";

const layoutPageLinkItems:LayoutListTempltateProps['linkItems'] = [
  {
    path: `${basePath}/version01`,
    label: "version01"
  },
];

const LayoutsPage = () => {
  return <ButtonListTemplate title="LAYOUT" linkItems={layoutPageLinkItems}/>
};

export default LayoutsPage;