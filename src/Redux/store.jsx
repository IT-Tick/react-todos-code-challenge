import React, {useReducer, createContext } from 'react'
import Reducer from './reducer'
import {getRandomNumber} from '../utils/helperFunctions'

export const Context = createContext();

const initialState = {
  todos: [
    { id: getRandomNumber([]), title: 'task 1', completed: false },
    { id: getRandomNumber([]), title: 'task 2', completed: true }
  ]
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Store;