import React from 'react';
import fetching from '../hooks/fetching';

export default (props) => {
    const [data, youtube] = fetching()

    return (
        <div >
            <h4 className="text-light">New Releases</h4>
            <ul className="list-group scrollbar">
                { props.newRelease.albums && props.newRelease.albums.items.map((data, i) => {
                    return (
                        <li className="list-group-item bg-dark" key={i}>
                            <a type="button" onClick={() => youtube(`${data.artists[0].name} - ${data.name}`)}>
                                <span className="text-muted">{data.artists[0].name}</span>
                                <span className="text-light"> - </span>{data.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}