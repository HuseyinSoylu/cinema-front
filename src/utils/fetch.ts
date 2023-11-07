import axios from "axios";

export const fetchMovies = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/films");
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieById = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/films/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
  }
};

export const fetchCinemas = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/cinemas/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching cinemas:", error);
    throw error;
  }
};
