import token from '../../config/token'
export const getNewReleases = () => {
    return (dispatch) => {
        fetch('https://api.spotify.com/v1/browse/new-releases?country=id', {
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
                type: 'GET_NEW_RELEASES',
                payload: {
                    newReleases: res.albums.items
                }
            })
        })
        .catch(console.log)
    }
}