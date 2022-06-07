import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducerFunction from './reducers/appReducer'
import { categoryReducerFunction } from './reducers/categoryReducer'
import { foodItemReducerFunction } from './reducers/foodItemReducer'

const reducer = combineReducers({
  appReducer: appReducerFunction,
  categoryReducer:categoryReducerFunction,
  foodReducer:foodItemReducerFunction


})
const initialState = {}
const middelware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware)),
)

export default store
