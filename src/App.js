import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import React, { Component } from 'react';
import tasks from './sample/tasks.json';
// Components
import TaskForm from './component/TaskForm';
import Tasks from './component/Tasks';
import Post from './component/Post';
// console.log(task);
class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    console.log(title + " " + description)
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    console.log(newTasks)
    this.setState({ tasks: newTasks })
  }

  doneTask = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    }
    );

    this.setState(
      { tasks: newTasks }
    )
  }

  render() {

    return <div>


      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              doneTask={this.doneTask} ></Tasks>
          </div>
        }}>
        </Route>

        <Route path="/posts" component={Post} />

      </BrowserRouter>

    </div>



  }
}

export default App;
