import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { OpenCloseModal } from '../../../../redux/types/modalActionsTypes';

const ModalDefault = (props) => {
  const { modalReducer: { header, body, footer, isOpenModal }, OpenCloseModal } = props;

  return (
    <Modal
      isOpen={isOpenModal}
      toggle={()=>OpenCloseModal()}
      fade
    >
      <ModalHeader
        toggle={()=>OpenCloseModal()}
      >
        {header}
      </ModalHeader>
      <ModalBody>
        {body}
      </ModalBody>
      <ModalFooter>
        {footer}
      </ModalFooter>
    </Modal>
  );
};


const mapStateToProps = ({modalReducer}) => {
  return { modalReducer };
};

const mapDispatchToProps = {
  OpenCloseModal
};

export default connect(mapStateToProps, mapDispatchToProps )(ModalDefault);
