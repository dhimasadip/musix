import React from 'react';
import Accordion from '../components/accordion'

export default () => {
    const genres = 
    [
        'acoustic','ambient','blues','classical','club','country','dance','edm','electro','folk',
        'groove','indie','indie-pop','jazz','metal','pop','rock'
    ]

    return (
        <div >
            <h4 className="text-light">Recommendation </h4>
            <div className="accordion scrollbar" id="category">
                {
                    genres.map((el, i) => <Accordion key={i} genre={el} />)
                }
            </div>
        </div>
    )
}

