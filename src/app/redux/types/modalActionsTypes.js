import {MODAL_ACTIONS} from '../actions/modalActions';

export const OpenCloseModal = () => (dispatch, getState) => {
  const { isOpenModal } = getState().modalReducer;
  dispatch({
    type: MODAL_ACTIONS.OpenCloseModal(),
    payload: !isOpenModal
  });
};

export const setContentModal = ({header, body, footer}) => (dispatch) => {

  dispatch({
    type: MODAL_ACTIONS.setContentModal(),
    payload: {
      header, body, footer
    }
  });

};



