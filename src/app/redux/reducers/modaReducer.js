
import { MODAL_ACTIONS } from '../actions/modalActions';
const INITIAL_STATE = {
  isOpenModal: false,
  header: 'Header',
  body: 'Body',
  footer: 'Fotter'
};


export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case MODAL_ACTIONS.OpenCloseModal():
      return {
        ...state,
        isOpenModal: action.payload
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
