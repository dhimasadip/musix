import React, { useEffect } from 'react'
import fetching from '../hooks/fetching'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import musicNotes from '../assets/music-notes.png'
import heart from '../assets/heart.png'

export default (props) => {
    const { playlistId, id } = useParams()
    const dispatch = useDispatch()
    const [{items,name}, youtube, b, c, getPlaylistSong] = fetching()

    useEffect(() => {
        getPlaylistSong(`${playlistId}`)
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
                    <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
            </nav>
            {
                items &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        items.map((el,i) => {
                            return (
                                <div className="col mb-4" key={i}>
                                    <div 
                                        className="card d-flex flex-column justify-content-between bg-transparent shadow border border-light h-100"
                                        
                                    >
                                        <img src={el.track.album.images[1].url} className="card-img-top cursor-pointer"
                                            onClick={() => youtube(`${el.track.artists[0].name} ${el.track.name}`)}
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
                !items && <h3 className="text-center text-secondary">Server offline</h3>
            }
        </div>
        
    )

}