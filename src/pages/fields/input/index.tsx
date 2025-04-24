import NestedButtonListTemplate from "../../../components/shared/template/NestedButtonList";

const basePath = "/fields/input";

const inputPageLinkItems = [
  {
    path: `${basePath}/interaction-placeholder`,
    label: "interaction-placeholder",
  },
];

const InputPage = () => {
  return (
    <NestedButtonListTemplate
      title="INPUT"
      parentTitle="FIELDS"
      parentPath="/fields"
      linkItems={inputPageLinkItems}
    />
  );
};

export default InputPage;
