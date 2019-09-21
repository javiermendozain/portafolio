import moment from 'moment';
import { NEW_POST } from '../types/newPostActionsTypes';
import statusPost from '../../global/constants/statusPost';
import { root as reference } from '../../global/constants/referenciesFirestore';
import { openCloseModal } from './modalActions';
import { isEmpty, createKeyWords } from '../../../shared/utils/commonFunctions';
import { getPostInitial } from './postActions';

export const setContentPost = (content) => (dispatch) => {
  dispatch({
    type: NEW_POST.editingContentPost(),
    payload: content
  });

};

export const setTitlePost = (title) => (dispatch) => {
  dispatch({
    type: NEW_POST.editingTitlePost(),
    payload: title
  });
};

export const setCategoriesPost = (category) => (dispatch) => {
  dispatch({
    type: NEW_POST.editingCategoryPost(),
    payload: category
  });
};

export const setTimePost = (time) => (dispatch) => {
  dispatch({
    type: NEW_POST.editinTimePost(),
    payload: time
  });
};

export const addTagPost = (tagIDs=[]) => (dispatch, getState) => {
  const tags= [];


  if (!isEmpty(tagIDs)) {
    // eslint-disable-next-line array-callback-return
    tagIDs.map( (item)=>{
      tags.push(item.value);
    });
  }

  dispatch({
    type: NEW_POST.addTagPost(),
    payload: tags
  });
};

export const deleteTagPost = (tagID) => (dispatch) => {
  const { tags =[] } = getState().newPostReducer;
  const index = tags.indexOf(tagID);
  tags.splice(index,1);
  dispatch({
    type: NEW_POST.deleteTagPost(),
    payload: tags
  });
};


export const publicPost = ( success ) => async (dispatch, getState, {getFirestore} ) => {
  const { title, content, time, category, tags } = getState().newPostReducer;
  const firestore = getFirestore();
  const { auth: { uid } } = getState().firebase;

  dispatch({
    type: NEW_POST.publicPost()
  });


  // Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
  const searchTitle = [];

  //public post
  await firestore.collection(reference.root.posts.ref())
    .add({
      status: statusPost.publicPost(),
      publisher: uid,
      searchTitle: createKeyWords(title.toLowerCase().trim().replace('  ',' ')),
      takeIn: 0,
      time: (!isEmpty(time))? time : moment().format('YYYY-MM-DD HH:mm:ss'),
      title, content, category, tags
    })
    .then((ref) => {
      dispatch(getPostInitial());
      success(ref);
      dispatch(openCloseModal());
      dispatch({
        type: NEW_POST.clearContentPost()
      });
    });


};


export const savePost = () => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const { title, content, time, category, tags } = getState().newPostReducer;
  const firestore = getFirestore();
  const { auth: { uid } } = getState().firebase;

  dispatch({
    type: NEW_POST.savePost()
  });

  // Codigo for save Post Next
  await firestore.collection(reference.root.posts.ref())
    .add({
      status: statusPost.savePost(),
      publisher: uid,
      searchTitle: createKeyWords(title.toLowerCase().trim().replace('  ',' ')),
      takeIn: 0,
      title, content, time, category, tags
    })
    .then((ref) => {
      dispatch(openCloseModal());
      dispatch({
        type: NEW_POST.clearContentPost()
      });
    });

};


