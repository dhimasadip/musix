import React, { useEffect, useState } from 'react'
export default (url) => {
    const [data, setData] = useState({})
    
    useEffect(() => {
        if (!url) return
        fetch(url, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: 'Bearer BQBsWdZNGYj94rrIoLOpKwNQXDSyok8HbYgnFeiQktx8p7nbeHle8h5Nc5PZ4i5QnW33a5xFsR4FkmKcIBjgh-miIOhXnxmaR4AFqzezlm8LVmS2xOQ7kJ8Qtl4EuJNHWqbHr3kalpX2tJ_jngDty9C2OBG8PA6-1WMuFHr2ijCUQcr_ewXNdj4QWHFin87c0pT-v5JfR5iPSda3qLMk7-ujxuKPe44PBKHlhCz15wyP-y8vP7wPaxiBRi_6ETLPACzJ_xF5UQCs'
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
            setData(res.items[0])
        })
        .catch(console.log)

    }

    return [data, youtubeSearch]

}