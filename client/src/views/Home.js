import React, { useState } from 'react';
import FindSong from '../components/findSong'
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import spotifyApi from '../config/spotify'
import iconSearch from '../assets/search.png'
import fetching from '../hooks/fetching';
import Categories from '../components/Categories';
import CategoryPlaylist from '../components/CategoryPlaylist';
import PlaylistSongs from '../components/PlaylistSongs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

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

        <div className="container-fluid">
            {/* <form onSubmit={search} className="justify-content-center d-flex">
                <div className="form-group d-flex">
                    <input 
                        className="form-control" type="text" value={artist} 
                        onChange={keyword} placeholder="Search for Artists" 
                    />
                    <button type="submit" className="btn btn-success text-light">
                        <img src={iconSearch} alt="search" />
                    </button>
                </div>
            </form> */}
            
            <div className="row mt-3">
                <div className="col-3 ">
                    <Recommendations />
                </div>
                <div className="col-6">
                    <Switch>
                        <Route exact path='/'>
                            <Categories />
                        </Route>
                        <Route exact path='/category/:id'>
                            <CategoryPlaylist />
                        </Route>
                        <Route exact path='/category/:id/:playlistId'>
                            <PlaylistSongs />
                        </Route>
                    </Switch>
                    {/* <FindSong keyword={artist} tracks={tracks} /> */}
                </div>
                <div className="col-3">
                    <NewRelease newRelease={newReleases} />
                </div>
            </div>
        </div>

    )

};