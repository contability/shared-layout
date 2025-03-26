import ButtonListTemplate, { ButtonListTempltateProps } from "../../components/shared/template/ButtonList";

const basePath = "/modal";

const modalPageLinkItems:ButtonListTempltateProps['linkItems'] = [
  {
    path: `${basePath}/version01`,
    label: "version01"
  },
];

const ModalsPage = () => {
  return <ButtonListTemplate title="MODAL" linkItems={modalPageLinkItems}/>
};

export default ModalsPage;