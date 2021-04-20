import React, { FunctionComponent, useRef, useState } from 'react';
import InputStyle from 'components/controls/fileInput/imageInput.module.css';
import Button from 'components/controls/button/button';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';
import { isValidFile } from 'helpers/utils';
import { IProfileFileParam } from 'modules/params/param.type';

interface InputProps {
  label?: string;
  handelFile?: Function;
}

const FileInput: FunctionComponent<InputProps> = (props: InputProps) => {
  const { label, handelFile } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && handelFile) {
      const file = event.currentTarget.files[0];
      if (file) {
        const message = isValidFile(file, 'pdf');
        if (message.length > 0) {
          setFileError(message);
          return;
        }
        const formData = new FormData();
        formData.append('profilePicUrl', event.currentTarget.files[0]);

        const params: IProfileFileParam = {
          params: formData,
        };
        handelFile(params);
        setFileError('');
        setFileName(event.currentTarget.files[0].name);
      }

      if (handelFile) {
        handelFile(event.currentTarget.files[0]);
      }
    }
  };
  return (
    <div className={InputStyle.fileInputWrapper}>
      <p>{label}</p>
      <div className="d-flex align-items-center">
        <Button
          label="Choose File"
          clickHandler={() => {
            if (inputFile.current) {
              inputFile.current.click();
            }
          }}
        />

        {fileError ? (
          <TextErrorMessage message={fileError} />
        ) : (
          <span className="ml-2">{fileName.length > 0 ? fileName : 'No file choosen'}</span>
        )}
      </div>
      <input ref={inputFile} type="file" onChange={handleChange} className={InputStyle.displayNone} accept=".pdf" />
    </div>
  );
};

export default FileInput;
