import React from 'react';
export default (props) => {
    console.log(props, '<<<<<<<<<')
    return (
        <div >
            <h4 className="text-light">Recommendation </h4>
            <ul className="list-group">
                { props.recommended.map((data, i) => {
                    return <li className="list-group-item bg-dark" key={i}>{data.artists[0].name} - {data.name}</li>
                })}
            </ul>
        </div>
    )
}