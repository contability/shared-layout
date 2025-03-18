import ButtonListTemplate, { ButtonListTempltateProps } from "../../components/shared/template/ButtonList";

const basePath = "/text";

const textPageLinkItems:ButtonListTempltateProps['linkItems'] = [
  {
    path: `${basePath}/version01`,
    label: "version01"
  }
];

const TextPage= () => {
  return (
  <ButtonListTemplate title="TEXT" linkItems={textPageLinkItems}/>
)
};

export default TextPage