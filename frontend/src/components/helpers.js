const Helpers = (() => {
  let page = 1;
  function pages(){
    return  endpointAllCourses = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${page++}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`;
  };
  const endpoint3Courses = 'https://api.cebroker.com/v2/featuredCoursesProfession?profession=36';
  let endpointAllCourses = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${page}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`;
  const endpoint = 'https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=';
  const publicApi = {
    endpoint,
    endpoint3Courses,
    pages: pages,
    page,
    endpointAllCourses
  };

  return publicApi;

})();

export default Helpers;
