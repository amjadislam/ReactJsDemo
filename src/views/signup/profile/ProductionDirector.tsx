import React, { FunctionComponent } from 'react';
import buttonStyle from 'components/controls/button/button.module.css';
import LoginStyle from 'views/login/login.module.css';
import SignupStyle from 'views/signup/signup.module.css';
import Button from 'components/controls/button/button';
import { useParams } from 'react-router';
import ImageInput from 'components/controls/fileInput/ImageInput/ImageInput';
import { ProfileInputProps } from 'modules/user/types';

const ProductionDirector: FunctionComponent<ProfileInputProps> = (props: ProfileInputProps) => {
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
    <div className={SignupStyle.signUpWrapper}>
      <div className="row">
        <div className="col-sm-6">
          <ImageInput handelFile={uploadProfileImage} userId={user.id} />
        </div>
      </div>

      <div className={`${buttonStyle.loginBtnWrapper} ${LoginStyle.mT20}`}>
        <Button
          label="Continue to finish your profile"
          cssClass=" login-btn w-100"
          clickHandler={handleSubmitProfile}
        />
      </div>
    </div>
  );
};
export default ProductionDirector;
