const Helpers = (() => {
  let page = 1;
  function pages(){
    return  allCourses = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${page++}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`;
  };
  const preview = 'https://api.cebroker.com/v2/featuredCoursesProfession?profession=36';
  let allCourses = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${page}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`;
  const search = 'https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=';
  const publicApi = {
    search,
    preview,
    pages: pages,
    page,
    allCourses
  };

  return publicApi;

})();

export default Helpers;
