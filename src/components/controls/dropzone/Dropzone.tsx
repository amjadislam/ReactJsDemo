import React, { FunctionComponent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PlaceholderImage from 'assets/images/dropzone-placeholder.png';
import Style from 'components/bgPerformer/Images/Image.module.css';
import DeleteImage from 'assets/images/delete.png';

const DropZone: FunctionComponent = () => {
  const [file, setFile] = useState('');
  const onDrop = useCallback((acceptedFiles) => {
    setFile(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const deleteHandle = () => {
    setFile('');
  };

  return (
    <div className={Style.imageItemDialogWrapper} {...getRootProps()}>
      {file === '' ? (
        <>
          <input {...getInputProps()} onChange={onImageChange} />
          {isDragActive ? (
            <>
              <img src={PlaceholderImage} alt="" className={`${Style.popupImage}`} />
              <p className={`mb-0 ${Style.popupTitle}`}>Drop the files here ...</p>
            </>
          ) : (
            <>
              <img src={PlaceholderImage} alt="" className={`${Style.popupImage}`} />
              <p className={`mb-0 ${Style.popupTitle}`}>Drag and drop your image here</p>
            </>
          )}
        </>
      ) : (
        <div className={Style.imageItemDialog}>
          <img src={file} alt="file" className={`${Style.previewImage}`} />
          <img
            src={DeleteImage}
            alt=""
            className={`${Style.delete}`}
            onClick={deleteHandle}
            onKeyPress={deleteHandle}
            role="presentation"
          />
        </div>
      )}
    </div>
  );
};

export default DropZone;
