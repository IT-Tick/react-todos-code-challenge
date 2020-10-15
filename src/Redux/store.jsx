import React, {useReducer, createContext } from 'react'
import Reducer from './reducer'
import {getRandomNumber} from '../utils/helperFunctions'


const initialState = {
  todos: [
    { id: getRandomNumber([]), title: 'task 1', completed: false },
    { id: getRandomNumber([]), title: 'task 2', completed: false }
  ]
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <div>

    </div>
  )
}

export default Store;