import React, { Component } from 'react';

class FindSong extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="mt-5">
                
                { this.props.tracks.length > 0 && 
                    <>
                        <h4 className="text-light">Tracks: </h4>
                    </>
                }
                
                <ul className="list-group">
                    {this.props.tracks.map((el, i) => {
                        const artist = new RegExp(this.props.keyword, 'gi')
                        if (!el.name.match(artist)) {
                            return <li className="list-group-item bg-dark" key={i}> {el.name} </li>
                        }
                    })}
                </ul>
            </div>
        )
    }
};

export default FindSong;