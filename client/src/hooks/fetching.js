import React, { useEffect, useState } from 'react'
export default (url) => {
    const [data, setData] = useState({})
    const token = 'Bearer BQC8ttkMVF56vjLfN5EVFIywCZCWvnvB86aWubcFlprqRxoQbsB9vueLi46AcN3CKGZ6S2dKHlFykDYowjq_e8yH4_tt6b4mdOXxdreO5g-_3WL980Yb5WcK9wG8WWfV0IrgVEK3n9zmCQWCTFn1O8QkrY-Fqdz-Ck2_ObQEPZmkn8p-aHEvRrjhULlSDPWEivVtgh3CF9Zr-SaURfueFBFWMxxAtMkDJcMlbVdv6mgJ4Wzk9sgc4yXeDtOcuWU3BzrPHfh9P7et'
    
    useEffect(() => {
        if (!url) return
        fetch(url, {
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
            setData(res)
        })
        .catch(console.log)
    }, [])

    const getCategoryPlaylist = (category) => {
        fetch(`https://api.spotify.com/v1/browse/categories/${category}/playlists?country=ID`, {
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
            setData(res)
        })
        .catch(console.log)
    }

    const getPlaylist = (id) => {
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
            const newData = {playlists, name}
            setData(newData)
        })
        .catch(console.log)
    }

    const getPlaylistSongs = (playlistId) => {
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
            const newData = {items, name}
            setData(newData)
        })
        .catch(console.log)
    }

    const youtubeSearch = (keyword) => {
        keyword = keyword.replace(/ /gi, '%2520')
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

    return [data, youtubeSearch, getCategoryPlaylist, getPlaylist, getPlaylistSongs]

}