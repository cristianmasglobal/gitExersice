import React from 'react'
import { createStore } from 'redux'
//Action: Objetos que tienen un tipo (eventos que han ocurrido y hacen que cambie el estado)
//Store: Objeto que reune las action y los reduxer, almacena, lee y actualiza el estado de la app
//dispatch: evento que se envía a la store

const actionIncremented = {
    type: '@reduxer/incremented'
}

const actionDecremented = {
    type: '@reduxer/decremented'
}

const actionReset = {
    type: '@reduxer/reset'
}

const ReduxEx = (state = 0, action) => {
    switch (state.type) {
        case '@reduxer/incremented':
            return state +1;
        case '@reduxer/decremented':
            return state -1;
        case '@reduxer/reset':
            return 0;
        default:
            return state            
    }
}

const store = createStore(ReduxEx)

store.subscribe(()=>{
    console.log(store.getState());
})

const App = ()=>{
    return (
        <div>
            {store.getState()}
        <button onClick={()=>{
            store.dispatch(actionIncremented)
        }}>
            +
        </button>
        </div>
    )
}

export default App;