import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '39964073-185c2139e5f09a7ca52633e4a',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const searchItem = async (currentPage, valueInput) => {
  const response = await axios.get(`?q=${valueInput}&page=${currentPage}`);

  return response.data;
};

export { searchItem };
