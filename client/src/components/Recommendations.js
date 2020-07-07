import React from 'react';
// import fetching from '../hooks/fetching';
import Accordion from '../components/accordion'

export default () => {
    // const [genres] = fetching(`https://api.spotify.com/v1/recommendations/available-genre-seeds`)
    return (
        <div >
            <h4 className="text-light">Recommendation </h4>
            <div className="accordion" id="category">
                {/* { genres.genres && genres.genres.map((el, i) => {
                    return <Accordion genre={el} key={i} />
                })} */}
                
                <Accordion genre="acoustic" />
                <Accordion genre="ambient" />
                <Accordion genre="blues" />
                <Accordion genre="classical" />
                <Accordion genre="club" />
                <Accordion genre="country" />
                <Accordion genre="dance" />
                <Accordion genre="edm" />
                <Accordion genre="electro" />
                <Accordion genre="folk" />
                <Accordion genre="groove" />
                <Accordion genre="indie" />
                <Accordion genre="indie-pop" />
                <Accordion genre="jazz" />
                <Accordion genre="metal" />
                <Accordion genre="pop" />
                <Accordion genre="rock" /> 
               
            </div>
        </div>
    )
}

