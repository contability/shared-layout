import ButtonListTemplate, { ButtonListTempltateProps as LayoutListTempltateProps } from "../../components/shared/template/ButtonList";

const basePath = "/layout";

const layoutPageLinkItems:LayoutListTempltateProps['linkItems'] = [
  {
    path: `${basePath}/content`,
    label: "content"
  },
];

const LayoutsPage = () => {
  return <ButtonListTemplate title="LAYOUT" linkItems={layoutPageLinkItems}/>
};

export default LayoutsPage;