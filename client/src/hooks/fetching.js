import React, { useEffect, useState } from 'react'
import token from '../config/token'

export default (url) => {
    const [data, setData] = useState({})
    
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


    return [data]

}