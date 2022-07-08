import React from "react";
//import components
import Todolist from "./Todolist";


const Todo = ({todos}) => {

    return(
        <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo)=> (
            
            <Todolist text={todo.text} key={todo.id} />
          
          
          ))}
          
        </ul>
      </div>
    )
}

export default Todo;