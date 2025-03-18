import { lazy, Suspense } from "react";

const Version01Skeleton = () => {
  return <div className="space-y-2">
  <div className="h-3 bg-gray-200 rounded-full animate-pulse w-[80%]" />
  <div className="h-3 bg-gray-200 rounded-full animate-pulse w-[60%]" />
  <div className="h-3 bg-gray-200 rounded-full animate-pulse w-[70%]" />
</div>
};


const Result01Component = lazy(() => import("./Result01"));

const Version01 = () => {
  return <Suspense fallback={<Version01Skeleton/>}>
   <Result01Component/>
  </Suspense>
};

export default Version01;