import NestedButtonListTemplate from "../../../components/shared/template/NestedButtonList";

const basePath = "/fields/progress";

const progressPageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const ProgressPage = () => {
  return (
    <NestedButtonListTemplate
      title="PROGRESS"
      parentTitle="FIELDS"
      parentPath="/fields"
      linkItems={progressPageLinkItems}
    />
  );
};

export default ProgressPage;
