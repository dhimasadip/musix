import React from 'react';
import heart from '../assets/heart.png'
import { useSelector, useDispatch } from 'react-redux'
import { youtubeSearch } from '../store/actions/YoutubeSearch'

export default () => {
    const songs = useSelector(state => state.favoriteReducer.songs)
    const dispatch = useDispatch()

    return (
        <div >
            <h4 className="text-light text-center">My Favorites</h4>
            <ul className="list-group scrollbar">
                { songs.length > 0 && songs.map((el, i) => {
                    return (
                        <li className="list-group-item bg-dark" key={i}>
                            <a  type="button" className="d-flex" 
                                onClick={() => dispatch(youtubeSearch(`${el.track.artists[0].name} ${el.track.name}`))}
                            >
                                <div className="mr-3 d-flex align-items-center">
                                    <img src={heart}></img>
                                </div>                                
                                <div>
                                    <span className="text-white">{el.track.name}</span>
                                    <br />
                                    <span className="text-white-50">{el.track.artists[0].name}&emsp;●&emsp;{el.track.album.name}
                                    </span>
                                </div>
                                    
                            </a>
                        </li>
                    )
                })}
                {
                    songs.length < 1 && 
                    <li className="list-group-item bg-dark">
                        Empty
                    </li>
                }
            </ul>
        </div>
    );
}