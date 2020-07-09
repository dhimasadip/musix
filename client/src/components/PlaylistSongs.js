import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { youtubeSearch } from '../store/actions/YoutubeSearch'
import musicNotes from '../assets/music-notes.png'
import heart from '../assets/heart.png'
import { getSong } from '../store/actions/getCategory'

export default () => {
    const { playlistId, id } = useParams()
    const dispatch = useDispatch()

    const songs = useSelector(state => state.categoryReducer.songs)
    const playlistName = useSelector(state => state.categoryReducer.playlistName)

    useEffect(() => {
        dispatch(getSong(playlistId))
    }, [playlistId])

    const addToFav = (song) => {
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                song
            }
        })
    }

    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Category</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to={`/category/${id}`}>{id}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{playlistName}</li>
                </ol>
            </nav>
            {
                songs.length > 0 &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        songs.map((el,i) => {
                            return (
                                <div className="col mb-4" key={i}>
                                    <div 
                                        className="card d-flex flex-column justify-content-between bg-transparent shadow border border-light h-100"
                                        
                                    >
                                        <img src={el.track.album.images[1].url} className="card-img-top cursor-pointer"
                                            onClick={() => dispatch(youtubeSearch(`${el.track.artists[0].name} ${el.track.name}`))}
                                        ></img>
                                        <div className="d-flex p-2">
                                            <div className="ml-2 mr-2">
                                                <img src={musicNotes}></img>
                                            </div>                                
                                            <div className="">
                                                <span className="text-white">{el.track.name}</span>
                                                <br />
                                                <span className="text-white-50">{el.track.artists[0].name}</span>
                                            </div>
                                        </div>
                                        <div className="text-center mb-2">
                                            <img className="cursor-pointer" src={heart}
                                                onClick={() => addToFav(el)}
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                !songs.length > 0 && <h3 className="text-center text-secondary">Server offline</h3>
            }
        </div>
        
    )

}