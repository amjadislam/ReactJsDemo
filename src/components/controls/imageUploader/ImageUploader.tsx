import React, { FunctionComponent, useState } from 'react';
import Resizer from 'react-image-file-resizer';
import ImageUploaderStyle from 'components/controls/imageUploader/ImageUploader.module.css';

interface ImageUploaderProps {}

const resizeFile = (file: any) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      'JPEG',
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64',
    );
  });

const dataURIToBlob = (dataURI: any) => {
  const splitDataURI = dataURI.split(',');
  const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};

const ImageUploader: FunctionComponent<ImageUploaderProps> = () => {
  const [previewImage, setPreviewImage] = useState('');
  const onChange = async (event: any) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);
    const formData = new FormData();
    formData.append('image', newFile);
    const res = await fetch('https://run.mocky.io/v3/c5189845-2a93-49aa-85c7-70bc64e8af90', {
      method: 'POST',
      body: formData,
    });
    const data = await res.text();
    console.log(data);
  };
  return (
    <>
      <div className={ImageUploaderStyle.imageUploaderWrapper}>
        <img src={previewImage} alt="" />
        <div className={ImageUploaderStyle.inputFile}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
          <input name="Select File" onChange={onChange} type="file" />
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
