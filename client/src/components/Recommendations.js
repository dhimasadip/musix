import React, { Component } from 'react';

class Recommendation extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <h4 className="text-light">Recommendation </h4>
                <ul className="list-group">
                    { this.props.recommended.map((data, i) => {
                        return <li className="list-group-item bg-dark" key={i}>{data.artists[0].name} - {data.name}</li>
                    })}
                </ul>
            </div>
        )
    }
};

export default Recommendation;