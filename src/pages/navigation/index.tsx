import ButtonListTemplate, {
  ButtonListTempltateProps as LayoutListTempltateProps,
} from "../../components/shared/template/ButtonList";

const basePath = "/navigation";

const NavigationPageLinkItems: LayoutListTempltateProps["linkItems"] = [
  {
    path: `${basePath}/scroll-fade`,
    label: "scroll-fade",
  },
];

const NavigationPage = () => {
  return (
    <ButtonListTemplate
      title="NAVIGATION"
      linkItems={NavigationPageLinkItems}
    />
  );
};

export default NavigationPage;
