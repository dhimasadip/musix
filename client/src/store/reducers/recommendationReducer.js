const initialState = {
    recommendations: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECOMMENDATIONS':
            const newState = {
                ...state, recommendations:{
                ...state.recommendations,
                [action.payload.genre]: action.payload.recommendations}}

            return newState
        default:
            return state
    }
}