import axios from "axios";

export const fetchMovies = async () => {
  try {
    const response = await axios.get("https://localhost:3000/api/movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
