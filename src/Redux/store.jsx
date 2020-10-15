import React, { useReducer, createContext, useEffect } from 'react'
import Reducer from './reducer'
import { getRandomNumber } from '../utils/helperFunctions'

export const Context = createContext();

const initialState = {
  todos: [
    { id: getRandomNumber([]), title: 'task 1', completed: true },
    { id: getRandomNumber([]), title: 'task 2', completed: false }
  ]
}

const loadState = () => {
  const loadedState = localStorage.getItem('state');
  return loadedState !== null
    ? JSON.parse(loadedState)
    : initialState;
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState, loadState)

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Store;