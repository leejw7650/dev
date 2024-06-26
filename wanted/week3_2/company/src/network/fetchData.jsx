// 현 프로젝틔 경우엔 아래 custom Hook은 하지 않아도 됨.

import fetchData from "./request";

async function useIssueData(context) {
  const { issueData, setIssueData, pageNum, setPageNum } = context;
  try {
    const result = await fetchData("/issues", pageNum);
    setPageNum(pageNum + 1);
    if (result.data.length !== 0) {
      setIssueData([...issueData, ...result.data]);
    }
  } catch (error) {
    console.error(error);
  }
}

export default useIssueData;
