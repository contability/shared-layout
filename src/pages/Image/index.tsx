import ButtonListTemplate, {
  ButtonListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/image";

const imagePageLinkItems: ButtonListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/pulse`,
    label: "pulse",
  },
  {
    path: `${basePath}/shimmer`,
    label: "shimmer",
  },
  {
    path: `${basePath}/pinch-zoom`,
    label: "pinch zoom",
  },
];

const ImagesPage = () => {
  return <ButtonListTemplate title="IMAGE" linkItems={imagePageLinkItems} />;
};

export default ImagesPage;
