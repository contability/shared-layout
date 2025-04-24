import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/file";

const fileCategories: CategoryItem[] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
    description: "기본 파일 업로드 컴포넌트",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    path: `${basePath}/version02`,
    label: "version02",
    description: "드래그 앤 드롭 파일 업로드 컴포넌트",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
];

const filePageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
  {
    path: `${basePath}/version02`,
    label: "version02",
  },
];

const FilePage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/file";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="FILE"
          description="파일 업로드 및 처리 관련 컴포넌트"
          categories={fileCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="FILE"
          parentTitle="HOME"
          parentPath="/"
          linkItems={filePageLinkItems}
        />
      )}
    </>
  );
};

export default FilePage;
