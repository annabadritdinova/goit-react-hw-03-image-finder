const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20339411-4fff238fb2bd74b59a4d62dbe';

async function fetchImagesAPI({ imageName, currentPage }) {
  const searchQuery = `?q=${imageName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}`);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    return error('error in fetch');
  }
}

const api = {
  fetchImagesAPI,
};

export default api;