import React, {Component} from 'react';

export default class TaskForm extends Component{

    // State

    state = {
        title : '',
        description: ''
    }

    // onSubmit(){}
    onSubmit = e => {
        // console.log('submiting..')
    //    console.log(this.state.title,this.state.description )
        this.props.addTask( this.state.title, this.state.description )
        e.preventDefault()
    }

    onChange = e => {
        //  console.log(e.target.value + e.target.name)
        //corchetes son muy importartes
        this.setState({[e.target.name] : e.target.value})
    }


    render(){

        // console.log(this.props)

        const formStyle = {
            padding: '18px'
        }

        return(

            <form style = {formStyle} onSubmit={this.onSubmit}>
                <input 
                name="title"
                type="text" 
                placeholder="Write a Task" 
                onChange={this.onChange} 
                value={this.state.title}></input><br/><br/>
                <textarea 
                name="description" 
                placeholder="Write a Description" 
                onChange={this.onChange} 
                value={this.state.description}/><br/><br/>
                <input type="submit" value="Submit"></input>
            </form>

        );
    }

}

