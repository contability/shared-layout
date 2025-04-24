import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/layout";

const layoutCategories: CategoryItem[] = [
  {
    path: `${basePath}/content`,
    label: "content",
    description: "콘텐츠 레이아웃 컴포넌트",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
];

const layoutPageLinkItems = [
  {
    path: `${basePath}/content`,
    label: "content",
  },
];

const LayoutsPage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/layout";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="LAYOUT"
          description="다양한 레이아웃 컴포넌트 예제 모음"
          categories={layoutCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="LAYOUT"
          parentTitle="HOME"
          parentPath="/"
          linkItems={layoutPageLinkItems}
        />
      )}
    </>
  );
};

export default LayoutsPage;
