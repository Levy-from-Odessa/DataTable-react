import {createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

//!!! THUNK - to make async req in the store with dispatch
// composeWithDevTools - ability to use devTools

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store