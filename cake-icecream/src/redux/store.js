import { createStore } from 'redux'
import { rootReducers } from './rootReducers'

export const store = createStore(rootReducers)
