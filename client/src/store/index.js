import { createStore, combineReducers } from 'redux'
import favoriteReducer from '../store/reducers/favoriteReducer'
import searchReducer from '../store/reducers/searchReducer'

const reducers = combineReducers({
    favoriteReducer,searchReducer
})

const store = createStore(reducers)

export default store;