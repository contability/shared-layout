import CategoryCardList, {
  CategoryItem,
} from "../../components/shared/template/CategoryCardList";
import NestedButtonListTemplate from "../../components/shared/template/NestedButtonList";
import { useLocation } from "react-router-dom";

const basePath = "/image";

const imageCategories: CategoryItem[] = [
  {
    path: `${basePath}/pulse`,
    label: "pulse",
    description: "이미지 로딩 시 표시되는 펄스 효과",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 12h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" />
        <path d="M7 19h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    path: `${basePath}/shimmer`,
    label: "shimmer",
    description: "이미지 로딩 시 표시되는 반짝임 효과",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    path: `${basePath}/pinch-zoom`,
    label: "pinch zoom",
    description: "이미지 핀치 줌 확대/축소 기능",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
  },
];

const imagePageLinkItems = [
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
  const location = useLocation();
  const showCategoryList = location.pathname === "/image";

  return (
    <>
      {showCategoryList ? (
        <CategoryCardList
          title="IMAGE"
          description="다양한 이미지 관련 컴포넌트 및 효과"
          categories={imageCategories}
        />
      ) : (
        <NestedButtonListTemplate
          title="IMAGE"
          parentTitle="HOME"
          parentPath="/"
          linkItems={imagePageLinkItems}
        />
      )}
    </>
  );
};

export default ImagesPage;
