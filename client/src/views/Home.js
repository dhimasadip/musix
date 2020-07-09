import React from 'react';
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import fetching from '../hooks/fetching';
import Categories from '../components/Categories';
import CategoryPlaylist from '../components/CategoryPlaylist';
import PlaylistSongs from '../components/PlaylistSongs';
import MyFavorite from '../components/MyFavorite';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import FindSong from '../components/findSong';

export default () => {
    const [newReleases] = fetching('https://api.spotify.com/v1/browse/new-releases?country=id')

    return (

        <div className="container-fluid">
            
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
                        <Route exact path='/my-favorite'>
                            <MyFavorite />
                        </Route>
                        <Route exact path='/search/:artist'>
                            <FindSong />
                        </Route>
                    </Switch>
                </div>
                <div className="col-3">
                    <NewRelease newRelease={newReleases} />
                </div>
            </div>
        </div>

    )

};