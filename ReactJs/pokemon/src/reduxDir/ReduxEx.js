import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
//Action: Objetos que tienen un tipo (eventos que han ocurrido y hacen que cambie el estado)
//Store: Objeto que reune las action y los reduxer, almacena, lee y actualiza el estado de la app
//dispatch: evento que se envía a la store

const actionIncremented = {
    type: 'counter/incremented'
}

const actionDecremented = {
    type: 'counter/decremented'
}

const actionReset = {
    type: 'counter/reset'
}

const ReduxEx = (state = 0, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return state +1;
        case 'counter/decremented':
            return state -1;
        case 'counter/reset':
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
        <>    
        {store.getState()}
        <div>
        <button onClick={()=>{
            store.dispatch(actionIncremented)
        }}>
            +
        </button>

        <button onClick={()=>{
            store.dispatch(actionDecremented)
        }}>
            -
        </button>

        <button onClick={()=>{
            store.dispatch(actionReset)
        }}>
            R
        </button>
        </div>
        </>
    )
}

const renderApp=() => {
    ReactDOM.render(
        < App />,
        document.getElementById('root')
    )
}

renderApp()
store.subscribe(renderApp)
export default App;