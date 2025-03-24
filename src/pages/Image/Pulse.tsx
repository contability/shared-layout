import {useState} from "react";

const PulseImageSkeleton = () => {
  return (
    <div className="aspect-[16/9] w-full bg-[#f0f0f0] rounded-md animate-pulse"/>
  );
};

const PulseImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return <>
    {isLoading && <PulseImageSkeleton/>}
    <img src="https://picsum.photos/3840/2160" alt="random-version01" onLoad={() => setIsLoading(false)} className={`rounded-md ${isLoading ? "hidden" : "block"}`}/>
  </>
};

export default PulseImage;