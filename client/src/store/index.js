import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoriteReducer from '../store/reducers/favoriteReducer'
import searchReducer from '../store/reducers/searchReducer'
import newReleaseReducer from '../store/reducers/newReleaseReducer'
import recommendationReducer from '../store/reducers/recommendationReducer'
import categoryReducer from '../store/reducers/categoryReducer'

const reducers = combineReducers({
    favoriteReducer, searchReducer, newReleaseReducer, recommendationReducer, categoryReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;