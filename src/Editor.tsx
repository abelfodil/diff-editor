import React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";
import LanguageSelector from "./LanguageSelector";

const Editor = () => {
    const [language, setLanguage] = React.useState('javascript');

    return (
        <div>
            <LanguageSelector onLanguageChange={setLanguage} />
            <MonacoDiffEditor
                height="90vh"
                theme="vs-dark"
                language={language}
                options={{ originalEditable: true }}
            />
        </div>
    );
};

export default Editor;
