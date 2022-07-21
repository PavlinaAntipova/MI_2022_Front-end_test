import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = 'c338745b-40dd-4ca7-8903-51b6cfaa2e36';


export const getRandomCat = async () => {
  const response = await axios.get('/images/search');
  return response.data;
};

export const doVote = async (body) => {
    const response = await axios.post('/votes', body);
  return response.data;
};

export const getVoting = async (userId) => {
    const response = await axios.get(`/votes?sub_id=${userId}`);
  return response.data;
};

export const catById = async (id) => {
    const response = await axios.get(`/images/${id}`);
  return response.data;
};

export const makeFavourite = async (body) => {
    const response = await axios.post('/favourites', body);
  return response.data;
};

export const deleteFavourite = async (id) => {
const response = await axios.delete(`/favourites/${id}`);
return response.data;
};

export const getFavourite = async (userId) => {
    const response = await axios.get(`/favourites?sub_id=${userId}`);
  return response.data;
};

export const getBreeds = async () => {
    const response = await axios.get('/breeds');
  return response.data;
};

export const getBreedById = async (id) => {
    const response = await axios.get(`/images/search?breed_ids=${id}`);
  return response.data;
};

export const getImgsByBreed = async (id) => {
    const response = await axios.get(`/images/search?breed_ids=${id}&limit=5`);
  return response.data;
};

export const searchBreed = async (query) => {
  const response = await axios.get(`/breeds/search?q=${query}`);
  return response.data;
};

export const getImgsWithConditions = async (limit = "5", order = "Rand", type = "gif,jpg,png", breed) => {

  if (breed) {
    const response = await axios.get(`/images/search?limit=${limit}&order=${order}&mime_types=${type}&breed_ids=${breed}`);
  return response.data;
  } 
  if (!breed) {
  const response = await axios.get(`/images/search?limit=${limit}&order=${order}&mime_types=${type}`);
  return response.data;
  }
  
};

export const getBreedsWithConditions = async (limit, order) => {
  const response = await axios.get(`/breeds?limit=${limit}&order=${order}`);
  return response.data;
};

export const getOneBreedByParams = async (id, limit = "5", order = "asc") => {
    const response = await axios.get(`/images/search?breed_ids=${id}&limit=${limit}&order=${order}`);
  return response.data;
};

export const uploadImage = async (body) => {
    const response = await axios.post('/images/upload', body, {headers: {'Content-Type':'multipart/form-data' }});
  return response.data;
};



