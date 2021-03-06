import token from '../../config/token'
export const getRecommendation = (genre) => {
    return async (dispatch) => {
        const fetchData = await fetch(`https://api.spotify.com/v1/recommendations?limit=10&market=ID&seed_genres=${genre}`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: token
            }
        })
        const data = await fetchData.json()

        dispatch({
            type: 'GET_RECOMMENDATIONS',
            payload: {
                genre,
                recommendations: data.tracks
            }
        })
    }
}