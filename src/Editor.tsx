import React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";
import LanguageSelector from "./LanguageSelector";

const Editor = () => {
    return (
        <div>
            <LanguageSelector />
            <MonacoDiffEditor
                width="1200"
                height="800"
                language="javascript"
                options={{ theme: "vs-dark", originalEditable: true }}
            />
        </div>
    );
};

export default Editor;
