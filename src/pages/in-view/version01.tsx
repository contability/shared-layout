import useIntersectionObserver from "../../lib/hooks/useIntersectionObserver";

// custom hook 활용 버전
const CardLayout = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`h-[50dvh] flex items-center justify-center rounded-xl p-8 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg transform transition-all duration-700 ease-in-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      aria-hidden={!isIntersecting}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          인터섹션 애니메이션
        </h2>
        <p className="text-white text-lg">
          스크롤하면 나타나는 컴포넌트입니다.
        </p>
      </div>
    </section>
  );
};

const InViewVersion01 = () => {
  return (
    <article className="p-8">
      <h3 className="text-2xl h-[50dvh] font-bold flex items-center justify-center py-8 bg-gray-700 mb-4 backdrop-blur-sm z-10 w-full">
        SCROLL DOWN
      </h3>
      <section className="space-y-8">
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
      </section>
    </article>
  );
};

export default InViewVersion01;
