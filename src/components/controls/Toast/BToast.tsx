import { ToastItem } from 'modules/general/general.type';
import React, { FunctionComponent } from 'react';
import { Toast } from 'react-bootstrap';

interface BToastProps {
  toast: ToastItem;
  removeToast: Function;
}
const BToast: FunctionComponent<BToastProps> = (props) => {
  const { toast, removeToast } = props;
  const show = true;
  return (
    <>
      <Toast onClose={() => removeToast(0)} show={show} delay={2000} id={toast.id} autohide>
        <Toast.Header>
          <strong className="mr-auto">{toast.title}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

export default BToast;
