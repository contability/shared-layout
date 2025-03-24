import { useEffect } from "react";

const Result01 = () => {
  const fetchData = async () => {
    try {
      // loading 시간 지연시키려고 의미 없는 api 호출 일부러 해둔거.
      const data = await fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json()).then((result) => {
        console.log(result);
        return result;
      })
        return data;
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }
  }

useEffect(() => {
    fetchData();
}, []);

  if(!fetchData) return null;
  return <p className="text-2xl">데이터 바인딩 완료</p>
};

export default Result01