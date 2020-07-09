export const youtubeSearch = (keyword) => {
    keyword = keyword.replace(/ /gi, '%2520')
    return (dispatch, getState) => {
        fetch(`https://youtube-search1.p.rapidapi.com/${keyword}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
                "x-rapidapi-key": "14c81a20a4mshc1ceafdea64a109p1e678fjsn1a48bb28b089"
            }
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            window.open(res.items[0].url, '_blank')
        })
        .catch(console.log)
    }

}