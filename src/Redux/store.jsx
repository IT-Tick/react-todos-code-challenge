import React, { createContext } from 'react'
import {getRandomNumber} from '../utils/helperFunctions'


const initialState = {
  todos: [
    { id: getRandomNumber([]), title: 'task 1', completed: false },
    { id: getRandomNumber([]), title: 'task 2', completed: false }
  ]
}