import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 1000,
    },
}));

export default function SearchRow() {


    const classes = useStyles();
    return (
        <div style={{
            display:"flex"
        }}>
            <TextField className={classes.textField} label="Search a todo"></TextField>
            <Button variant="contained" >Search</Button>
        </div>
    )

}