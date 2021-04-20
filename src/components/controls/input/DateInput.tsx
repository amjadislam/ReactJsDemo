import React, { FunctionComponent } from 'react';
import InputStyle from 'components/controls/input/input.module.css';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface InputProps {
  label?: string;
  value: string;
  errorMessage?: string;
  handleChange: Function;
  minDate?: Date;
  maxDate?: Date;
}
const DateInput: FunctionComponent<InputProps> = (props: InputProps) => {
  const { label, value, handleChange, errorMessage, minDate, maxDate } = props;

  const parseDate = (val: Date) => {
    handleChange(`${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`);
  };

  return (
    <>
      <div className={`${InputStyle.inputWrapper} ${InputStyle.inputGroup}`}>
        <DatePicker
          selected={value ? new Date(value) : new Date()}
          onChange={(date: any) => parseDate(date)}
          minDate={minDate ?? new Date('1940-01-01Z00:00:00:00')}
          maxDate={maxDate ?? new Date()}
          placeholderText="Select"
        />
        <span className="input-datePicker">{label}</span>
        {errorMessage ? <TextErrorMessage message={errorMessage} /> : ''}
      </div>
    </>
  );
};

export default DateInput;
