import React, { FunctionComponent, useState } from 'react';
import { ShowDayJob, ShowDayJobList } from 'modules/Show/show.types';
import Button from 'components/controls/button/button';
import Style from 'components/ShowJob/ShowRoleList.module.css';
import customStyle from 'assets/css/customStyle.module.css';
import plusSvg from 'assets/svg/plus.svg';

interface ShowJobListProps {
  showJobList: ShowDayJobList;
  setSelectedJob: Function;
  createEmptyShowJob: Function;
}
const ShowJobList: FunctionComponent<ShowJobListProps> = (props: ShowJobListProps) => {
  const { showJobList, setSelectedJob, createEmptyShowJob } = props;
  const [role, setRole] = useState('');
  const styleClass = (roleId: string) => (role === roleId ? Style.selectedRoleItem : '');

  const handleClickNew = () => {
    setRole('-1');
    createEmptyShowJob();
  };

  return (
    <>
      {showJobList.map((obj: ShowDayJob) => (
        <div
          className={`${Style.roleItem} ${styleClass(obj.id)}`}
          key={obj.id}
          onClick={() => {
            setRole(obj.id);
            setSelectedJob(obj);
          }}
          onKeyPress={() => {
            setRole(obj.id);
            setSelectedJob(obj);
          }}
          role="button"
          tabIndex={0}
        >
          {obj.title}
        </div>
      ))}
      <div className={Style.newRoleButton}>
        <Button cssClass={customStyle.customBtnLabel} label="New" icon={plusSvg} clickHandler={handleClickNew} />
      </div>
    </>
  );
};

export default ShowJobList;
