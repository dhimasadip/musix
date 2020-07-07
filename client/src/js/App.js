import React, { useState, useEffect } from 'react';
import FindSong from '../components/findSong'
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import spotifyApi from '../config/spotify'

export default () => {
  const [artist, setArtist] = useState('')
  const [tracks, setTracks] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [recommended, setRecommended] = useState([])

  const search = e => {
    e.preventDefault()
    spotifyApi.searchTracks(artist)
    .then(({ body }) => {
      setTracks(body.tracks.items)
    })
    .catch(console.log)
  }
  
  const keyword = e => {
    setArtist(e.target.value)
  }

  useEffect(() => {
    fetch('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        Authorization: 'Bearer BQDQc2cXiav5BtlYDH1yBUeceG0fU6tB9fIJr-iIhOzS6NwBmD7-siRBD7JH8SzCc2EgCJA2cIn5TvfTkONqld2oSUNBb3B_0XL4X4ljexR92hDj8cjjcOtj3221CvCWorEuM5wOWyQ-3N75TqbxuukJ9pchlolM5grWfYVpRVcCW3HrmZS4LW-Ewbxrk2zWIs_YfWQhbWJEQkrRXN94nua6DJ6IZ1P9uH5k0U08OhG89gKC7_p35rP7N0u9eTnMSf6VSdT5Ak3P'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(({ albums }) => {
      setNewReleases(albums.items)
      return fetch('https://api.spotify.com/v1/recommendations?limit=10&seed_genres=blues', {
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
          Authorization: 'Bearer BQBqE-n-lb0TlPjauopniD1fhbDuxjUpUqq_QomvbQmzi2UPmmlayoGhwLgX7htsJUOPMNWOJo_5yDbk2vFMvSZGHlienoSkI4GBP57Hz-CELLt6JkOSOkb8zjfWzjXmBuXqgVK5FUsypdHRYUfGE_t-wtmOeHUUQarMUeJC4mQPAeD-CFPcN6VtFX2e9EUyRpvXSG-332oNzo6RfrffPQUdkz_kNHLHUjjSKfwBzOGdIJRBKyaMBBITPLiIbnO44QVz8OJvOaGy'
        }
      })
    })
    .then(response => {
      return response.json()
    }).then(( tracks) => {
      console.log(tracks)
      // setRecommended(tracks)
    })
    .catch(console.log)
  
  }, [])

  return (
    <div className="mt-5 container-fluid">
      <h1 className=" text-center">Musix</h1>
      <div className="row mt-5">

        <div className="col-3 ">
          <Recommendations
            recommended={recommended}
          ></Recommendations>
        </div>

        <div className="col-6 ">
          <div className="d-flex flex-column align-items-center">
            <h6>search artist</h6>
            <form onSubmit={search}>
              <div className="form-group">
                <input className="form-control" type="text" value={artist} onChange={keyword} />
              </div>
              <button type="submit" className="btn btn-success mt-3">Search artists</button>
            </form>
          </div>
          <FindSong
            keyword={artist}
            tracks={tracks}
          />
        </div>

        <div className="col-3">
          <NewRelease
            newRelease={newReleases}
          ></NewRelease>
        </div>
      </div>
    </div>
  )
}
