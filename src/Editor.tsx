import React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";

const Editor = () => (
  <div>
    <MonacoDiffEditor
          width="1200"
          height="800"
          language="javascript"
          options={{originalEditable: true}}
        />
  </div>
);

export default Editor;
