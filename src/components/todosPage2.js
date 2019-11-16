import React from "react";
import AddToDo from './addToDo'
import Row from './row';

var headers = {
    "Content-Type": "application/json",
    "Access-Control-Origin": "*"
}

class TodosPage2 extends React.Component {

    state = {
        data: []
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            textValue: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/mauricio", {
            method: "GET",
            headers: headers
        })
            .then(res => res.json()).then(data => {
                //add the data to component state
                this.setState({ data });
            });  

            this.render();
        
    }

    componentDidMount() {
        console.log('DidMount')
        this.getTodos()
    }

    getTodos = (initialCall) => {
        fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/mauricio", {
            method: "GET",
            headers: headers
        })
            .then(res => res.json()).then(data => {
                //add the data to component state
                this.setState({ data });
            });
    }

    setText = (e) => {
        this.setState({
            textValue: e.target.value
        })
    }

    addNew = () => {
        var data = {
            "title": this.state.textValue,
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


    render() {
        //console.log("this.state: ", this.state)
        //when data loads, your component will render the rows of the data using array.map()
        return (
            <div>
                <AddToDo textValue={this.state.textValue} addTodo={this.addNew} setText={this.setText} />
                <br></br>
                {this.state.data.map((row, i) => <Row id1={row._id} text11={row.title} isChecked={row.checked}></Row>)}
            </div>
        )
    }
}

export default TodosPage2;