import React from "react";
import AddToDo from './addToDo'
import Row from './row';



class TodosPage extends React.Component {

    render() {
        return (
            <div>
                <AddToDo></AddToDo>
                <br></br>
                <Row text11="Run" isChecked={true}></Row>

            </div>
        )
    }
}

export default TodosPage;