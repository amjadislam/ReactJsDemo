import React, { FunctionComponent } from 'react';
import { Show } from 'modules/Show/show.types';
import Style from 'components/ShowTopNavigation/ShowTopNav.module.css';

interface ItemProps {
  item: Show;
  selected: boolean;
  handleClick: (event: React.FormEvent<HTMLDivElement>) => void;
}
const NavItem: FunctionComponent<ItemProps> = (props: ItemProps) => {
  const { item, selected, handleClick } = props;
  const cssClass = selected ? `${Style.navItemSelected} selected-item` : Style.navItem;

  return (
    <>
      <div className={cssClass} onClick={handleClick} id={item.id} role="button" tabIndex={0} onKeyPress={handleClick}>
        {item.title}
      </div>
    </>
  );
};

export default NavItem;
