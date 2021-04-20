import React, { FunctionComponent, useEffect, useState } from 'react';
import { ShowDayJob, roleValidationErrorObj, EmailTemplate, EmailTemplateList } from 'modules/Show/show.types';
import Button from 'components/controls/button/button';
import Heading from 'components/controls/heading/Heading';
import DashboardInput from 'components/controls/input/dashboardInput/dashboardInput';
import DashboardTextarea from 'components/controls/textArea/dashbaordTextarea/dashboardTextarea';
import Style from 'components/CreateShow/CreateShow.module.css';
import customStyle from 'assets/css/customStyle.module.css';
import DropDownSearch from 'components/controls/select/DropDownSearch';
import {
  NumberOptions,
  getInseamOptions,
  getJacketSizeOptions,
  getNeckOptions,
  getSleeveOptions,
  getWasitOption,
  getWeightOption,
  getHeightOptions,
  getTextTemplates,
} from 'helpers/data/SelectOptions';
import { BOOLEAN_TRUE } from 'modules/user/types';
import TextEditor from 'components/controls/textEditor/TextEditor';
import role from 'assets/svg/role.svg';
import locationSvg from 'assets/svg/location.svg';
import additionalInfoSvg from 'assets/svg/info.svg';
import envelopeSvg from 'assets/svg/mail.svg';

interface ShowJobEntryProps {
  createJobBegin: Function;
  addJob: Function;
  selectedJob: ShowDayJob;
  setSelectedTab: Function;
  setSelectedJob: Function;
  templateList: EmailTemplateList;
}

