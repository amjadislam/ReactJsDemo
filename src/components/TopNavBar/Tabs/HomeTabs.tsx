import React, { FunctionComponent, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabItemHeader from 'components/TopNavBar/Tabs/TabItemHeader/TabItemHeader';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';
import matrixSvg from 'assets/svg/matrix.svg';
import sendSvg from 'assets/svg/send.svg';
import searchSvg from 'assets/svg/search.svg';
import settingSvg from 'assets/svg/setting.svg';
import calendarSvg from 'assets/svg/calendar.svg';
import calendarActiveSvg from 'assets/svg/calendar-active.svg';
import profileSvg from 'assets/svg/profile.svg';

interface HomeTabsProps {
  defaultTab: string;
  setSelectedTab: Function;
}
const HomeTabs: FunctionComponent<HomeTabsProps> = (props) => {
  const { setSelectedTab, defaultTab } = props;
  const [key, setKey] = useState<string>(defaultTab || '1');
  const handleChange = (newValue?: string) => {
    let selectedTab = '1';
    setKey(newValue || '1');
    if (!newValue) {
      return;
    }
    switch (newValue) {
      case '0':
        selectedTab = '0';
        break;
      case '1':
        selectedTab = '1';
        break;
      case '2':
        selectedTab = '2';
        break;
      case '3':
        selectedTab = '3';
        break;
      default:
        break;
    }
    setSelectedTab(selectedTab);
  };

  const castingDirectorTabs = () => (
    <Tabs activeKey={key} id="democode" onSelect={(k) => handleChange(k ?? '1')}>
      <Tab eventKey="0" title={<TabItemHeader label="Matrix" path={matrixSvg} />} />
      <Tab eventKey="1" title={<TabItemHeader label="Casting Request" path={sendSvg} />} />
      <Tab eventKey="2" title={<TabItemHeader label="Find Performer" path={searchSvg} />} />
      <Tab eventKey="3" title={<TabItemHeader label="Tools" path={settingSvg} />} />
    </Tabs>
  );

  const bgPerformerTabs = () => (
    <Tabs activeKey={key} id="democode" onSelect={(k) => handleChange(k ?? '1')}>
      <Tab eventKey="1" title={<TabItemHeader label="Calendar" path={calendarActiveSvg} />} />
      <Tab eventKey="2" title={<TabItemHeader label="Submit" path={calendarSvg} />} />
      <Tab eventKey="3" title={<TabItemHeader label="Profile Performer" path={profileSvg} />} />
    </Tabs>
  );

  const appTabs = () => {
    const user = getItemFromLocalStorage('user') || {};
    const type = user.role;

    switch (type) {
      case 'PERFORMER':
        return bgPerformerTabs();
      case 'DIRECTOR':
        return castingDirectorTabs();
      default:
        return '';
    }
  };

  return <div className="topHomeTabs">{appTabs()}</div>;
};

export default HomeTabs;
