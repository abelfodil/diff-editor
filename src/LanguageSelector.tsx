import React from "react";
import Select from '@material-ui/core/Select';
import { MenuItem, makeStyles, FormControl, InputLabel, Theme, createStyles } from "@material-ui/core";

const supportedLanguages = ['cpp', 'csharp', 'css', 'dockerfile', 'go', 'html', 'java', 'javascript', 'json', 'kotlin', 'lua', 'markdown', 'php', 'python', 'rust', 'shell', 'sql', 'typescript', 'xml', 'yaml']

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
