
import { MODAL_ACTIONS } from '../types/modalActionsTypes';
const INITIAL_STATE = {
  isOpenModal: false,
  header: '',
  body: '',
  footer: ''
};


export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case MODAL_ACTIONS.openCloseModal():
      return {
        ...state,
        isOpenModal: !state.isOpenModal
      };

    case MODAL_ACTIONS.setContentModal():
      const { header, body, footer } = action.payload;
      return {
        ...state,
        header: header,
        body: body,
        footer: footer
      };

    default:
      return state;
  }
};
