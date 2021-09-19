const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "cf7103a04560136cfec7834a7d0f8600";

export function fetchData(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("Not found"));
  });
}

export function getTrending() {
  return fetchData(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}
