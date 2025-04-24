import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/navigation";

const navigationCategories: CategoryItem[] = [
  {
    path: `${basePath}/scroll-fade`,
    label: "scroll-fade",
    description: "스크롤 위치에 따라 내비게이션 모양이 변경되는 효과",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const navigationPageLinkItems = [
  {
    path: `${basePath}/scroll-fade`,
    label: "scroll-fade",
  },
];

const NavigationPage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/navigation";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="NAVIGATION"
          description="웹사이트 내비게이션 관련 컴포넌트 및 효과"
          categories={navigationCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="NAVIGATION"
          parentTitle="HOME"
          parentPath="/"
          linkItems={navigationPageLinkItems}
        />
      )}
    </>
  );
};

export default NavigationPage;
