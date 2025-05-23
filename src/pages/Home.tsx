import ButtonListTemplate, {
  ButtonListTempltateProps,
} from "../components/shared/template/ButtonList";

const homePageLinkItems: ButtonListTempltateProps["linkItems"] = [
  {
    path: "/text",
    label: "text layout",
  },
  {
    path: "/image",
    label: "image layout",
  },
  {
    path: "/layout",
    label: "UI layout",
  },
  {
    path: "/modal",
    label: "modal layout",
  },
  {
    path: "/file",
    label: "file layout",
  },
  {
    path: "/in-view",
    label: "intersection-observer layout",
  },
  {
    path: "/navigation",
    label: "navigation layout",
  },
  {
    path: "/fields",
    label: "fields layout",
  },
  {
    path: "/table",
    label: "table layout",
  },
];

const HomePage = () => {
  return <ButtonListTemplate title="HOME" linkItems={homePageLinkItems} />;
};

export default HomePage;
