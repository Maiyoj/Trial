
import './App.css';
//importing components
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Valentines To do list</h1>
    </header>
    <Form />
    <Todo />
    </div>
  );
}

export default App;
