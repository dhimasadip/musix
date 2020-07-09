const initialState = {
    newReleases: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEW_RELEASES':
            return {...state, newReleases: state.newReleases.concat(action.payload.newReleases)}
        default:
            return state
    }
}