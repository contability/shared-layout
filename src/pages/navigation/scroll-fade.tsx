import { useEffect, useState } from "react";

const ScrollFadeNavigation = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // 스크롤이 200px 이상이면 배경을 투명하게 변경
      if (scrollPosition > 200 && !isTransparent) {
        setIsTransparent(true);
      } else if (scrollPosition <= 100 && isTransparent) {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTransparent]);

  return (
    <div className="h-[200dvh] relative">
      <nav
        className={`p-6 w-full fixed top-50 left-0 z-10 transition-all duration-300 ${
          isTransparent ? "bg-transparent text-white" : "bg-white text-black"
        }`}
        aria-label="메인 내비게이션"
      >
        SCROLL DOWN
      </nav>
      <div className="h-full bg-gradient-to-b from-blue-500 to-purple-500">
        <div className="p-6 pt-40 text-white">
          스크롤을 내려 내비게이션 효과를 확인하세요.
        </div>
      </div>
    </div>
  );
};

export default ScrollFadeNavigation;
