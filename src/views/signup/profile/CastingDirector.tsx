import React, { FunctionComponent, useState } from 'react';
import InputField from 'components/controls/input/input';
import SignupStyle from 'views/signup/signup.module.css';
import Button from 'components/controls/button/button';
import { useParams } from 'react-router';
import FileInput from 'components/controls/fileInput/fileInput';
import TextArea from 'components/controls/textArea/textArea';
import { ProfileInputProps } from 'modules/user/types';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';
import PhoneNoInput from 'components/controls/phone/PhoneNoInput';

const CastingDirector: FunctionComponent<ProfileInputProps> = (props: ProfileInputProps) => {
  const { type } = useParams<{ type: string }>();
  const { handleClick, isLoading, authError, uploadProfileImage, user } = props;

  const [address, setAddress] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const textAreaChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>, stateFun: Function) => {
    stateFun(event.currentTarget.value);
  };

  const handleSubmitProfile = () => {
    console.log('Phone', phone, type);
    handleClick(
      Object.assign(user, {
        address,
        experience,
        phone,
        accountReason: reason,
        isCompleted: true,
      }),
    );
  };

  return (
    <div className={SignupStyle.signUpWrapper}>
      <TextErrorMessage message={authError} />
      <div className="row">
        <div className="col-sm-6">
          <InputField label="Address" handleChange={setAddress} />
        </div>
        <div className="col-sm-6">
          <InputField label="Expirence" handleChange={setExperience} />
        </div>
      </div>

      <div className="row profileCreation">
        <div className="col-sm-12">
          <PhoneNoInput handleChange={setPhone} value="phone" error={setPhoneError} />
          <TextErrorMessage message={phoneError} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12">
          <TextArea
            label="Why creating the account"
            blurHandler={(e: React.FormEvent<HTMLTextAreaElement>) => textAreaChangeHandler(e, setReason)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FileInput label="Upload resume(.pdf)" handelFile={uploadProfileImage} />
        </div>
      </div>
      <div className="text-center mt-4">
        <Button
          label="we will be in contact with them soon to verify there account"
          cssClass=" login-btn w-100"
          isDisabled={false}
          showLoading={isLoading}
          clickHandler={handleSubmitProfile}
        />
      </div>
    </div>
  );
};
export default CastingDirector;
