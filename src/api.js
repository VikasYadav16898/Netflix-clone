export const base_url = "https://api.themoviedb.org/3/";
export const API_KEY = process.env.REACT_APP_API_KEY;

export const movieTrendList = base_url + "trending/all/week" + API_KEY;
export const genres = base_url + "genre/movie/list" + API_KEY;
export const imageURL = "https://image.tmdb.org/t/p/w500/";
// https://image.tmdb.org/t/p/w500/9v43jAAfCYcQEgeMJ1H0rghN0of.jpg
