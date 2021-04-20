import React, { FunctionComponent } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface TextEditorProps {
  text: string;
  setText: Function;
}

const TextEditor: FunctionComponent<TextEditorProps> = (props) => {
  const { text, setText } = props;
  return (
    <CKEditor
      editor={ClassicEditor}
      data={text}
      onReady={(editor: any) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event: any, editor: { getData: () => any }) => {
        const data = editor.getData();
        setText(data);
      }}
      onBlur={(event: any, editor: any) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event: any, editor: any) => {
        console.log('Focus.', editor);
      }}
    />
  );
};
export default TextEditor;
