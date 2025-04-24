import NestedButtonListTemplate from "../../../components/shared/template/NestedButtonList";

const basePath = "/fields/select-box";

const SelectboxPageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const SelectBoxPage = () => {
  return (
    <NestedButtonListTemplate
      title="SELECT BOX"
      parentTitle="FIELDS"
      parentPath="/fields"
      linkItems={SelectboxPageLinkItems}
    />
  );
};

export default SelectBoxPage;
