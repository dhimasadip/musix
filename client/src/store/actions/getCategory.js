import token from '../../config/token'
export const getCategory = () => {
    return (dispatch) => {
        fetch('https://api.spotify.com/v1/browse/categories?country=ID&offset=0&limit=20', {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: 'GET_CATEGORY',
                payload: {
                    categories: res.categories.items
                }
            })
        })
        .catch(console.log)
    }
}

export const getPlaylist = (id) => {
    return (dispatch) => {
        const getName = fetch(`https://api.spotify.com/v1/browse/categories/${id}?country=ID`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })

        const fetchPlaylists = fetch(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=ID`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })
        
        Promise.all([fetchPlaylists, getName])
        .then(([list, name]) => {
            return [list.json(), name.json()]
        })
        .then(res => {
            return Promise.all(res)
        })
        .then(([{playlists}, {name}]) => {
            dispatch({
                type: 'GET_PLAYLIST',
                payload: {
                    playlists: playlists.items
                }
            })
            dispatch({
                type: 'GET_CATEGORY_NAME',
                payload: {
                    categoryName: name
                }
            })
        })
        .catch(console.log)
    }
}

export const getSong = (playlistId) => {
    return (dispatch) => {
        const getSongs = fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=ID`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })

        const getPlaylistName = fetch(`https://api.spotify.com/v1/playlists/${playlistId}?market=ID`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })

        Promise.all([getSongs, getPlaylistName])
        .then(([song,name]) => {
            return [song.json(), name.json()]
        })
        .then((data) => {
            return Promise.all(data)
        })
        .then(([{items}, {name}]) => {

            dispatch({
                type: 'GET_SONG',
                payload: {
                    songs: items
                }
            })
            dispatch({
                type: 'GET_PLAYLIST_NAME',
                payload: {
                    playlistName: name
                }
            })
        })
        .catch(console.log)
    }
}