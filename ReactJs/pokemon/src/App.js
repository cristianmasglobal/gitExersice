import React, {useEffect, useState} from 'react'
//import logo from './logo.svg';
import './App.css';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const resposeJSON = await response.json()
    setTodos(resposeJSON)
    console.log(todos)
  }
  useEffect(()=> {
    fetchApi()
  })
  
  return (
    <div className="App">
      Hola mundo
      <ul>
        <li>
          <p>{todos.results[0].name}</p>
        </li>
      </ul>   
    </div>
  );
}

export default App;
