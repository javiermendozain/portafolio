import { NEW_POST } from '../types/newPostActionsTypes';

const INITIAL_STATE = {
  id: '',
  title: '',
  category: 0,
  content: '',
  publisher: '',
  time: '',
  tags: [],
  comments: []
};


export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case NEW_POST.editingContentPost():
      return {
        ...state,
        content: action.payload
      };
    case NEW_POST.editingTitlePost():
      return {
        ...state,
        title: action.payload
      };
    case NEW_POST.editingCategoryPost():
      return {
        ...state,
        category: action.payload
      };
    case NEW_POST.addTagPost():
      return {
        ...state,
        tags: action.payload
      };
    case NEW_POST.deleteTagPost():
      return {
        ...state,
        tags: action.payload
      };
    case NEW_POST.editinTimePost():
      return {
        ...state,
        time: action.payload
      };
    case NEW_POST.clearContentPost():
      return {
        ...state,
        ...INITIAL_STATE
      };


    default:
      return state;
  }
};
