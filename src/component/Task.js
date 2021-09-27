import React, { Component } from "react";
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {

    StyleCompleted() {

        return {
            fontSize: '20px',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            color: this.props.task.done ? 'gray' : 'black'

        }

    }

    render() {

        // destructuring
        const { task } = this.props;

        return (
            <div>
                <p style={this.StyleCompleted()}>
                    {task.title} -
                    {task.description} -
                    {/* {task.done}- */}
                    {task.id}
                    <input type="checkbox" onChange={this.props.doneTask.bind(this, task.id)}/>
                    <button style={btnDelte} onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
                </p>

            </div>
        );

    }
}

// Types of dates props 2:03:00
    // This is a small validation for check that you get the correct object when you call task
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelte = {
    fontSize: '18px',
    backgroundColor: '#ea2027',
    borderRadius: '50%',
    cursor: 'pointer',
    border: 'none',
    padding: '10px 15px',
    color: 'white',
}



export default Task;