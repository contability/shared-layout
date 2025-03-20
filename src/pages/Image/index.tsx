import ButtonListTemplate, { ButtonListTempltateProps } from "../../components/shared/template/ButtonList";

const basePath = "/image";

const imagePageLinkItems:ButtonListTempltateProps['linkItems'] = [
  {
    path: `${basePath}/version01`,
    label: "version01"
  },
  {
    path: `${basePath}/version02`,
    label: "version02"
  }
];

const ImagesPage = () => {
  return <ButtonListTemplate title="IMAGE" linkItems={imagePageLinkItems}/>
};

export default ImagesPage;