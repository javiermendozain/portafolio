import { CATEGORIES } from '../types/categoryActionsTypes';

const INITIAL_STATE = {
  categories: [],
  error: '',
  newCategory: '',
  color: '',

  tags: [],
  newTag: '',
  editingCategory: {}
};

// eslint-disable-next-line complexity
export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    /*  Category  */
    case CATEGORIES.errorCategories():
      return {
        ...state,
        error: action.payload
      };
    case CATEGORIES.editingCategory():
      return {
        ...state,
        editingCategory: action.payload
      };
    case CATEGORIES.typingEditCategory():
      return {
        ...state,
        editingCategory: action.payload
      };
    case CATEGORIES.typingCategory():
      return {
        ...state,
        newCategory: action.payload
      };
    case CATEGORIES.editingColorCategory():
      return {
        ...state,
        color: action.payload
      };

    case CATEGORIES.saveCategory():
      return {
        ...state,
        newCategory: ''
      };
    case CATEGORIES.saveEditCategory():
      return {
        ...state,
        editingCategory: {}
      };
    case CATEGORIES.getAllCategories():
      return {
        ...state,
        categories: action.payload
      };

    /*  Tags  */
    case CATEGORIES.getAllTags():
      return {
        ...state,
        tags: action.payload
      };

    case CATEGORIES.editingTags():
      return {
        ...state,
        newTag: action.payload
      };

    case CATEGORIES.saveTag():
      return {
        ...state,
        newTag: ''
      };

    default:
      return state;
  }
};
