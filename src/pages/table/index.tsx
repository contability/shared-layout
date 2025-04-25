import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";

const basePath = "/table";

const tablePageLinkItems = [
  {
    path: `${basePath}/scrollable`,
    label: "scrollable",
  },
];

const TablePage = () => (
  <NestedButtonListTemplate
    title="TABLE"
    parentTitle="HOME"
    parentPath="/"
    linkItems={tablePageLinkItems}
  />
);

export default TablePage;
