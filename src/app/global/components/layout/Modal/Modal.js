import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { openCloseModal } from '../../../../redux/actions/modalActions';

const ModalDefault = (props) => {
  const { modalReducer: { header, body, footer, isOpenModal }, openCloseModal } = props;

  return (
    <Modal
      isOpen={isOpenModal}
      toggle={()=>openCloseModal()}
      fade
    >
      <ModalHeader
        toggle={()=>openCloseModal()}
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
  openCloseModal
};

export default connect(mapStateToProps, mapDispatchToProps )(ModalDefault);
