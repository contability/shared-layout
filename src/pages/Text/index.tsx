import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/text";

const textCategories: CategoryItem[] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
    description: "기본 텍스트 스타일 및 애니메이션 효과",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
];

const textPageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const TextPage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/text";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="TEXT"
          description="다양한 텍스트 스타일 및 애니메이션 효과"
          categories={textCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="TEXT"
          parentTitle="HOME"
          parentPath="/"
          linkItems={textPageLinkItems}
        />
      )}
    </>
  );
};

export default TextPage;
