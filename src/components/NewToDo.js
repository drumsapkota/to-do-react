import React from 'react';

export const NewToDo = (props) => (<div className="newToDo">
                            <form>
                              <input type="text" 
                              value={props.currentToDo} 
                              onChange={props.handleInputChange}/>
                            </form>
                          </div>);

