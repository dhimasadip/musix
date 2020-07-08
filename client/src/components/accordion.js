import React from 'react'
import fetching from '../hooks/fetching';
import musicNotes from '../assets/music-notes.png'

export default (props) => {
    const [data, youtube] = fetching()
    const [recommended] = fetching(`https://api.spotify.com/v1/recommendations?limit=10&market=ID&seed_genres=${props.genre}`)

    return (
        <div className="card bg-dark">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-block text-left text-light" type="button" data-toggle="collapse" 
                        data-target={'#' + props.genre} aria-expanded="true" aria-controls={props.genre}>
                    { props.genre }
                    </button>
                </h2>
            </div>

            <div id={props.genre} className="collapse" aria-labelledby="headingOne" data-parent="#category">
                <div className="card-body">
                    {
                        recommended.tracks && recommended.tracks.length > 0 &&
                        <ul className="list-group">
                            { recommended.tracks.map((data, i) => {
                                return( 
                                <li className="list-group-item bg-dark" key={i}>
                                    <a type="button" className="d-flex" 
                                        onClick={() => youtube(`${data.artists[0].name} ${data.name}`)}
                                    >
                                        <div className="mr-3">
                                            <img src={musicNotes}></img>
                                        </div>                                
                                        <div>
                                            <span className="">{data.name}</span>
                                            <br />
                                            <span className="text-white-50">{data.artists[0].name}</span>
                                        </div>
                                    </a>
                                </li>)
                            })}
                        </ul>
                    }
                    {
                        !recommended.tracks && <h6>Not Available</h6>
                    }
                </div>
            </div>
        </div>
    )
}