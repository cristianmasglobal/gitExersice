import React, {useEffect, useState} from 'react'
import { Button, ListItem } from "@material-ui/core"

function ConsumingApi() {
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
      <Button href = "https://pokeapi.co/" variant="contained" color="primary">Pokemon Api Consumer</Button>
      <ul>
        {! todos ? "Cargando ... ": 
        todos.results.map((todo, index)=> {
          return <li><ListItem primary="Inbox">{todos.results[index].name}</ListItem></li>
          
        })
        }

      </ul>   
    </div>
  );
}

export default ConsumingApi;
