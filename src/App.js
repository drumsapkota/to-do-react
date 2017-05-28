import React, { Component } from 'react';
import './App.css';
import {NewToDo, ToDoList} from './components'

class App extends Component {
  constructor(){
    super()
    this.state ={
      todos:[
        {id:1, name:'Learn JSX',isComplete:true},
        {id:2, name:'Build an awesome app', isComplete: true},
        {id:3, name:'Ship it', isComplete:false}
      ],
      currentToDo:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(evt){
    this.setState({currentToDo:evt.target.value})
  }
  render() {
    return (
      <div className="toDoApp">
        <NewToDo handleInputChange={this.handleInputChange}
        currentToDo={this.state.currentToDo}/>
        <ToDoList todos={this.state.todos}/>
      </div> 
    );
  }
}


export default App;
