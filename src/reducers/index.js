import { combineReducers } from 'redux'
import { reducer as cards } from './cards'

const reducers = combineReducers({
  cards
})

export default reducers
