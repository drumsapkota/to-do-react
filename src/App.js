import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      todos:[
        {id:1, name:'Learn JSX',isComplete:true},
        {id:2, name:'Build an awesome app', isComplete: true},
        {id:3, name:'Ship it', isComplete:false}
      ]
    }
  }
  render() {
    return (
      <div className="toDoApp">
        <form>
          <input type="text" />
        </form>
        <div className="toDoList">
          <ul>
            {this.state.todos.map(todo => <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/>
                  {todo.name}
                </li>)}
            
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
