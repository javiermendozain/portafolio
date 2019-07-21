import {MODAL_ACTIONS} from '../actions/modalActions';

export const OpenCloseModal = () => (dispatch, getState) => {
  dispatch({
    type: MODAL_ACTIONS.OpenCloseModal()
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



