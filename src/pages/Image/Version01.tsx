import {useState} from "react";

const Version01Skeleton = () => {
  return (
    <div className="aspect-[16/9] w-full bg-[#f0f0f0] rounded-md animate-pulse"/>
    // <div className="aspect-[16/9] w-full rounded-md overflow-hidden">
    //   {/* 이미지 영역 */}
    //   <div className="w-full h-[70%] bg-[#e0e0e0] animate-pulse" />
      
    //   {/* 하단 정보 영역 */}
    //   <div className="p-3 space-y-2">
    //     {/* 프로필 이미지 */}
    //     <div className="flex items-center">
    //       <div className="w-8 h-8 rounded-full bg-[#e0e0e0] animate-pulse" />
          
    //       {/* 텍스트 영역 */}
    //       <div className="ml-3 flex-1 space-y-2">
    //         <div className="h-3 w-3/4 bg-[#e0e0e0] animate-pulse rounded" />
    //         <div className="h-3 w-1/2 bg-[#e0e0e0] animate-pulse rounded" />
    //       </div>
    //     </div>
        
    //     {/* 버튼 영역 */}
    //     <div className="flex space-x-2">
    //       <div className="h-8 w-20 bg-[#e0e0e0] animate-pulse rounded" />
    //       <div className="h-8 w-20 bg-[#e0e0e0] animate-pulse rounded" />
    //     </div>
    //   </div>
    // </div>
  );
};

const Version01 = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return <>
    {isLoading && <Version01Skeleton/>}
    <img src="https://picsum.photos/3840/2160" alt="random-version01" onLoad={() => setIsLoading(false)} className={`rounded-md ${isLoading ? "hidden" : "block"}`}/>
  </>
};

export default Version01;