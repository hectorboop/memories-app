import axios from 'axios';

const devEnv = process.env.NODE_ENV !== 'production';

const { REACT_APP_DEV, REACT_APP_PROD } = process.env;

const url = `${devEnv ? REACT_APP_DEV : REACT_APP_PROD}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
