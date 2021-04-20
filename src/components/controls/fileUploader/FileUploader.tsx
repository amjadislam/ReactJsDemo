import React, { FunctionComponent } from 'react';

interface FileUploaderProps {}

const FileUploader: FunctionComponent<FileUploaderProps> = () => {
  return (
    <div>
      <h3>File Component</h3>
      <input type="file" accept=".pdf" />
    </div>
  );
};

export default FileUploader;
