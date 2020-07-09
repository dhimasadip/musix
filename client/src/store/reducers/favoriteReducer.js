const initialState = {
    songs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {...state, songs: state.songs.concat(action.payload.song)}
        default:
            return state
    }
}