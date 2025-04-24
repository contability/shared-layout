import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

interface LinkItem {
  path: string;
  label: string;
}

export interface NestedButtonListTemplateProps {
  title: string;
  parentTitle?: string;
  parentPath?: string;
  linkItems: LinkItem[];
}

const NestedButtonListTemplate = ({
  title,
  parentTitle,
  parentPath,
  linkItems,
}: NestedButtonListTemplateProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 활성화된 링크 확인
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <main className="max-w-[1024px] mx-auto">
      <header className="p-4 bg-gray-800 rounded-lg mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(parentPath || "/")}
            className="text-xl font-semibold p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label={`돌아가기 - ${parentTitle || "홈"}`}
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
          <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
          <div className="w-10"></div> {/* 균형을 위한 빈 공간 */}
        </div>
        {parentTitle && (
          <div className="mt-2">
            <p className="text-sm text-gray-400 text-center">
              <span>{parentTitle}</span> /{" "}
              <span className="font-medium">{title}</span>
            </p>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
        <aside className="p-4 bg-gray-800 rounded-lg shadow-lg h-fit">
          <nav aria-label="사이드 내비게이션">
            <ul className="flex flex-col gap-2">
              {linkItems.map((link, index) => (
                <li key={`link-item__${index}`}>
                  <Link
                    className={`block p-3 text-lg font-medium rounded-md transition-colors ${
                      isActive(link.path)
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-700"
                    }`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default NestedButtonListTemplate;
