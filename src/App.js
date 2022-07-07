import React,{ useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import Todo from './components/Todo';

function App() {

  const [inputText, setInput] = useState("");
  const [todos, setTodos] = useState("[]");

  return (
    <div className="App">
    <header>
      <h1>Valentines To do list</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInput={setInput}/>
    <Todo />
    </div>
  );
}

export default App;
