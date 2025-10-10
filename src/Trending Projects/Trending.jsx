import './trending.css'
import '../Carousel/carousel.css'
import React from "react";
import EmblaCarousel from '../Carousel/Carousel';

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
                <button>Explore projects</button>
            </div>
        </div>
    )
}