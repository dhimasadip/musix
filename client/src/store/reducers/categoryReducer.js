const initialState = {
    categoryName: '',
    categories: [],
    playlistName: '',
    playlists: [],
    songs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY':
            return {...state, categories: action.payload.categories}
        case 'GET_CATEGORY_NAME':
            return {...state, categoryName: action.payload.categoryName}
        case 'GET_PLAYLIST':
            return {...state, playlists: action.payload.playlists}
        case 'GET_PLAYLIST_NAME':
            return {...state, playlistName: action.payload.playlistName}
        case 'GET_SONG':
            return {...state, songs: action.payload.songs}
        default:
            return state
    }
}