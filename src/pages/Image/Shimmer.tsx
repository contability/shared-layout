import {useState} from "react";

const ShimmerImageSkeleton = () => {
  return (
    <div className="aspect-[16/9] w-full bg-gray-200 rounded-md animate-shimmer"/>
  );
};

const ShimmerImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return <>
    {isLoading && <ShimmerImageSkeleton/>}
    <img src="https://picsum.photos/3840/2160" alt="random-version02" onLoad={() => setIsLoading(false)} className={`rounded-md ${isLoading ? "hidden" : "block"}`}/>
  </>
};

export default ShimmerImage;