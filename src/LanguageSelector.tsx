import React from "react";
import Select from '@material-ui/core/Select';
import { MenuItem } from "@material-ui/core";

const supportedLanguages = ['apex', 'azcli', 'bat', 'c', 'clojure', 'coffeescript', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'graphql', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'kotlin', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective-c', 'pascal', 'perl', 'pgsql', 'php', 'plaintext', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'sol', 'sql', 'st', 'swift', 'tcl', 'typescript', 'vb', 'xml', 'yaml'];

const LanguageSelector = () => {
    const [language, setLanguage] = React.useState('');

    const handleChange = (event: any) => {
        setLanguage(event.target.value);
    };

    return (
        <Select
            value={language}
            onChange={handleChange}
        >
            {supportedLanguages.map((language) => {
                return <MenuItem value={language}>{language}</MenuItem>
            })}
        </Select>
    );
};

export default LanguageSelector;
