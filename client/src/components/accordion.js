import React from 'react'
import fetching from '../hooks/fetching';
export default (props) => {

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
                                return <li className="list-group-item bg-dark" key={i}>{data.artists[0].name} - {data.name}</li>
                            })}
                        </ul>
                    }
                    {
                        !recommended.tracks || recommended.tracks.length < 1 && <h6>Not Available</h6>
                    }
                </div>
            </div>
        </div>
    )
}