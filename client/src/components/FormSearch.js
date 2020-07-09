import React, { useState } from 'react';
import spotifyApi from '../config/spotify'
import iconSearch from '../assets/search.png'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => {
  const [artist, setArtist] = useState('')
  const [searching, setSearching] = useState(false)
  const dispatch = useDispatch()

  const search = e => {
    e.preventDefault()
    spotifyApi.searchTracks(artist)
    .then(({ body }) => {
      console.log(body)
      dispatch({
        type: 'SEARCH_ARTIST',
        payload: {
          songs: body.tracks.items,
          artist
        }
      })
      setSearching(true)
    })
    .catch(console.log)
    .finally(_=> {
      setSearching(false)
    })
  }
  
  const keyword = e => {
    setArtist(e.target.value)
  }

  
  return (
    <div >
      <form onSubmit={search} className="d-flex align-items-center pt-2">
        <div className="form-group d-flex w-100">
          <input 
            className="form-control" type="text" value={artist} 
            onChange={keyword} placeholder="Search for Artists" 
          />
          {
            !artist &&
            <button type="submit" className="btn btn-success text-light" disabled>
              <img src={iconSearch} alt="search" />
            </button>
          }
          {
            artist &&
                <button type="submit" className="btn btn-success text-light">
                  <img src={iconSearch} alt="search" />
                  { searching ? <Redirect to={`/search/${artist}`}/> : '' }
                </button>
          }
        </div>
      </form>
    </div>
  )

}