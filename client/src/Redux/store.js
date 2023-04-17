import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer} from './Reducers/ProductReducers'


const reducer = combineReducers({
  productList: productListReducer
})

const initialState = {}

const midileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midileware))
)

export default store