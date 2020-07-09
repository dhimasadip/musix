import { combineReducers } from 'redux'

import favoriteReducer from './favoriteReducer'
import searchReducer from './searchReducer'
import newReleaseReducer from './newReleaseReducer'
import recommendationReducer from './recommendationReducer'
import categoryReducer from './categoryReducer'

const reducers = combineReducers({
    favoriteReducer, searchReducer, newReleaseReducer, recommendationReducer, categoryReducer
})

export default reducers