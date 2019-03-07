export default class DataRetriever{
  get(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(callback);
  }
}
