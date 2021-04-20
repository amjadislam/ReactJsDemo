import React, { FunctionComponent, useEffect, useState } from 'react';
import Header from 'components/topHeader/topHeader';
import signupCatStyle from 'components/singupCategory/signupCategory.module.css';
import { useHistory, useParams } from 'react-router';
import { BOOLEAN_TRUE, RoleCode, User } from 'modules/user/types';
import BgProformer from 'views/signup/profile/BgProformer';
import CastingDirector from 'views/signup/profile/CastingDirector';
import ProductionDirector from 'views/signup/profile/ProductionDirector';
import BgCoordinator from 'views/signup/profile//BgCoordinator';
import { getHomePage, getRoletitle } from 'helpers/utils';
import Wizard from 'components/wizard/wizard';
import CPModal from 'components/Modal/CPModal';

interface SignupProfileProps {
  completeProfile: Function;
  getSettingRequest: Function;
  uploadProfileImageBegin: Function;
  isLoading: boolean;
  authError: string;
  isCompleted: boolean;
}
const SingupProfile: FunctionComponent<SignupProfileProps> = (props) => {
  const { completeProfile, getSettingRequest, uploadProfileImageBegin, isLoading, authError, isCompleted } = props;
  const { type } = useParams<{ type: RoleCode }>();
  const history = useHistory();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    getSettingRequest();
  }, []);

  useEffect(() => {
    if (isCompleted && type === 'PERFORMER') {
      const path = getHomePage(type);
      history.push(path);
    } else if (isCompleted) {
      setShowModal(true);
    }
  }, [isCompleted]);

  const localUser = localStorage.getItem('puser');
  const user = localUser ? JSON.parse(localUser) : {};

  const handleSubmitProfile = (puser: User) => {
    const payload = { user: puser, step: 2 };
    completeProfile(payload);
  };

  const handleModalClose = (isSave: boolean) => {
    setShowModal(false);
    if (isSave) {
      history.push('/login');
    }
  };

  const callComponent = () => {
    switch (type) {
      case 'PERFORMER':
        return (
          <BgProformer
            handleClick={handleSubmitProfile}
            authError={authError}
            isLoading={isLoading}
            user={user}
            uploadProfileImage={uploadProfileImageBegin}
          />
        );
      case 'DIRECTOR':
        return (
          <CastingDirector
            handleClick={handleSubmitProfile}
            authError={authError}
            isLoading={isLoading}
            user={user}
            uploadProfileImage={uploadProfileImageBegin}
          />
        );
      case 'COORDINATOR':
        return (
          <BgCoordinator
            handleClick={handleSubmitProfile}
            authError={authError}
            isLoading={isLoading}
            user={user}
            uploadProfileImage={uploadProfileImageBegin}
          />
        );
      case 'PRODUCTION':
        return (
          <ProductionDirector
            handleClick={handleSubmitProfile}
            authError={authError}
            isLoading={isLoading}
            user={user}
            uploadProfileImage={uploadProfileImageBegin}
          />
        );
      default:
        return '';
    }
  };

  return (
    <div className={signupCatStyle.signupWrapper}>
      <Header />
      <div className={signupCatStyle.backgroundWrapper}>
        <div className={signupCatStyle.bgInnerContent}>
          <h1>{getRoletitle(type)}</h1>
          <div className="d-none d-lg-block d-xl-block">
            <Wizard />
          </div>
        </div>
        {callComponent()}
        {showModal && (
          <CPModal isShow={showModal} hideModal={handleModalClose} isOkOnly={BOOLEAN_TRUE}>
            <p>Thank you for Registration. we will be in contact with you soon after verification</p>
          </CPModal>
        )}
      </div>
    </div>
  );
};
export default SingupProfile;
