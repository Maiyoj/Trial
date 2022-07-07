import React from "react";

const Form = ({setInput, setTodos, todos, inputText}) => {
//js code and function goes here
//function to add value to state in app.js
const inputHandler = (e) => {
  console.log(e.target.value)
  setInput(e.target.value);
}

//function to set todos
const handleSubmit = (e) =>{
  e.preventDefault();
  setTodos([
    ...todos, {
      text:inputText, completed: false,  id: Math.random() *1000
    }
  ]);
 setInput("");

};

    return(
        <form>
      <input onChange={inputHandler} type="text" className="todo-input" />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
 
};

export default Form;