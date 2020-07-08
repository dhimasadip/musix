import React, { useEffect } from 'react'
import fetching from '../hooks/fetching'
import { useParams, useRouteMatch, Link } from 'react-router-dom'


export default (props) => {
    const { id } = useParams()
    const match = useRouteMatch()
    const [{playlists, name}, a,b, playlist] = fetching()
    const beginning = new RegExp('https://api.spotify.com/v1/playlists/')

    // console.log(props)
    useEffect(() => {
        playlist(`${id}`)
    }, [])
    
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Category</Link>
                    </li>
                    <li className="breadcrumb-item active">{name}</li>
                </ol>
            </nav>
            {
               playlists &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        playlists.items.map((el,i) => {
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
                !playlists && <h3 className="text-center text-secondary">Server offline</h3>
            } 
        </div>
    )

}