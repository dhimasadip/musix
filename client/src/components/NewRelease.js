import React from 'react';
export default (props) => {
    // console.log(props.newRelease, '<<<<<<<<<')
    return (
        <div >
            <h4 className="text-light">New Releases</h4>
            <ul className="list-group">
                { props.newRelease.map((data, i) => {
                    return <li className="list-group-item bg-dark" key={i}>{data.artists[0].name} - {data.name}</li>
                })}
            </ul>
        </div>
    );
}