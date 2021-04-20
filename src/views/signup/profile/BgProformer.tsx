import React, { FunctionComponent, useEffect, useState } from 'react';
import SignupStyle from 'views/signup/signup.module.css';
import Button from 'components/controls/button/button';
import ImageInput from 'components/controls/fileInput/ImageInput/ImageInput';
import SelectOption from 'components/controls/select/SelectOption';
import GenderTypes from 'helpers/data/Gender';
import { ProfileInputProps } from 'modules/user/types';
import SearchBar from 'components/searchbar/SearchBar';
import signupProfileStyle from 'views/signup/profile/signupProfile.module.css';
import plusIcon from 'assets/images/plus-icon.png';
import PhoneNoInput from 'components/controls/phone/PhoneNoInput';
import DropDownSearch from 'components/controls/select/DropDownSearch';
import Style from 'components/CreateShow/CreateShow.module.css';
import { getHeightOptions, getWeightOption } from 'helpers/data/SelectOptions';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';
import DateInput from 'components/controls/input/DateInput';

const BgProformer: FunctionComponent<ProfileInputProps> = (props: ProfileInputProps) => {
  const { handleClick, isLoading, authError, uploadProfileImage, user } = props;

  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hair, setHair] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [phone, setPhone] = useState('');
  const [disable, setDisable] = useState(false);
  const [phoneError, setPhoneError] = useState<string>('');

  useEffect(() => {
    const isValidInput =
      sex.length > 0 &&
      age.length > 0 &&
      weight.length > 0 &&
      height.length > 0 &&
      hair.length > 0 &&
      eyeColor.length > 0 &&
      phoneError.length === 0;

    setDisable(!isValidInput);
  });

  const handleSubmitProfile = () => {
    const bgPerformer = {
      gender: sex,
      dateOfBirth: age,
      height,
      weight,
      hair,
      eyeColor,
    };

    handleClick(Object.assign(user, { bgPerformer, isCompleted: true }));
  };

  return (
    <div className={`${SignupStyle.signUpWrapper} ${SignupStyle.BgPerformerPage}`}>
      <TextErrorMessage message={authError} />
      <div className="row">
        <div className="col-sm-5">
          <ImageInput handelFile={uploadProfileImage} userId={user.id} />
        </div>
        <div className="col-sm-7">
          <SearchBar placeholder="Search" />
          <div className={`text-left ${signupProfileStyle.addSkillWrapper}`}>
            <img src={plusIcon} alt="" />
            <span className={`ml-2 ${signupProfileStyle.addSkillText}`}>Add Skill</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <SelectOption label="Sex" data={GenderTypes} handleSelect={setSex} />
        </div>
        <div className="col-sm-6">
          <DateInput label="Date Of Birth" value={age} handleChange={setAge} />
        </div>
      </div>
      <div className="row profileCreation">
        <div className="col-sm-6">
          <DropDownSearch
            label="Height"
            value={height}
            cssClass={Style.createInputLabel}
            data={getHeightOptions()}
            defaultValue="select"
            handleSelect={setHeight}
          />
        </div>
        <div className="col-sm-6">
          <DropDownSearch
            label="Weight"
            value={weight}
            cssClass={Style.createInputLabel}
            data={getWeightOption()}
            defaultValue="select"
            handleSelect={setWeight}
          />
        </div>
      </div>
      <div className="row profileCreation">
        <div className="col-sm-6">
          <DropDownSearch
            label="Hair"
            value={hair}
            cssClass={Style.createInputLabel}
            optionType="hair"
            defaultValue="select"
            handleSelect={setHair}
          />
        </div>
        <div className="col-sm-6">
          <DropDownSearch
            label="Eye color"
            value={eyeColor}
            cssClass={Style.createInputLabel}
            optionType="eyes"
            defaultValue="select"
            handleSelect={setEyeColor}
          />
        </div>
      </div>

      <div className="row profileCreation">
        <div className="col-sm-12">
          <PhoneNoInput handleChange={setPhone} value={phone} error={setPhoneError} />
          <TextErrorMessage message={phoneError} />
        </div>
      </div>
      <div className="text-center mt-4">
        <Button
          label="Continue to finish your profile"
          cssClass=" login-btn w-100"
          isDisabled={disable}
          showLoading={isLoading}
          clickHandler={handleSubmitProfile}
        />
      </div>
    </div>
  );
};
export default BgProformer;
