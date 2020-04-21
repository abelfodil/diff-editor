import React from "react";
import Select from '@material-ui/core/Select';
import { MenuItem, makeStyles, FormControl, InputLabel, Theme, createStyles } from "@material-ui/core";

const supportedLanguages = ['apex', 'azcli', 'bat', 'c', 'clojure', 'coffeescript', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'graphql', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'kotlin', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective-c', 'pascal', 'perl', 'pgsql', 'php', 'plaintext', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'sol', 'sql', 'st', 'swift', 'tcl', 'typescript', 'vb', 'xml', 'yaml'];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);


interface LanguageSelectorProps {
    onLanguageChange: Function;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('javascript');

    const handleChange = (event: any) => {
        setLanguage(event.target.value);
        props.onLanguageChange(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
                labelId="language-select-label"
                value={language}
                onChange={handleChange}
            >
                {supportedLanguages.map((language, index) => {
                    return <MenuItem value={language} key={`language-${index}`}>{language}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default LanguageSelector;
