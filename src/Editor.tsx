import React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { DiffContent } from "./DiffContent";

interface EditorProps {
    diffContent: DiffContent;
}

const Editor = (props: EditorProps) => {
    const [language, setLanguage] = React.useState('javascript');
    const editorRef = React.useRef(null);

    return (
        <div>
            <LanguageSelector onLanguageChange={setLanguage} />
            <MonacoDiffEditor
                ref={editorRef}
                height="90vh"
                theme="vs-dark"
                original={props.diffContent.original}
                value={props.diffContent.modified}
                language={language}
                options={{ originalEditable: true }}
            />
        </div>
    );
};

export default Editor;
