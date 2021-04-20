import React, { FunctionComponent, useRef, useState } from 'react';
import imagePreviewIcon from 'assets/images/imagePreviewIcon.svg';
import imageUploadIcon from 'assets/images/imageUploadIcon.svg';
import ImageStyle from 'components/controls/fileInput/imageInput.module.css';
import { IProfileFileParam } from 'modules/params/param.type';
import { isValidFile } from 'helpers/utils';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';

interface InputProps {
  label?: string;
  handelFile?: Function;
  userId?: string;
}

const ImageInput: FunctionComponent<InputProps> = (props: InputProps) => {
  const { label, handelFile, userId } = props;
  const [imagePreview, setImagePreview] = useState('');
  const inputFile = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string>('');

  const handleImageChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && handelFile) {
      const file = event.currentTarget.files[0];
      if (file) {
        const message = isValidFile(file, 'image');
        if (message.length > 0) {
          setFileError(message);
          return;
        }
        if (userId) {
          const formData = new FormData();
          formData.append('userId', userId);
          formData.append('profilePicUrl', event.currentTarget.files[0]);

          const params: IProfileFileParam = {
            params: formData,
          };
          handelFile(params);
        }
        setFileError('');
        setImagePreview(URL.createObjectURL(event.currentTarget.files[0]));
      }
    }
  };

  const handleFileClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  return (
    <div className={ImageStyle.imgContainer}>
      {imagePreview.length === 0 ? (
        <img className={ImageStyle.imgPlaceHolder} alt={label} src={imagePreviewIcon} />
      ) : (
        ''
      )}
      <div
        className={ImageStyle.imageUploadIcon}
        onClick={handleFileClick}
        onKeyPress={handleFileClick}
        role="button"
        tabIndex={0}
      >
        <img src={imageUploadIcon} alt={label} />
      </div>
      {imagePreview ? <img src={imagePreview} alt={label} className={ImageStyle.imgView} /> : ''}
      {fileError && <TextErrorMessage message={fileError} />}
      <input
        type="file"
        ref={inputFile}
        accept="image/*"
        className={ImageStyle.displayNone}
        onChange={handleImageChange}
        placeholder={label}
      />
    </div>
  );
};

export default ImageInput;
