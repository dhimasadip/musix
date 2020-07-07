import React from 'react';
import fetching from '../hooks/fetching';
export default (props) => {
    const [data, search] = fetching()

    const openYoutube = (keyword) => {
        search(keyword)
        setInterval(() => {
            if(data.url) {
                window.open(data.url, '_blank')
            }
        }, 1500)
    }

    return (
        <div >
            <h4 className="text-light">New Releases</h4>
            <ul className="list-group">
                { props.newRelease.albums && props.newRelease.albums.items.map((data, i) => {
                    return (
                        <li className="list-group-item bg-dark" key={i}>
                            <a type="button" onClick={() => openYoutube(`${data.artists[0].name} - ${data.name}`)}>
                                {data.artists[0].name} - {data.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}