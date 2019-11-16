import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

var headers = {
    "Content-Type": "application/json",
    "Access-Control-Origin": "*"
}

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 1000,
    },
}));



function addNew(activity) {
    var data = {
        "title": activity,
        "checked": "false"
    }


    fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/mauricio", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
}

export default function AddToDo({ textValue, setText, addTodo }) {

    //const [text, setText] = React.useState("")

    //const fieldChangeHandler = React.useCallback((event) => setText(event.currentTarget.value))

    const classes = useStyles();
    return (
        <div style={{
            display: "flex"
        }}>
            <TextField value={textValue} onChange={setText} className={classes.textField} label="Add todo"></TextField>
            <Button onClick={addTodo} variant="contained" >Submit</Button>
        </div>
    )

}

