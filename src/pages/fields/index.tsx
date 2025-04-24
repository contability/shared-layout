import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import { Outlet, useLocation } from "react-router-dom";

const basePath = "/fields";

const fieldCategories: CategoryItem[] = [
  {
    path: `${basePath}/input`,
    label: "input",
    description: "다양한 입력 컴포넌트 및 상호작용",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 15l5-5 5 5" />
      </svg>
    ),
  },
  {
    path: `${basePath}/progress`,
    label: "progress",
    description: "진행 상태 표시 컴포넌트",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
        <path d="M4 12h16" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" />
      </svg>
    ),
  },
  {
    path: `${basePath}/select-box`,
    label: "select-box",
    description: "선택 상태 표시 컴포넌트",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
        <path d="M4 12h16" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" />
      </svg>
    ),
  },
];

const FieldsPage = () => {
  const location = useLocation();

  // 현재 경로가 정확히 /fields인 경우만 카테고리 목록 표시
  const showCategoryList = location.pathname === "/fields";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="FIELDS"
          description="다양한 입력 및 상태 필드 컴포넌트 모음"
          categories={fieldCategories}
        />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default FieldsPage;
