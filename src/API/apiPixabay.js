import axios from 'axios';

const API_KEY = '38796397-a00862f58ea99d9d4af60dbc9';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async ({ word, page }) => {
  return await axios(
    `${BASE_URL}?key=${API_KEY}&q=${word}&image_type=photo&per_page=12&page=${page}`
  );
};
