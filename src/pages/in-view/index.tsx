import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/in-view";

const inViewCategories: CategoryItem[] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
    description: "Intersection Observer API를 활용한 요소 가시성 감지",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

const inViewPageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const InViewPage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/in-view";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="Intersection Observer"
          description="요소의 가시성을 감지하는 컴포넌트 및 효과"
          categories={inViewCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="Intersection Observer"
          parentTitle="HOME"
          parentPath="/"
          linkItems={inViewPageLinkItems}
        />
      )}
    </>
  );
};

export default InViewPage;
