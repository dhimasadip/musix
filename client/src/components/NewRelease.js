import React, { Component } from 'react';

class NewRelease extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <h4 className="text-light">New Releases</h4>
                <ul className="list-group">
                    { this.props.newRelease.map((data, i) => {
                        return <li className="list-group-item bg-dark" key={i}>{data.artists[0].name} - {data.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default NewRelease;