import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setToDo("");
        setToDos((currentArray) => [...currentArray,toDo]);

    }
    console.log(toDos);
  return (
    <div className="App">
        <h1>Hi {toDos.length}</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value = {toDo} type = "text" placeholder = "Write your "/>
            <button> Add</button>
        </form>
    </div>
  );
}

export default App;
