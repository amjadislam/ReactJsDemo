import React, { FunctionComponent, useState } from 'react';
import Style from 'components/controls/multiSelectList/MultiSelectList.module.css';
import DashboardInput from 'components/controls/input/dashboardInput/dashboardInput';
import { SelectOptionType, SelectOptionTypeList } from 'modules/PerformerList/list.types';

interface MultiSelectListProps {
  list: SelectOptionTypeList;
  setSelectedIds?: Function;
  cssClass?: string;
}
const MultiSelectList: FunctionComponent<MultiSelectListProps> = (props) => {
  const { list, setSelectedIds } = props;
  const [items, setItems] = useState(list);
  const [searh, setSearch] = useState<string>('');

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tmpItems = items.map((item: SelectOptionType) => {
      const tmp = { ...item };
      if (item.value === event.currentTarget.id) tmp.isChecked = !tmp.isChecked;
      return tmp;
    });

    const selectedIds = tmpItems.filter((item: SelectOptionType) => item.isChecked).map((item: any) => item.value);

    if (setSelectedIds) setSelectedIds(selectedIds.join(','));

    setItems([...tmpItems]);
  };

  const filterItems = (val: string) => {
    if (val.length) {
      return items.filter((item: SelectOptionType) => item.label.toLowerCase().includes(val.toLocaleLowerCase()));
    }
    return items;
  };

  return (
    <div className={Style.multiSelectWrapper}>
      <DashboardInput cssClass={Style.searchAddList} handleChange={setSearch} placeholder="Search" />
      {filterItems(searh).map((item: SelectOptionType) => (
        <div className="px-3">
          <label htmlFor={item.value} key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              checked={item.isChecked}
              onChange={handleCheckChange}
            />
            &nbsp;
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultiSelectList;
