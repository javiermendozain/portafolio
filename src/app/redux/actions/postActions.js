import { POSTs } from '../types/postActionsTypes';
import statusPost from '../../global/constants/statusPost';
import { root as reference } from '../../global/constants/referenciesFirestore';
import { openCloseModal } from './modalActions';
import { isEmpty } from '../../../shared/utils/commonFunctions';
import { getAllCategories, getAllTag } from './categoryActions';

export const getPostInitial = (idCategory ) => async (dispatch, getState, {getFirestore} ) => {
  const firestore = getFirestore();

  let { categories = [], tags= [] } = getState().categoryReducer;
  const posts = [];

  if (isEmpty(categories)) {
    await dispatch(getAllCategories());
  }

  if (isEmpty(tags)) {
    await dispatch(getAllTag());
  }

  categories = getState().categoryReducer.categories;
  tags = getState().categoryReducer.tags;

  let refPosts = firestore.collection(reference.root.posts.ref())
    .where('status','==','PUBLISHED_POST');

  if (!isEmpty(idCategory)) {
    refPosts = firestore.collection(reference.root.posts.ref())
      .where('status','==','PUBLISHED_POST')
      .where('category','==',idCategory);
  }

  await refPosts.orderBy('time', 'desc')
    .limit(40)
    .get()
    .then(function (querySnapshot) {

      querySnapshot.forEach(function (doc) {
        // get data of category from categories
        const category = categories.filter((item) => (item.id === doc.data().category));

        // get tags on post as dataTags
        const {tags:dataTags= [] } = doc.data();

        // get data of tags from listTags as tags
        const tag = tags.filter((item) => dataTags.includes(item.id));

        posts.push({
          id: doc.id,
          ...doc.data(),
          category: !isEmpty(category) ? category[0] : [],
          tags: tag
        });
      });
      dispatch({
        type: POSTs.getPostInitial(),
        payload: posts
      });

    });
};


export const getPostBySeacher = ( query_search ) => async (dispatch, getState, {getFirestore} ) => {
  const firestore = getFirestore();

  // TODO: Separar la busqueda en array y bucar si los string estan en firebase
  // Esto para bucar por frase y no solo por palabra
  await firestore.collection(reference.root.posts.ref())
    .where('searchTitle', 'array-contains', query_search.toLowerCase().trim())
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        dispatch({
          type: POSTs.getPostInitial(),
          payload: {
            id: doc.id,
            ...doc.data()
          }
        });
      });
    });
};




