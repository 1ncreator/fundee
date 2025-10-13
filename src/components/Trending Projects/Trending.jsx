import './trending.css'
import Button from '../Button/index.jsx';

import React from "react";
import EmblaCarousel from '../Carousel/Carousel.jsx';

export default function TrendingProjects() {
    return(
        <div className='trending-wrapper'>
            <div>
                <p className='title'>Trending projects</p>
            </div>
            <div className='carousel'>
                <EmblaCarousel />
            </div>
            <div className='button'>
                <Button btntext={'Explore projects'} variant='white-button'/>
            </div>
        </div>
    )
}