const initialState = {
    recommendations: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECOMMENDATIONS':
            return {...state, recommendations: action.payload.recommendations}
        default:
            return state
    }
}