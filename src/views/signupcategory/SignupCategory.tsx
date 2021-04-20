import React, { FunctionComponent } from 'react';
import Header from 'components/topHeader/topHeader';
import signupCatStyle from 'components/singupCategory/signupCategory.module.css';
import SingupCategoryOption from 'components/singupCategory/SignupCategoryOptions';
import { RoleCode } from 'modules/user/types';
import { useHistory } from 'react-router';
import options from 'components/singupCategory/options';

const SingupCategory: FunctionComponent = () => {
  const history = useHistory();

  const clickHandler = (type: RoleCode) => {
    history.push(`signup/${type}`);
  };

  return (
    <div className={signupCatStyle.signupWrapper}>
      <Header />
      <div className={signupCatStyle.backgroundWrapper}>
        <div className={signupCatStyle.bgInnerContent}>
          <h1>Sign up</h1>
          <p className={signupCatStyle.afterHeading}>Simplify casting calls and finding work through democode.</p>
        </div>
        <div className={signupCatStyle.cardsWrapper}>
          <div className={signupCatStyle.noTextDesktop}>
            Simplify casting calls and finding work through democode.
          </div>
          <div className={signupCatStyle.cardsInnerWrapper}>
            {options.map((opt, index) => (
              <SingupCategoryOption
                key={index}
                label={opt.label}
                image={opt.image}
                clickHandler={() => clickHandler(opt.type)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingupCategory;
