const initialState = {
    songs: [],
    artist: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST':
            return {
                ...state,
                songs: state.songs.concat(action.payload.songs),
                artist: action.payload.artist
            }
        default:
            return state
    }
}