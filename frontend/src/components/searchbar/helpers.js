const Helpers = (() => {

  const endpoint = 'https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=';
  const publicApi = {
    endpoint
  };

  return publicApi;

})();

export default Helpers;
