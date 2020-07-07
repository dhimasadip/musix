import React from 'react';
export default (props) => {
    return (
        <div className="mt-5">
            
            { props.tracks.length > 0 && 
                <>
                    <h4 className="text-light">Tracks: </h4>
                </>
            }
            
            <ul className="list-group">
                {props.tracks.map((el, i) => {
                    const artist = new RegExp(props.keyword, 'gi')
                    if (!el.name.match(artist)) {
                        return <li className="list-group-item bg-dark" key={i}> {el.name} </li>
                    }
                })}
            </ul>
        </div>
    )
}
