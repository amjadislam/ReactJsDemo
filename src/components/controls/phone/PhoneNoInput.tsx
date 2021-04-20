import React, { FunctionComponent, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

interface InputProps {
  handleChange: (phone: string) => void;
  value: string;
  error: Function;
}
const PhoneNoInput: FunctionComponent<InputProps> = (props) => {
  const { handleChange, value, error } = props;

  useEffect(() => {
    error(validatePhone());
  });

  const validatePhone = () => {
    if (value) {
      if (isValidPhoneNumber(value)) {
        return '';
      }
      return 'Invalid phone number';
    }
    return '';
  };

  return <PhoneInput placeholder="Phone" value={value} onChange={handleChange} error={validatePhone()} />;
};

export default PhoneNoInput;
