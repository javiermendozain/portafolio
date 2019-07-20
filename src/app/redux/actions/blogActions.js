// Api
import blogApi from '../../pages/blog/api';

// Action Types
import { FETCH_POSTS } from '../types/blogActionsTypes';

export const fetchPosts = (fetchingFrom, query) => dispatch => {
  const requestPosts = () => ({
    type: FETCH_POSTS.request()
  });

  const receivedPosts = posts => ({
    type: FETCH_POSTS.success(),
    payload: posts
  });

  const receivedError = error => ({
    type: FETCH_POSTS.error(),
    payload: error.message
  });

  dispatch(requestPosts());

  return blogApi.getAllPosts(query, fetchingFrom)
    .then(posts => dispatch(receivedPosts(posts)))
    .catch(error=>dispatch(receivedError(error)));
};
