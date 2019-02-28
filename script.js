
cebroker2="https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27" 

function getCebrokerData() {
  const cebrokerURL = "https://api.cebroker.com/v2/featuredCoursesProfession?profession=35";
  const cebrokerURL2 = "https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27" 
  const cebrokerURL3 = "https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=violence"
  return fetch(cebrokerURL2).
  then(response => response.json());
}

function printData(data){
  console.log("hola",data);
  
}

console.log('Hola');

getCebrokerData().then(printData);
