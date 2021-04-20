import React, { FunctionComponent } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'components/controls/button/button';

interface ModalProps {
  title?: string;
  isShow: boolean;
  hideModal: Function;
  isOkOnly?: boolean;
}
const CPModal: FunctionComponent<ModalProps> = (props) => {
  const { isShow, title, children, hideModal, isOkOnly } = props;

  const showButtons = () => {
    if (isOkOnly) {
      return <Button clickHandler={() => hideModal(true)} label="Ok" type="customSaveBtn" />;
    }
    return (
      <>
        <Button clickHandler={() => hideModal(false)} label="Cancel" type="customCancelBtn" />
        <Button clickHandler={() => hideModal(true)} label="Save" type="customSaveBtn" />
      </>
    );
  };

  return (
    <Modal show={isShow} onHide={() => hideModal(false)}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{showButtons()}</Modal.Footer>
    </Modal>
  );
};

export default CPModal;
