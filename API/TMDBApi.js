const API_TOKEN = "34b59090d900c1e1a578546c055bec79";

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// React Native vous propose d'utiliser l'API Fetch dans sa documentation pour tous vos appels réseaux
export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ "&page=" + page

//
  return fetch(url)
          .then((response) => response.json())
          .catch((error) => console.error(error))
}
