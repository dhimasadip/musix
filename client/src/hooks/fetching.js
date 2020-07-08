import React, { useEffect, useState } from 'react'
export default (url) => {
    const [data, setData] = useState({})
    
    useEffect(() => {
        if (!url) return
        fetch(url, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: 'Bearer BQBEc3N3wiCbaqxtE-ywmjO_OVcMsBJ-OS7DSJqoUiCHZuwDWfhHqx2S4U3mmOjxKpSEW0oM1z21vZaez2KrAQm03HxK-qvCnOtgaxJTTV7fZOXZlN-LBn6lmKXpio_UN9wdo4XWUPVPJon6WwVbAqlflFqeAibynePctF_h8F00sveEf5SXCcbQC2mK2pVXmi5ZBbhuu6747ozupme8dBMtvJL1y0GXkEQeaG4DBdMfEq-5flAYTroeQnYeISQ7QU7QA-_td99y'
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
            window.open(res.items[0].url, '_blank')
        })
        .catch(console.log)

    }

    return [data, youtubeSearch]

}