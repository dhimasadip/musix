import React from 'react';
import fetching from '../hooks/fetching';
import musicNotes from '../assets/music-notes.png'

export default (props) => {
    const [data, youtube] = fetching()

    return (
        <div >
            <h4 className="text-light">New Releases</h4>
            <ul className="list-group scrollbar">
                { props.newRelease.albums && props.newRelease.albums.items.map((data, i) => {
                    return (
                        <li className="list-group-item bg-dark" key={i}>
                            <a  type="button" className="d-flex" 
                                onClick={() => youtube(`${data.artists[0].name} ${data.name}`)}
                            >
                                <div className="mr-3">
                                    <img src={musicNotes}></img>
                                </div>                                
                                <div>
                                    <span className="text-white">{data.name}</span>
                                    <br />
                                    <span className="text-white-50">{data.artists[0].name}</span>
                                </div>
                                    
                            </a>
                        </li>
                    )
                })}
                {
                    !props.newRelease.albums && 
                    <li className="list-group-item bg-dark">
                        Not Available
                    </li>
                }
            </ul>
        </div>
    );
}