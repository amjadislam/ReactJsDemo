import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import SearchButton from 'components/controls/button/button';
import FindPerformerCalender from 'components/calendar/FindPerformerCalender/FindPerformerCalender';
import SliderWrapper from 'components/controls/Slider/SliderWrapper';
import moment from 'moment-timezone';
import PerformerSearchFilterTab from 'components/PerformerSearchFilterTabs/PerformerSearchFilterTab';
import { OPTION_TYPE } from 'modules/general/general.type';
import DropDownSearch from 'components/controls/select/DropDownSearch';
import {
  getHeightOptions,
  getInseamOptions,
  getJacketSizeOptions,
  getNeckOptions,
  getSleeveOptions,
  NumberOptions,
} from 'helpers/data/SelectOptions';
import { SearchFilterType, SearchFilterTypeList } from 'modules/PerformerList/list.types';
import { IPerformerSearchParam } from 'modules/params/param.type';
import { ShowDayJob, SORT_FULL_UNION, SORT_NO_UNION } from 'modules/Show/show.types';
import { BOOLEAN_TRUE } from 'modules/user/types';
import barSvg from 'assets/svg/bar.svg';
import searchSvg from 'assets/svg/search.svg';
import upArrowSvg from 'assets/svg/up-arrow.svg';
import downArrowSvg from 'assets/svg/down-arrow.svg';
import SearchProfileContStyle from './SearchProfileContainer.module.css';

