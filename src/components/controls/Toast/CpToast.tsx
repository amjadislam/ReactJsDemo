import { ToastItem, ToastItemList } from 'modules/general/general.type';
import React, { FunctionComponent } from 'react';
import BToast from 'components/controls/Toast/BToast';
import Style from 'components/controls/Toast/CpToast.module.css';

interface CpToastProps {
  toastList?: ToastItemList;
  removeToast: Function;
}
const CpToast: FunctionComponent<CpToastProps> = (props) => {
  const { toastList, removeToast } = props;
  return (
    <>
      <div className={`${Style.notificationContainer} ${Style.topRight}`}>
        {toastList &&
          toastList.map((toast: ToastItem, i) => <BToast toast={toast} key={i} removeToast={removeToast} />)}
      </div>
    </>
  );
};

CpToast.defaultProps = {
  toastList: [],
};

export default CpToast;
