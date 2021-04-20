import React, { FunctionComponent, useEffect, useState } from 'react';
import PerformerContStyle from 'containers/MyPerformerListContainer/MyPerformerListContainer.module.css';
import MyPerformerList from 'components/MyPerformerList/MyPerformerList';
import Button from 'components/controls/button/button';
import { MyPerformerListType } from 'modules/PerformerList/list.types';
import { User } from 'modules/user/types';
import PerformerView from 'components/MyPerformerList/PerformerView';
import CPModal from 'components/Modal/CPModal';
import NewList from 'components/MyPerformerList/NewList/NewList';
import plusSvg from 'assets/svg/plus.svg';

interface MyPerformerContainerProps {
  performerList: MyPerformerListType;
  selectedPerformer: User;
  getMyPerformerListRequest: Function;
  createMyPerformerListRequest: Function;
}
const MyPerformerContainer: FunctionComponent<MyPerformerContainerProps> = (props) => {
  const { performerList, getMyPerformerListRequest, selectedPerformer, createMyPerformerListRequest } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  useEffect(() => {
    getMyPerformerListRequest();
  }, []);

  useEffect(() => {
    console.log('[MyPerformerContainer] Render');
  }, [performerList]);

  const handleClick = () => setShowModal(true);
  const handleCloseModal = (type: boolean) => {
    if (type && name && name.length > 0) {
      createMyPerformerListRequest({ title: name });
    }
    setShowModal(false);
  };

  return (
    <>
      <div className={PerformerContStyle.performerListWrapper}>
        <p className={PerformerContStyle.listHeading}>Lists</p>
        <Button
          clickHandler={handleClick}
          icon={plusSvg}
          label="Create new list"
          cssClass={PerformerContStyle.ButtonText}
        />
      </div>
      <>
        {performerList.map((list) => (
          <MyPerformerList key={list.id} label={list.title} performList={list.performers} />
        ))}
      </>
      {'id' in selectedPerformer ? <PerformerView /> : ''}

      {showModal && (
        <CPModal isShow={showModal} hideModal={handleCloseModal} title="New List">
          <NewList setName={setName} />
        </CPModal>
      )}
    </>
  );
};

export default MyPerformerContainer;
