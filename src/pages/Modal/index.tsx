import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/modal";

const modalCategories: CategoryItem[] = [
  {
    path: `${basePath}/version01`,
    label: "version01",
    description: "기본 모달 컴포넌트와 애니메이션 효과",
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
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const modalPageLinkItems = [
  {
    path: `${basePath}/version01`,
    label: "version01",
  },
];

const ModalsPage = () => {
  const location = useLocation();
  const showCategoryList = location.pathname === "/modal";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="MODAL"
          description="다양한 모달 컴포넌트 및 효과"
          categories={modalCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="MODAL"
          parentTitle="HOME"
          parentPath="/"
          linkItems={modalPageLinkItems}
        />
      )}
    </>
  );
};

export default ModalsPage;
