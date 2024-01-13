const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", "page=1");
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", "page=1");
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi(`/discover/movie`, `with_genres=${genreId}`);
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

const postAddFavorite = async (account_id, movieData) => {
  const response = await fetch(
    `${API_URL}/account/${account_id}/favorite?api_key=${process.env.API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    }
  );

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export {
  fetchMovieApi,
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
  getMovie,
  postAddFavorite,
};
