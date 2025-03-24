import {useState} from "react";

const LayoutVersion01Skeleton = () => {
  return (
    <>
    {/* <!-- 첫 번째 스켈레톤 아이템 --> */}
      <div className="space-y-3 mb-6">
        <div className="h-7 bg-gray-200 rounded w-3/5 animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-full animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-4/5 animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-shimmer"/>
      </div>

      {/* <!-- 이미지 스켈레톤 --> */}
      <div className="space-y-3 mb-6">
        <div className="aspect-[3840/2160] bg-gray-200 rounded-lg w-full animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-full animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-4/5 animate-shimmer"/>
      </div>

      {/* <!-- 카드 스타일 스켈레톤 --> */}
      <div className="flex space-x-4 mb-6">
        <div
          className="w-12 h-12 bg-gray-200 rounded-full shrink-0 animate-shimmer"
        />
        <div className="space-y-3 flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-shimmer"/>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-shimmer"/>
        </div>
      </div>

      {/* <!-- 댓글 스타일 스켈레톤 --> */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-full animate-shimmer"/>
        <div className="h-4 bg-gray-200 rounded w-4/5 animate-shimmer"/>
      </div>
    </>
  );
};

const LayoutVersion01 = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return <>
    {isLoading && <LayoutVersion01Skeleton/>}
    <div className={`space-y-6 ${isLoading ? "hidden" : "block"}`}>
      {/* 제목 섹션 */}
      <div className="space-y-3 mb-6">
        <h1 className="text-2xl font-bold">React 컴포넌트 설계 가이드</h1>
        <p className="text-gray-600">컴포넌트 기반 설계의 기본 원칙</p>
        <p className="text-gray-600">재사용성과 유지보수성을 고려한 개발</p>
        <p className="text-gray-600">2025년 03월 24일 작성</p>
      </div>

      {/* 이미지 섹션 */}
      <div className="space-y-3 mb-6">
        <img 
          src="https://picsum.photos/3840/2160" 
          alt="random-version01" 
          onLoad={() => setIsLoading(false)} 
          className="rounded-md"
        />
        <p className="text-sm text-gray-500">컴포넌트 설계 예시 이미지</p>
        <p className="text-sm text-gray-500">출처: picsum</p>
      </div>

      {/* 프로필 카드 섹션 */}
      <div className="flex space-x-4 mb-6">
        <img 
          src="https://i.pravatar.cc/48" 
          alt="author" 
          className="w-12 h-12 rounded-full"
        />
        <div className="space-y-1">
          <p className="font-medium">개발러</p>
          <p className="text-sm text-gray-500">프론트엔드 개발자</p>
        </div>
      </div>

      {/* 내용 섹션 */}
      <div className="space-y-3">
        <p className="text-gray-700">React 컴포넌트를 설계할 때는 단일 책임 원칙을 준수해야 합니다. 각 컴포넌트는 하나의 명확한 목적을 가져야 하며, 재사용 가능한 형태로 설계되어야 합니다.</p>
        <p className="text-gray-700">컴포넌트의 props는 명확하게 정의되어야 하며, 필요한 경우 타입 검사를 통해 안정성을 확보할 수 있습니다.</p>
        <p className="text-gray-700">스타일링은 CSS-in-JS나 CSS 모듈을 사용하여 컴포넌트와 함께 관리하는 것이 좋습니다.</p>
      </div>
    </div>
  </>
};

export default LayoutVersion01;