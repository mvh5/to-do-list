import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class Row extends React.Component {

    onDelete = () => {
        var headers = {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*"
        }

        console.log('id: ', this.props.id1)
        console.log("todo object: ", this.props)

        fetch(`https://todo-checkpoint-api.herokuapp.com/api/todos/${this.props.id1}/mauricio`, {
            method: "DELETE",
            headers: headers
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            });

    }

    onEdit = () => {
        console.log("edit")
    }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#d3d3d3",
                border: "2px solid white"

            }}>
                <div style={{
                    display: "flex"
                }}>
                    <Checkbox checked={this.props.isChecked}></Checkbox>
                    <h3>{this.props.text11}</h3>
                </div>
                <div style={{
                    display: "flex"
                }}>
                    <Button onClick={this.onEdit} variant="contained" color="primary">Edit</Button>
                    <Button onClick={this.onDelete} variant="contained" color="secondary">Remove</Button>
                </div>
            </div>
        )
    }

}

export default Row;