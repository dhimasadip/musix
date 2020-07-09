import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import musicNotes from '../assets/music-notes.png'
import { youtubeSearch } from '../store/actions/YoutubeSearch'
import { getNewReleases } from '../store/actions/getNewRelease'

export default () => {
    const dispatch = useDispatch()
    const newReleases = useSelector(state => state.newReleaseReducer.newReleases)

    useEffect(() => {
        dispatch(getNewReleases())
    }, [])

    return (
        <div >
            <h4 className="text-light">New Releases</h4>
            <ul className="list-group scrollbar">
                { newReleases && newReleases.map((data, i) => {
                    return (
                        <li className="list-group-item bg-dark" key={i}>
                            <a  type="button" className="d-flex" 
                                onClick={() => dispatch(youtubeSearch(`${data.artists[0].name} ${data.name}`))}
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
                    !newReleases && 
                    <li className="list-group-item bg-dark">
                        Not Available
                    </li>
                }
            </ul>
        </div>
    );
}