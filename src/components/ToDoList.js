import React from 'react';
import {ToDoItem} from './ToDoItem';

export const ToDoList = (props) => {
	return(
	<div className="toDoList">
		<ul>
	            {props.todos.map(todo => <ToDoItem key={todo.id} {...todo}/> )}
	            
	    </ul>
    </div>
	)
}

