
import React from 'react'
import fetching from '../hooks/fetching'
import { Link } from 'react-router-dom'

export default () => {

    const [{ categories }] = fetching('https://api.spotify.com/v1/browse/categories?country=ID&offset=0&limit=20')
    const [data, yt, playlist] = fetching()

    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item active">Category /</li>
                </ol>
            </nav>
            {
                categories &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        categories.items.map((el,i) => {
                            return (
                                <div className="col mb-4" key = {i}>
                                    <Link to ={{pathname: `/category/${el.id}`, state: {name: el.name}}}>
                                        <div className="card" onClick={() => playlist(`${el.id}`)}>
                                            <img src={el.icons[0].url} className="card-img-top"></img>
                                            <div className="centered">
                                                <h6 className="text-light text-center">{el.name}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    
                </div>
            }
            {
                !categories && <h3 className="text-center text-secondary">Server offline</h3>
            }
        </div>


    )
}