import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const DefaultPageTemplate = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1024px] mx-auto p-6">
      <header className="mb-10 p-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
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
        </div>
      </header>
      {children}
    </main>
  );
};

export default DefaultPageTemplate;
