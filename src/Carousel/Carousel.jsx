import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: 'start', containScroll: 'trimSnaps' }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla" >
      <button class="embla__prev" onClick={scrollPrev}><img src='../images/slider-arrow.png'></img></button>
      <div className='embla_viewport' ref={emblaRef}> 
        <div className="embla__container">
          <div className="embla__slide">
            <img src='../images/carousel-img-1.png'></img>
            <p className='slider-title'>Name of the project</p>
            <div className='slider-author'>
              <img src='../images/slider-author-1.png'></img>
              <p>Jean Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slide">
          <img src='../images/carousel-img-2.png'></img>
            <p className='slider-title'>Name of the project could be in two lines but not three ...</p>
            <div className='slider-author'>
              <img src='../images/slider-author-2.png'></img>
              <p>John Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slide">
          <img src='../images/carousel-img-3.png'></img>
            <p className='slider-title'>Name of the project could be in two lines but not three ...</p>
            <div className='slider-author'>
              <img src='../images/slider-author-3.png'></img>
              <p>Jean Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slide"><img src='../images/carousel-img-1.png'></img>
            <p className='slider-title'>Name of the project</p>
            <div className='slider-author'>
              <img src='../images/slider-author-1.png'></img>
              <p>Jean Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
            </div>

          <div className="embla__slide">
          <img src='../images/carousel-img-2.png'></img>
            <p className='slider-title'>Name of the project could be in two lines but not three ...</p>
            <div className='slider-author'>
              <img src='../images/slider-author-2.png'></img>
              <p>John Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slide">
          <img src='../images/carousel-img-3.png'></img>
            <p className='slider-title'>Name of the project could be in two lines but not three ...</p>
            <div className='slider-author'>
              <img src='../images/slider-author-3.png'></img>
              <p>Jean Smith</p>
            </div>
            <div className='slider-donation'>
              <div className='progress'>
                <div className='bar'>
                  <div className='bar-fill'><img src='../images/progress-bar.png'></img></div>
                </div>
                <div className='donation-info'>
                  <div className='donation-info-left'>
                    <img src='../icons/cash.png'></img>
                    <p>$253 / $700</p>
                  </div>
                  <p>70% raised</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>  
      <button class="embla__next" onClick={scrollNext}><img src='../images/slider-arrow.png'></img></button> 
    </div>
  )
}