interface SearchPeformerProps {
  isLoading: boolean;
  searchPerformerRequest: Function;
  clearSearchResult: Function;
  selectedJob: ShowDayJob;
}
const FindPerformerContainer: FunctionComponent<SearchPeformerProps> = (props) => {
  const { isLoading, searchPerformerRequest, clearSearchResult, selectedJob } = props;

  const [selectedDate, setSelectedDate] = useState('');
  const [ethnicity, setEthnicity] = useState(selectedJob.ethinicity || '');
  const [category, setCategory] = useState(selectedJob.category || '');
  const [unionStatus, setUnionStatus] = useState('');
  const [gender, setGender] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [specialSkills, setSpecialSkills] = useState('');
  const [location, setLocation] = useState('');
  const [lowestAge, setLowestAge] = useState(selectedJob.age || '');
  const [highestAge, setHighestAge] = useState('');
  const [minHeight, setMinHeight] = useState(selectedJob.minHeight || '');
  const [maxHeight, setMaxHeight] = useState(selectedJob.maxHeight || '');
  const [lightestWeight, setLightestWeight] = useState(selectedJob.weight || '');
  const [heaviestWeight, setHeaviestWeight] = useState('');
  const [unionSorting, setUnionSorting] = useState('');
  const [eyes, setEyes] = useState(selectedJob.eyes || '');
  const [hair, setHair] = useState(selectedJob.hair || '');
  const [chest, setChest] = useState(selectedJob.chest || '');
  const [maxChest, setMaxChest] = useState(selectedJob.maxChest || '');
  const [neck, setNeck] = useState(selectedJob.neck || '');
  const [maxNeck, setMaxNeck] = useState(selectedJob.maxNeck || '');
  const [sleeve, setSleeve] = useState(selectedJob.sleeve || '');
  const [maxSleeve, setMaxSleeve] = useState(selectedJob.maxSleeve || '');
  const [jacket, setJacket] = useState(selectedJob.jacket || '');
  const [maxJacket, setMaxJacket] = useState(selectedJob.maxJacket || '');
  const [inseam, setInseam] = useState(selectedJob.inseam || '');
  const [maxInseam, setMaxInseam] = useState(selectedJob.maxInseam || '');
  const [shoes, setShoes] = useState(selectedJob.shoes || '');
  const [maxShoes, setMaxShoes] = useState(selectedJob.maxShoes || '');

  useEffect(() => {
    clearSearchResult();
  }, []);

  const calendarDates = () => {
    console.log('Calendar call');
    const date = moment();
    const arr = [];
    for (let i = 1; i < 31; i += 1) {
      arr.push({
        id: i,
        date: date.format('DD-MM-YYYY'),
        dayTitle: date.format('DD'),
        title: date.format('MMM'),
      });
      date.add(1, 'days');
    }
    return arr;
  };

  const getCalendarDates = useMemo(() => calendarDates(), []);

  const handleRemoveFilter = (e: React.FormEvent<HTMLDivElement>, type: OPTION_TYPE) => {
    switch (type) {
      case 'ethinicity':
        return setEthnicity('');
      case 'union':
        return setUnionStatus('');
      case 'gender':
        return setGender('');
      case 'category':
        return setCategory('');
      case 'vehicle':
        return setVehicle('');
      case 'skills':
        return setSpecialSkills('');
      case 'location':
        return setLocation('');
      case 'minheight':
        return setMinHeight('');
      case 'maxheight':
        return setMaxHeight('');
      case 'minage':
        return setLowestAge('');
      case 'maxage':
        return setHighestAge('');
      case 'minweight':
        return setLightestWeight('');
      case 'maxweight':
        return setHeaviestWeight('');
      case 'eyes':
        return setEyes('');
      case 'hair':
        return setHair('');
      case 'neck':
        return setNeck('');
      case 'maxneck':
        return setMaxNeck('');
      case 'sleeve':
        return setSleeve('');
      case 'maxsleeve':
        return setMaxSleeve('');
      case 'shoe':
        return setShoes('');
      case 'maxshoe':
        return setMaxShoes('');
      case 'jacket':
        return setJacket('');
      case 'maxjacket':
        return setMaxJacket('');
      case 'chest':
        return setChest('');
      case 'maxchest':
        return setMaxChest('');
      default:
        return '';
    }
  };

  const handleRemoveWrapper = (label: string, type: OPTION_TYPE) => ({
    label,
    remove: (e: React.FormEvent<HTMLDivElement>) => {
      handleRemoveFilter(e, type);
    },
  });

  const updateFilters = () => {
    const arr: SearchFilterTypeList = [];
    if (ethnicity) arr.push(handleRemoveWrapper(ethnicity, 'ethinicity'));
    if (unionStatus) arr.push(handleRemoveWrapper(`union ${unionStatus}`, 'union'));
    if (gender) arr.push(handleRemoveWrapper(gender, 'gender'));
    if (category) arr.push(handleRemoveWrapper(`category ${category}`, 'category'));
    if (vehicle) arr.push(handleRemoveWrapper(vehicle, 'vehicle'));
    if (specialSkills) arr.push(handleRemoveWrapper(specialSkills, 'skills'));
    if (location) arr.push(handleRemoveWrapper(location, 'location'));
    if (lowestAge) arr.push(handleRemoveWrapper(`lowest age ${lowestAge}`, 'minage'));
    if (highestAge) arr.push(handleRemoveWrapper(`highest age ${highestAge}`, 'maxage'));
    if (lightestWeight) arr.push(handleRemoveWrapper(`min weight ${lightestWeight}`, 'minweight'));
    if (heaviestWeight) arr.push(handleRemoveWrapper(`max weight ${heaviestWeight}`, 'maxweight'));
    if (eyes) arr.push(handleRemoveWrapper(eyes, 'eyes'));
    if (hair) arr.push(handleRemoveWrapper(hair, 'hair'));
    if (minHeight) arr.push(handleRemoveWrapper(`min height ${minHeight}`, 'minheight'));
    if (maxHeight) arr.push(handleRemoveWrapper(`max height ${maxHeight}`, 'maxheight'));
    if (neck) arr.push(handleRemoveWrapper(`min neck ${neck}`, 'neck'));
    if (maxNeck) arr.push(handleRemoveWrapper(`max neck ${maxNeck}`, 'maxneck'));
    if (sleeve) arr.push(handleRemoveWrapper(`min sleeve ${sleeve}`, 'sleeve'));
    if (maxSleeve) arr.push(handleRemoveWrapper(`max sleeve ${maxSleeve}`, 'maxsleeve'));
    if (inseam) arr.push(handleRemoveWrapper(`min inseam ${inseam}`, 'inseam'));
    if (maxInseam) arr.push(handleRemoveWrapper(`max inseam ${maxInseam}`, 'maxinseam'));
    if (shoes) arr.push(handleRemoveWrapper(`min shoes ${shoes}`, 'shoe'));
    if (maxShoes) arr.push(handleRemoveWrapper(`max shoes ${maxShoes}`, 'maxshoe'));
    if (jacket) arr.push(handleRemoveWrapper(`min jacket ${jacket}`, 'jacket'));
    if (maxJacket) arr.push(handleRemoveWrapper(`max jacket ${maxJacket}`, 'maxjacket'));
    if (chest) arr.push(handleRemoveWrapper(`min chest ${chest}`, 'chest'));
    if (maxChest) arr.push(handleRemoveWrapper(`max chest ${maxChest}`, 'maxchest'));

    return arr.map((filter: SearchFilterType, index) => <PerformerSearchFilterTab key={index} filter={filter} />);
  };

  const clickHandle = () => {
    const params: IPerformerSearchParam = {
      ethinicity: ethnicity,
      location,
      unionStatus,
      minHeight,
      maxHeight,
      minWeight: lightestWeight,
      maxWeight: heaviestWeight,
      minAge: lowestAge,
      maxAge: highestAge,
      vehicle,
      hair,
      eyes,
      skills: specialSkills,
      gender,
      unionSorting,
      chest,
      maxChest,
      neck,
      maxNeck,
      sleeve,
      maxSleeve,
      inseam,
      maxInseam,
      jacket,
      maxJacket,
      shoes,
      maxShoes,
    };
    searchPerformerRequest(params);
  };

  return (
    <>
      <div className={`mb-3 ${SearchProfileContStyle.searchWrapper}`}>
        <div className="row performerSearchWrapper">
          <div className="col-sm-3">
            <DropDownSearch
              label="Ethnicity"
              value={ethnicity}
              defaultValue="Scottish"
              optionType="ethinicity"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setEthnicity}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Category"
              value={category}
              optionType="category"
              defaultValue="Select"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setCategory}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Union status"
              optionType="union"
              value={unionStatus}
              defaultValue="Select"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setUnionStatus}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Hair"
              optionType="hair"
              value={hair}
              defaultValue="Select"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setHair}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Eyes"
              optionType="eyes"
              value={eyes}
              defaultValue="Select"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setEyes}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Gender"
              optionType="gender"
              value={gender}
              defaultValue="Select"
              handleSelect={setGender}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch label="Vehicle" defaultValue="Select" handleSelect={setVehicle} />
          </div>
          <div className="col-sm-3">
            <DropDownSearch
              label="Special skills"
              defaultValue="Select"
              value={specialSkills}
              handleSelect={setSpecialSkills}
            />
          </div>
          <div className="col-sm-3">
            <DropDownSearch label="Location" value={location} defaultValue="Scottish" handleSelect={setLocation} />
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  label="Age"
                  value={lowestAge}
                  defaultValue="Lowest"
                  data={NumberOptions(5, 55)}
                  handleSelect={setLowestAge}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  label="Max Age"
                  cssClass={SearchProfileContStyle.noLabel}
                  value={highestAge}
                  defaultValue="Highest"
                  data={NumberOptions(5, 55)}
                  handleSelect={setHighestAge}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={minHeight}
                  label="Height"
                  data={getHeightOptions()}
                  defaultValue="Min"
                  handleSelect={setMinHeight}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxHeight}
                  data={getHeightOptions()}
                  label="Max Height"
                  cssClass={SearchProfileContStyle.noLabel}
                  defaultValue="Max"
                  handleSelect={setMaxHeight}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={lightestWeight}
                  label="Weight"
                  data={NumberOptions(10, 150)}
                  defaultValue="Lightest"
                  handleSelect={setLightestWeight}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={heaviestWeight}
                  data={NumberOptions(10, 150)}
                  label="weight"
                  cssClass={SearchProfileContStyle.noLabel}
                  defaultValue="Heaviest"
                  handleSelect={setHeaviestWeight}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={chest}
                  label="Chest"
                  data={NumberOptions(15, 80)}
                  defaultValue="min"
                  handleSelect={setChest}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxChest}
                  data={NumberOptions(15, 80)}
                  label="weight"
                  cssClass={SearchProfileContStyle.noLabel}
                  defaultValue="max"
                  handleSelect={setMaxChest}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={neck}
                  label="Neck"
                  data={getNeckOptions()}
                  defaultValue="min"
                  handleSelect={setNeck}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxNeck}
                  data={getNeckOptions()}
                  label="max Neck"
                  cssClass={SearchProfileContStyle.noLabel}
                  defaultValue="max"
                  handleSelect={setMaxNeck}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={sleeve}
                  label="Sleeve"
                  data={getSleeveOptions()}
                  defaultValue="min"
                  handleSelect={setSleeve}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxSleeve}
                  data={getSleeveOptions()}
                  label="max Neck"
                  cssClass={SearchProfileContStyle.noLabel}
                  defaultValue="max"
                  handleSelect={setMaxSleeve}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={jacket ?? ''}
                  cssClass={SearchProfileContStyle.createInputLabel}
                  data={getJacketSizeOptions()}
                  label="Jacket"
                  defaultValue="min"
                  handleSelect={setJacket}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxJacket ?? ''}
                  cssClass={SearchProfileContStyle.noLabel}
                  data={getJacketSizeOptions()}
                  label="Max Jacket"
                  defaultValue="max"
                  handleSelect={setMaxJacket}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={inseam ?? ''}
                  cssClass={SearchProfileContStyle.createInputLabel}
                  label="Inseam"
                  data={getInseamOptions()}
                  defaultValue="min"
                  handleSelect={setInseam}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxInseam ?? ''}
                  cssClass={SearchProfileContStyle.noLabel}
                  label="Max Inseam"
                  data={getInseamOptions()}
                  defaultValue="max"
                  handleSelect={setMaxInseam}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={shoes ?? ''}
                  cssClass={SearchProfileContStyle.createInputLabel}
                  data={NumberOptions(5, 15)}
                  label="Shoe size"
                  defaultValue="min"
                  handleSelect={setShoes}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxShoes ?? ''}
                  cssClass={SearchProfileContStyle.noLabel}
                  data={NumberOptions(5, 15)}
                  label="Max Shoes"
                  defaultValue="max"
                  handleSelect={setMaxShoes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="text-right">
              <SearchButton showLoading={isLoading} label="Search" clickHandler={clickHandle} />
            </div>
          </div>
        </div>
      </div>
      <div className={`mb-3 justify-content-between  ${SearchProfileContStyle.searchCalenderWrapper}`}>
        <SliderWrapper slideToShow={14}>
          {getCalendarDates.map((date) => (
            <FindPerformerCalender
              key={date.id}
              isSelected={selectedDate === date.date}
              title={date.title}
              dayNo={date.dayTitle}
              handleClick={() => {
                setSelectedDate(date.date);
              }}
            />
          ))}
        </SliderWrapper>
      </div>
      <div className="mb-3">
        <div className={`d-flex justify-content-between ${SearchProfileContStyle.sortWrapper}`}>
          <p className={`mb-0  ${SearchProfileContStyle.sortTitle}`}>Sort by</p>
          <div className="d-flex performerSearchWrapper searchSectionWrapper">
            <DropDownSearch defaultValue="Active" />
          </div>
          <div className={SearchProfileContStyle.searchbarIconsWrapper}>
            <img src={barSvg} alt="" className={SearchProfileContStyle.bar} />
            <div
              onClick={() => setUnionSorting(SORT_FULL_UNION)}
              onKeyPress={() => setUnionSorting(SORT_FULL_UNION)}
              role="button"
              tabIndex={0}
            >
              <img src={upArrowSvg} alt="" />
            </div>
            <div
              onClick={() => setUnionSorting(SORT_NO_UNION)}
              onKeyPress={() => setUnionSorting(SORT_NO_UNION)}
              role="button"
              tabIndex={0}
            >
              <img src={downArrowSvg} alt="" />
            </div>
          </div>
          <div className={`form-group mb-0 position-relative ${SearchProfileContStyle.searchAreaWrapper}`}>
            <input
              type="text"
              placeholder="Search"
              className={`border-0 form-control ${SearchProfileContStyle.searchArea}`}
            />
            <img src={searchSvg} alt="" className={SearchProfileContStyle.inputSearchIcon} />
          </div>
        </div>
      </div>
      <div className="mb-3 d-flex flex-wrap">{updateFilters()}</div>
    </>
  );
};

export default FindPerformerContainer;
