import axios from 'axios';

const API_KEY = '35aa8c3124ef4e496a774e7d787c1e36';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&per_page=10`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchById = async id => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie?${id}?api_key=${API_KEY}&language=en-US`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchByID = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchInfo = async (id, select) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/movie/${id}/${select}?api_key=${API_KEY}&language=en-US`
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchInfo = async (id, select) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/${select}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByQuery = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&include_adult=false&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
