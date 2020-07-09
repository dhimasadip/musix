import React, { useEffect } from 'react'
import { useParams, useRouteMatch, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylist } from '../store/actions/getCategory'


export default () => {
    const { id } = useParams()
    const match = useRouteMatch()
    const beginning = new RegExp('https://api.spotify.com/v1/playlists/')
    const playlists = useSelector(state => state.categoryReducer.playlists)
    const categoryName = useSelector(state => state.categoryReducer.categoryName)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylist(id))
    }, [])
    
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Category</Link>
                    </li>
                    <li className="breadcrumb-item active">{categoryName}</li>
                </ol>
            </nav>
            {
               playlists.length > 0 &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        playlists.map((el,i) => {
                            return (
                                <div className="col mb-4" key={i}>
                                    <Link to={`${match.url}/${el.tracks.href.replace(beginning, '').split('/')[0]}`}>
                                        <div className="card">
                                            <img src={el.images[0].url} className="card-img-top"></img>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                !playlists.length > 0 && <h3 className="text-center text-secondary">Server offline</h3>
            } 
        </div>
    )

}