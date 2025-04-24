import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

export interface CategoryItem {
  path: string;
  label: string;
  description: string;
  icon: ReactNode;
}

export interface CategoryCardListProps {
  title: string;
  description?: string;
  categories: CategoryItem[];
}

const CategoryCardList = ({
  title,
  description,
  categories,
}: CategoryCardListProps) => {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1024px] mx-auto p-6">
      <header className="mb-10 p-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-semibold p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="홈으로 돌아가기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-5xl font-bold text-center flex-1">{title}</h1>
        </div>
        {description && (
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </header>

      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        aria-label="카테고리 목록"
      >
        {categories.map((category, index) => (
          <Link
            key={`category-${index}`}
            to={category.path}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-700 p-3 rounded-full">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.label}</h2>
            </div>
            <p className="text-gray-400">{category.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default CategoryCardList;
