import React, { FunctionComponent } from 'react';
import SignupStyle from 'views/signup/signup.module.css';
import Button from 'components/controls/button/button';
import { useParams } from 'react-router';
import ImageInput from 'components/controls/fileInput/ImageInput/ImageInput';
import { ProfileInputProps } from 'modules/user/types';
import FileInput from 'components/controls/fileInput/fileInput';

const BgCoordinator: FunctionComponent<ProfileInputProps> = (props: ProfileInputProps) => {
  const { handleClick, uploadProfileImage, user } = props;
  const { type } = useParams<{ type: string }>();

  const handleSubmitProfile = () => {
    console.log('Phone', type);

    handleClick(
      Object.assign(user, {
        isCompleted: true,
      }),
    );
  };

  return (
    <div className={`${SignupStyle.signUpWrapper} ${SignupStyle.bgCoordinatorPage}`}>
      <div className="row">
        <div className="col-sm-6">
          <ImageInput handelFile={uploadProfileImage} userId={user.id} />
        </div>
        <div className="col-sm-6">
          <FileInput handelFile={uploadProfileImage} />
        </div>
      </div>

      <div className="text-center">
        <Button
          label="Continue to finish your profile"
          cssClass=" login-btn w-100"
          clickHandler={handleSubmitProfile}
        />
      </div>
    </div>
  );
};
export default BgCoordinator;
