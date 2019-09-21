import { CATEGORIES } from '../types/categoryActionsTypes';
import { root as reference } from '../../global/constants/referenciesFirestore';
import { openCloseModal } from './modalActions';
import { isEmpty } from '../../../shared/utils/commonFunctions';

export const typingCategory = (category) => (dispatch) => {
  dispatch({
    type: CATEGORIES.typingCategory(),
    payload: category
  });
};

export const typingEditCategory = (typingEditCategory) => (dispatch) => {
  dispatch({
    type: CATEGORIES.typingEditCategory(),
    payload: typingEditCategory
  });
};

export const editingCategory = (editingCategory) => (dispatch) => {
  dispatch({
    type: CATEGORIES.editingCategory(),
    payload: editingCategory
  });
};

export const editingColorCategory = (color) => (dispatch) => {
  dispatch({
    type: CATEGORIES.editingColorCategory(),
    payload: color
  });
};

export const saveCategory = (success) => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const { newCategory, color } = getState().categoryReducer;
  const firestore = getFirestore();

  // save Category
  await firestore.collection(reference.root.category.ref())
    .add({
      category: newCategory,
      createAt: new Date().getTime(),
      popularity: 0,
      color
    })
    .then((ref) => {
      dispatch({
        type: CATEGORIES.saveCategory()
      });
      if (success) {
        success();
      }
      dispatch(getAllCategories());
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', error);
    });

};

export const saveEditCategory = (success) => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const { editingCategory } = getState().categoryReducer;
  const firestore = getFirestore();

  // save category edited
  if ( !isEmpty(editingCategory)) {
    await firestore.collection(reference.root.category.ref())
      .doc(editingCategory.value)
      .set({
        category: editingCategory.label
      })
      .then((ref) => {
        dispatch({
          type: CATEGORIES.saveEditCategory()
        });
        if (success) {
          success();
        }
        dispatch(getAllCategories());
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error editing document: ', error);
      });
  }

};

export const getAllCategories = () => async (dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore();
  dispatch({
    type: CATEGORIES.requestGetCategories()
  });

  await firestore.collection(reference.root.category.ref())
    .get()
    .then((querySnapshot) => {
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push({
          ...doc.data(),
          id: doc.id
        });
      });
      dispatch({
        type: CATEGORIES.getAllCategories(),
        payload: res
      });
    });


};

export const deleteCategory = (docID) => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firestore = getFirestore();

  dispatch({
    type: CATEGORIES.deleteCategory()
  });
  // // delete Category
  await firestore.collection(reference.root.category.ref())
    .doc(docID)
    .delete()
    .then(()=>{
      dispatch(getAllCategories());
    })
    .catch((error)=>{
      console.log('error Deleting Category',error);
    });
};



/* Actions Tags */
export const editingTag = (tag) => (dispatch) => {
  dispatch({
    type: CATEGORIES.editingTags(),
    payload: tag
  });
};

export const getAllTag = () => async (dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore();

  await firestore.collection(reference.root.tags.ref())
    .get()
    .then((querySnapshot) => {
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push({
          ...doc.data(),
          id: doc.id
        });
      });

      dispatch({
        type: CATEGORIES.getAllTags(),
        payload: res
      });
    });


};


export const saveTag = (success) => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const { newTag } = getState().categoryReducer;
  const firestore = getFirestore();

  // save Tag
  await firestore.collection(reference.root.tags.ref())
    .add({
      tag: newTag,
      createAt: new Date().getTime(),
      popularity: 0
    })
    .then((ref) => {
      dispatch({
        type: CATEGORIES.saveTag()
      });
      if (success) {
        success();
      }
      dispatch(getAllTag());
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error adding document on saveTag: ', error);
    });

};
