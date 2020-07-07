import React, { useState, useEffect } from 'react';
import FindSong from '../components/findSong'
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import spotifyApi from '../config/spotify'
import iconSearch from '../assets/search.png'
import fetching from '../hooks/fetching';

export default () => {
  const [artist, setArtist] = useState('')
  const [tracks, setTracks] = useState([])

  const [newReleases] = fetching('https://api.spotify.com/v1/browse/new-releases?country=id')

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

  return (
    <div className="mt-5 container-fluid">
      <h1 className=" text-center">Musix</h1>
      <div className="row mt-5">

        <div className="col-3 ">
          <Recommendations />
        </div>

        <div className="col-6 ">
          <div className="d-flex flex-column align-items-center">
            <h6>search artist</h6>
            <form onSubmit={search}>
              <div className="form-group d-flex">
                <input className="form-control" type="text" value={artist} onChange={keyword} />
                <button type="submit" className="btn btn-success text-light">
                  <img src={iconSearch} alt="search" />
                </button>
              </div>
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
