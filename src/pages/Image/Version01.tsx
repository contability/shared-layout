import {useState} from "react";

const Version01Skeleton = () => {
  return (
    <div className="aspect-[16/9] w-full bg-[#f0f0f0] rounded-md animate-pulse"/>
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