const ScrollableTable = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">스크롤 가능한 테이블</h1>

      <div className="rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="relative">
            {/* 테이블 헤더 고정 */}
            <table className="w-full text-left" aria-label="사용자 정보 테이블">
              <thead className="bg-gray-800 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-sm font-medium" scope="col">
                    이름
                  </th>
                  <th className="px-6 py-4 text-sm font-medium" scope="col">
                    이메일
                  </th>
                  <th className="px-6 py-4 text-sm font-medium" scope="col">
                    역할
                  </th>
                  <th className="px-6 py-4 text-sm font-medium" scope="col">
                    부서
                  </th>
                  <th className="px-6 py-4 text-sm font-medium" scope="col">
                    상태
                  </th>
                </tr>
              </thead>
            </table>

            {/* 테이블 본문 스크롤 가능 */}
            <div
              className="max-h-[500px] overflow-y-auto scrollbar-hide"
              tabIndex={0}
              aria-label="스크롤 가능한 테이블 본문"
            >
              <table className="w-full text-left">
                <caption className="sr-only">
                  사용자 정보 목록 - 스크롤하여 더 많은 항목을 볼 수 있습니다
                </caption>
                <tbody>
                  {Array.from({ length: 50 }).map((_, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                      }
                    >
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        홍길동 {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        hong{index + 1}@example.com
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        {index % 3 === 0
                          ? "개발자"
                          : index % 3 === 1
                            ? "디자이너"
                            : "매니저"}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        {index % 4 === 0
                          ? "제품"
                          : index % 4 === 1
                            ? "마케팅"
                            : index % 4 === 2
                              ? "영업"
                              : "인사"}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            index % 3 === 0
                              ? "bg-green-500/20 text-green-400"
                              : index % 3 === 1
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                          aria-label={
                            index % 3 === 0
                              ? "활성 상태"
                              : index % 3 === 1
                                ? "대기 상태"
                                : "비활성 상태"
                          }
                        >
                          {index % 3 === 0
                            ? "활성"
                            : index % 3 === 1
                              ? "대기"
                              : "비활성"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        <p>스크롤 시 테이블 헤더는 고정되고 본문만 스크롤됩니다.</p>
        <p>최대 높이는 500px로 설정되어 있습니다.</p>
        <p className="mt-2">
          <span className="sr-only">스크린 리더 사용자를 위한 안내:</span>
          테이블 본문에서 Tab 키를 이용해 포커스한 후 화살표 키로 내용을 탐색할
          수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ScrollableTable;
