import {MODAL_ACTIONS} from '../types/modalActionsTypes';

export const openCloseModal = () => (dispatch, getState) => {
  dispatch({
    type: MODAL_ACTIONS.openCloseModal()
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
