import React, { FunctionComponent, useEffect } from 'react';
import { User } from 'modules/user/types';
import BasicInfo from 'components/bgPerformer/BasicInfo/BasicInfo';
import Images from 'components/bgPerformer/Images/Images';
import Skill from 'components/bgPerformer/skills/Skill';
import Style from 'views/bgperformer/profile/Profile.module.css';

interface ProfileProps {
  profileData: User;
  performerProfileBegin?: Function;
}
const Profile: FunctionComponent<ProfileProps> = (props) => {
  const { profileData, performerProfileBegin } = props;
  useEffect(() => {
    if (performerProfileBegin) performerProfileBegin({ peformerId: '1' });
  }, []);

  if (!profileData) return <></>;

  return (
    <div className={`${Style.MainWrapper}`}>
      <div className={`${Style.BasicInfoWrapper}`}>
        <BasicInfo profile={profileData} />
      </div>
      <div className={`${Style.ImageWrapper}`}>
        <Images list={profileData.bgPerformer?.images} />
      </div>
      <div className={Style.SkillWrapper}>
        <Skill skills={profileData.bgPerformer?.skills} />
      </div>
    </div>
  );
};

export default Profile;
