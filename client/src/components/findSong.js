import React from 'react';
import fetching from '../hooks/fetching'
import { useSelector } from 'react-redux'
import musicNotes from '../assets/music-notes.png'

export default () => {

    const songs = useSelector(state => state.searchReducer.songs)
    const artist = useSelector(state => state.searchReducer.artist)
    const [data, youtube] = fetching()

    return (
        <div className="">
            
            { songs.length > 0 && 
                <>
                    <h4 className="text-light">Tracks: </h4>
                </>
            }
            
            <ul className="list-group scrollbar">
                {songs.map((el, i) => {
                    const keyword = new RegExp(artist, 'gi')
                    if (!el.name.match(keyword)) {
                        return (
                            <li className="list-group-item bg-dark" key={i}>
                                <a  type="button" className="d-flex" 
                                    onClick={() => youtube(`${el.artists[0].name} ${el.name}`)}
                                >
                                    <div className="mr-3 d-flex align-items-center">
                                        <img src={musicNotes}></img>
                                    </div>                                
                                    <div>
                                        <span className="text-white">{el.name}</span>
                                        <br />
                                        <span className="text-white-50">{el.artists[0].name}&emsp;●&emsp;{el.album.name}
                                        </span>
                                    </div>
                                        
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
