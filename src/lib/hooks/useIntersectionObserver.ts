import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer API를 활용한 커스텀 훅
 * 엘리먼트가 뷰포트에 들어왔는지 감지하는 기능 제공
 * (사실 그냥 react-intersection-observer 패키지의 useInView 써도 되는데 직접 구현해보고 싶어서 만들어 봄.)
 */
interface UseIntersectionObserverProps {
  /** 타겟 엘리먼트가 root와 교차하는 비율 (0부터 1 사이의 값) */
  threshold?: number;
  /** 교차 영역을 계산할 때 사용되는 요소, null인 경우 브라우저 뷰포트 */
  root?: Element | null;
  /** root 요소의 마진을 지정, CSS 마진 형식으로 값 지정 */
  rootMargin?: string;
  /** true일 경우 한 번 뷰포트에 들어온 엘리먼트는 화면을 벗어나도 isIntersecting 값이 true로 유지 */
  freezeOnceVisible?: boolean;
}

/**
 * 엘리먼트의 가시성을 감지하는 커스텀 훅
 * @param props - Intersection Observer 설정 옵션
 * @returns {{elementRef: RefObject, isIntersecting: boolean}} - 관찰할 요소의 ref와 가시성 상태
 */
const useIntersectionObserver = ({
  threshold = 0.2, // 기본값: 20%가 보일 때 감지
  root = null, // 기본값: 브라우저 뷰포트 기준
  rootMargin = "-100px 0px", // 기본값: 상하 100px 축소된 영역 기준
  freezeOnceVisible = true, // 기본값: 한번 보이면 상태 유지
}: UseIntersectionObserverProps = {}) => {
  // 요소가 뷰포트에 들어왔는지 여부를 저장하는 상태
  const [isIntersecting, setIsIntersecting] = useState(false);
  // 관찰할 요소의 참조
  const elementRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver 인스턴스 생성
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          // freezeOnceVisible이 true이고 이미 보이는 상태면 업데이트 중지
          if (freezeOnceVisible && isIntersecting) return;
          setIsIntersecting(isVisible);
        });
      },
      { threshold, root, rootMargin }
    );

    // 현재 ref에 연결된 DOM 요소
    const element = elementRef.current;
    // 요소가 존재하면 관찰 시작
    if (element) observer.observe(element);

    // 컴포넌트 언마운트 또는 의존성 변경 시 관찰 정리
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return {
    elementRef, // 관찰할 요소에 연결할 ref
    isIntersecting, // 요소가 뷰포트에 들어왔는지 여부
  };
};

export default useIntersectionObserver;
