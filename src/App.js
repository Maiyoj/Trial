import React,{ useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import Todo from './components/Todo';

function App() {

  const [inputText, setInput] = useState("");

  return (
    <div className="App">
    <header>
      <h1>Valentines To do list{inputText}</h1>
    </header>
    <Form setInput={setInput}/>
    <Todo />
    </div>
  );
}

export default App;
