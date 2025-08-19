import axios from "axios";
import { type Movie } from "../types/movie";


const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<FetchMoviesResponse> => {
  const response = await tmdbApi.get<FetchMoviesResponse>("search/movie", {
    params: { query, page },
  });
  return response.data;
};