const ShowJobEntry: FunctionComponent<ShowJobEntryProps> = (props) => {
  const { addJob, selectedJob, setSelectedTab, setSelectedJob, templateList } = props;

  const [id, setId] = useState<string>(selectedJob.id || '-1');
  const [title, setTitle] = useState<string>(selectedJob.title || '');
  const [noOfPerformer, setNoOfPerformer] = useState<number>(selectedJob.noOfPerformerRequired);
  const [date, setDate] = useState<string>(selectedJob.date || '');
  const [location, setLocation] = useState<string>(selectedJob.location || '');
  const [ehtinicity, setEhtinicity] = useState<string>(selectedJob.ethinicity || '');
  const [clothingOption, setClothingOption] = useState<string>(selectedJob.clothingOption || '');
  const [bodyRequirements, setBodyRequirements] = useState<string>(selectedJob.bodyRequirements || '');
  const [remarks, setRemarks] = useState<string>(selectedJob.remarks || '');
  const [additionalInfo, setAdditionalInfo] = useState<string>(selectedJob.additionalInfo || '');
  const [isSaveForLater, setSaveForLater] = useState<boolean>(selectedJob.isSaveForLater);
  const [errors, setErrors] = useState(roleValidationErrorObj);
  const [minHeight, setMinHeight] = useState(selectedJob.minHeight);
  const [maxHeight, setMaxHeight] = useState(selectedJob.maxHeight);
  const [weight, setWeight] = useState(selectedJob.weight);
  const [maxWeight, setMaxWeight] = useState(selectedJob.maxWeight);
  const [waist, setWaist] = useState(selectedJob.waist || '');
  const [maxWaist, setMaxWaist] = useState(selectedJob.maxWaist || '');
  const [neck, setNeck] = useState(selectedJob.neck || '');
  const [maxNeck, setMaxNeck] = useState(selectedJob.maxNeck || '');
  const [jacket, setJacket] = useState(selectedJob.jacket || '');
  const [maxJacket, setMaxJacket] = useState(selectedJob.maxJacket || '');
  const [inseam, setInseam] = useState(selectedJob.inseam || '');
  const [maxInseam, setMaxInseam] = useState(selectedJob.maxInseam || '');
  const [sleeve, setSleeve] = useState(selectedJob.sleeve || '');
  const [maxSleeve, setMaxSleeve] = useState(selectedJob.maxSleeve || '');
  const [hair, setHair] = useState(selectedJob.hair || '');
  const [eyes, setEyes] = useState(selectedJob.eyes || '');
  const [age, setAge] = useState(selectedJob.age || '');
  const [maxAge, setMaxAge] = useState(selectedJob.maxAge || '');
  const [chest, setChest] = useState(selectedJob.chest || '');
  const [maxChest, setMaxChest] = useState(selectedJob.maxChest || '');
  const [shoes, setShoes] = useState(selectedJob.shoes || '');
  const [maxShoes, setMaxShoes] = useState(selectedJob.maxShoes || '');
  const [category, setCategory] = useState(selectedJob.category || '');
  const [templateId, setTemplateId] = useState(selectedJob.additionalInfo || '');

  useEffect(() => {
    if (selectedJob.id !== id) {
      setId(selectedJob.id || '-1');
      setTitle(selectedJob.title || '');
      setNoOfPerformer(selectedJob.noOfPerformerRequired || 0);
      setDate(selectedJob.date || '');
      setLocation(selectedJob.location || '');
      setEhtinicity(selectedJob.ethinicity || '');
      setMinHeight(selectedJob.minHeight || '');
      setMaxHeight(selectedJob.maxHeight || '');
      setClothingOption(selectedJob.clothingOption || '');
      setBodyRequirements(selectedJob.bodyRequirements || '');
      setRemarks(selectedJob.remarks || '');
      setAdditionalInfo(selectedJob.additionalInfo || '');
      setWeight(selectedJob.weight || '');
      setMaxWeight(selectedJob.maxWeight || '');
      setWaist(selectedJob.waist || '');
      setMaxWaist(selectedJob.maxWaist || '');
      setNeck(selectedJob.neck || '');
      setMaxNeck(selectedJob.maxNeck || '');
      setJacket(selectedJob.jacket || '');
      setMaxJacket(selectedJob.maxJacket || '');
      setInseam(selectedJob.inseam || '');
      setMaxInseam(selectedJob.maxInseam || '');
      setSleeve(selectedJob.sleeve || '');
      setMaxSleeve(selectedJob.maxSleeve || '');
      setHair(selectedJob.hair || '');
      setEyes(selectedJob.eyes || '');
      setAge(selectedJob.age || '');
      setMaxAge(selectedJob.maxAge || '');
      setChest(selectedJob.chest || '');
      setMaxChest(selectedJob.maxChest || '');
      setCategory(selectedJob.category || '');
      setShoes(selectedJob.shoes || '');
      setMaxShoes(selectedJob.maxShoes || '');
      setSaveForLater(selectedJob.isSaveForLater);
      setErrors({});
    }
  }, [selectedJob]);

  useEffect(() => {
    if (templateList && templateList.length > 0) {
      const index = templateList.findIndex((x: EmailTemplate) => x.id === templateId);
      if (index !== -1) {
        setAdditionalInfo(templateList[index].templateHtml);
      }
    }
  }, [templateId]);

  const textAreaChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>, stateFun: Function) => {
    stateFun(event.currentTarget.value);
  };

  const validateInput = () => {
    const err = {};

    if (title.length === 0) Object.assign(err, { title: 'Title Required' });
    if (noOfPerformer === 0) Object.assign(err, { performer: 'No Of Performer Required' });
    if (date.length === 0) Object.assign(err, { date: 'Date Required' });
    if (location.length === 0) Object.assign(err, { location: 'Location Required' });
    setErrors({ ...err });

    return Object.keys(err).length > 0;
  };

  const job: ShowDayJob = {
    id: Math.random().toString(),
    workingDayId: '1',
    title,
    date,
    location,
    minHeight,
    maxHeight,
    weight,
    maxWeight,
    waist,
    maxWaist,
    neck,
    maxNeck,
    jacket,
    maxJacket,
    inseam,
    maxInseam,
    sleeve,
    maxSleeve,
    hair,
    eyes,
    age,
    maxAge,
    chest,
    maxChest,
    shoes,
    maxShoes,
    category,
    ethinicity: ehtinicity,
    clothingOption,
    bodyRequirements,
    remarks,
    additionalInfo,
    status: 'public',
    isActive: true,
    noOfPerformerRequired: noOfPerformer,
    dates: '2021-03-04',
    isSaveForLater,
  };

  const handleClick = (e: React.FormEvent<HTMLButtonElement>, saveLater: boolean) => {
    if (validateInput()) {
      return;
    }
    setSaveForLater(saveLater);
    addJob(job);
  };

  const handleFindPerformer = () => {
    setSelectedTab('2');
    setSelectedJob(job);
  };

  const showButton = () => {
    if (selectedJob.id === '-1') {
      return (
        <div className="row ">
          <div className="col-sm-12 d-flex">
            <Button
              cssClass={`${customStyle.customBtnLabel} ${customStyle.roleListBtn}`}
              label="post"
              clickHandler={(e: React.FormEvent<HTMLButtonElement>) => handleClick(e, true)}
              icon={envelopeSvg}
            />
            <Button
              cssClass={`ml-3 $c{ustomStyle.customBtnLabel} ${customStyle.roleListBtn} ${customStyle.secondaryColor}`}
              label="Save For Later"
              clickHandler={(e: React.FormEvent<HTMLButtonElement>) => handleClick(e, true)}
              icon={envelopeSvg}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="row ">
        <div className="col-sm-12 d-flex">
          <Button
            cssClass={`${customStyle.customBtnLabel} ${customStyle.roleListBtn} ${customStyle.secondaryColor}`}
            label="Find Suggested BG"
            clickHandler={handleFindPerformer}
            icon={envelopeSvg}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="row">
        <div className=" col-sm-12">
          <Heading label="Role Title" path={role} />
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-12">
          <DashboardTextarea
            value={title}
            errorMessage={errors.title}
            inputChangeHandler={(e: React.FormEvent<HTMLTextAreaElement>) => textAreaChangeHandler(e, setTitle)}
          />
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-6">
          <DashboardInput
            type="number"
            value={noOfPerformer ? noOfPerformer.toString() : ''}
            placeholder="BG #"
            errorMessage={errors.performer}
            handleChange={setNoOfPerformer}
          />
        </div>
        <div className=" col-sm-6">
          <DashboardInput value={date} placeholder="Dates" errorMessage={errors.date} handleChange={setDate} />
        </div>
      </div>

      <div className="row">
        <div className=" col-sm-6">
          <Heading label="Location" path={locationSvg} />
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-6">
          <DashboardInput
            placeholder="Region"
            errorMessage={errors.location}
            value={location}
            handleChange={setLocation}
          />
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-6">
          <Heading label="Additional Information" path={additionalInfoSvg} />
        </div>
      </div>
      <div className="performerSearchWrapper">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <DropDownSearch
                cssClass={Style.createInputLabel}
                label="Category"
                value={category}
                optionType="category"
                handleSelect={setCategory}
              />
            </div>
          </div>
          <div className=" col-sm-6">
            <div className="form-group">
              <DropDownSearch
                cssClass={Style.createInputLabel}
                label="Ehtinicity"
                value={ehtinicity}
                optionType="ethinicity"
                handleSelect={setEhtinicity}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DropDownSearch
              label="Hair"
              cssClass={Style.createInputLabel}
              value={hair ?? ''}
              defaultValue="select"
              optionType="hair"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setHair}
            />
          </div>
          <div className="col-sm-6">
            <DropDownSearch
              cssClass={Style.createInputLabel}
              label="Eyes"
              optionType="eyes"
              isMultiSelect={BOOLEAN_TRUE}
              handleSelect={setEyes}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  label="Age"
                  cssClass={Style.createInputLabel}
                  value={age ?? ''}
                  data={NumberOptions(5, 55)}
                  defaultValue="select"
                  handleSelect={setAge}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  label="Max age"
                  cssClass={Style.createInputLabel}
                  value={maxAge ?? ''}
                  data={NumberOptions(5, 55)}
                  defaultValue="select"
                  handleSelect={setMaxAge}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  label="Min Height"
                  cssClass={Style.createInputLabel}
                  value={minHeight}
                  data={getHeightOptions()}
                  defaultValue="select"
                  handleSelect={setMinHeight}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxHeight}
                  label="Max Height"
                  cssClass={customStyle.noLabel}
                  defaultValue="select"
                  data={getHeightOptions()}
                  handleSelect={setMaxHeight}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  label="Weight"
                  cssClass={Style.createInputLabel}
                  value={weight}
                  data={getWeightOption()}
                  defaultValue="select"
                  handleSelect={setWeight}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  label="Max Weight"
                  cssClass={Style.createInputLabel}
                  value={maxWeight}
                  data={getWeightOption()}
                  defaultValue="select"
                  handleSelect={setMaxWeight}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={chest}
                  label="Chet/Bust"
                  cssClass={Style.createInputLabel}
                  defaultValue="select"
                  data={NumberOptions(15, 80)}
                  handleSelect={setChest}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxChest}
                  label="Max. Chet/Bust"
                  cssClass={Style.createInputLabel}
                  defaultValue="select"
                  data={NumberOptions(15, 80)}
                  handleSelect={setMaxChest}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={waist ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Waist"
                  defaultValue="select"
                  data={getWasitOption()}
                  handleSelect={setWaist}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxWaist ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Max Waist"
                  defaultValue="select"
                  data={getWasitOption()}
                  handleSelect={setMaxWaist}
                />
              </div>
            </div>
          </div>
          <div className=" col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={neck ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Neck"
                  data={getNeckOptions()}
                  defaultValue="select"
                  handleSelect={setNeck}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxNeck ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Max Neck"
                  data={getNeckOptions()}
                  defaultValue="select"
                  handleSelect={setMaxNeck}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={inseam ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Inseam"
                  data={getInseamOptions()}
                  defaultValue="select"
                  handleSelect={setInseam}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxInseam ?? ''}
                  cssClass={Style.createInputLabel}
                  label="Max Inseam"
                  data={getInseamOptions()}
                  defaultValue="select"
                  handleSelect={setMaxInseam}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={sleeve ?? ''}
                  cssClass={Style.createInputLabel}
                  data={getSleeveOptions()}
                  label="Sleeve"
                  defaultValue="select"
                  handleSelect={setSleeve}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxSleeve ?? ''}
                  cssClass={Style.createInputLabel}
                  data={getSleeveOptions()}
                  label="Max Sleeve"
                  defaultValue="select"
                  handleSelect={setMaxSleeve}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={jacket ?? ''}
                  cssClass={Style.createInputLabel}
                  data={getJacketSizeOptions()}
                  label="Jacket"
                  defaultValue="select"
                  handleSelect={setJacket}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxJacket ?? ''}
                  cssClass={Style.createInputLabel}
                  data={getJacketSizeOptions()}
                  label="Max Jacket"
                  defaultValue="select"
                  handleSelect={setMaxJacket}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <DropDownSearch
                  value={shoes ?? ''}
                  cssClass={Style.createInputLabel}
                  data={NumberOptions(5, 15)}
                  label="Shoe size"
                  defaultValue="select"
                  handleSelect={setShoes}
                />
              </div>
              <div className="col-sm-6">
                <DropDownSearch
                  value={maxShoes ?? ''}
                  cssClass={Style.createInputLabel}
                  data={NumberOptions(5, 15)}
                  label="Max Shoes"
                  defaultValue="select"
                  handleSelect={setMaxShoes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12">
            <div className="form-group">
              <DropDownSearch
                cssClass={Style.createInputLabel}
                data={getTextTemplates()}
                defaultValue="select"
                label="Request Text"
                handleSelect={setTemplateId}
              />
              <TextEditor text={additionalInfo} setText={setAdditionalInfo} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12">
            <div className="form-group">
              <span className={Style.createInputLabel}>Remarks</span>
              <DashboardTextarea
                value={remarks}
                placeholder="Write your remarks here"
                inputChangeHandler={(e: React.FormEvent<HTMLTextAreaElement>) => textAreaChangeHandler(e, setRemarks)}
              />
            </div>
          </div>
        </div>
      </div>
      {showButton()}
    </>
  );
};

export default ShowJobEntry;
