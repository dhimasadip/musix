import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import Categories from '../components/Categories';
import CategoryPlaylist from '../components/CategoryPlaylist';
import PlaylistSongs from '../components/PlaylistSongs';
import MyFavorite from '../components/MyFavorite';
import FindSong from '../components/findSong';

export default () => {

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
                    <NewRelease />
                </div>
            </div>
        </div>

    )

};