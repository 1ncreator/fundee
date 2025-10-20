import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './carousel.css'
import styled from 'styled-components'

const carouselData = [
  {
    id: 1,
    image: new URL('../../../images/carousel-img-1.png', import.meta.url).href,
    authorAvatar: new URL('../../../images/slider-author-1.png', import.meta.url).href,
    title: 'Name of the project',
    author: 'Jean Smith',
    raised: 500,
    target: 700,
  },
  {
    id: 2,
    image: new URL('../../../images/carousel-img-2.png', import.meta.url).href,
    authorAvatar: new URL('../../../images/slider-author-2.png', import.meta.url).href,
    title: 'Name of the project could be in two lines but not three ...',
    author: 'John Smith',
    raised: 253,
    target: 700,
  },
  {
    id: 3,
    image: new URL('../../../images/carousel-img-3.png', import.meta.url).href,
    authorAvatar: new URL('../../../images/slider-author-3.png', import.meta.url).href,
    title: 'Name of the project could be in two lines but not three ...',
    author: 'Jean Smith',
    raised: 253,
    target: 700,
  },
]

const arrowIcon = new URL('../../../images/slider-arrow.png', import.meta.url).href
const cashIcon = new URL('../../../icons/cash.png', import.meta.url).href

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'start', containScroll: 'trimSnaps' },
    [Autoplay()]
  )

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return

    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return

    emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <CarouselWrapper>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer>
          {carouselData.map((item) => {
            return (
              <CarouselSlide key={item.id}>
                <CarouselImage src={item.image} alt={item.title} />
                <CarouselTitle>{item.title}</CarouselTitle>

                <CarouselAuthor>
                  <CarouselAuthorAvatar src={item.authorAvatar} alt={item.author} />
                  <CarouselAuthorName>{item.author}</CarouselAuthorName>
                </CarouselAuthor>

                <CarouselDonation>
                  <CarouselProgress>
                    <CarouselBar>
                      <CarouselBarFill style={{ width: `${clampedProgress}%` }} />
                    </CarouselBar>

                    <CarouselDonationInfo>
                      <CarouselDonationInfoLeft>
                        <CarouselDonationInfoLeftIcon src={cashIcon} alt="" aria-hidden="true" />
                        <CarouselDonationInfoLeftText>${item.raised} / ${item.target}</CarouselDonationInfoLeftText>
                      </CarouselDonationInfoLeft>
                      <CarouselDonationInfoRight>{clampedProgress}% raised</CarouselDonationInfoRight>
                    </CarouselDonationInfo>
                  </CarouselProgress>
                </CarouselDonation>
              </CarouselSlide>
            )
          })}
        </CarouselContainer>
        <CarouselPrevButton onClick={scrollPrev}>
          <img src={arrowIcon} alt="Previous slide" />
        </CarouselPrevButton>
        <CarouselNextButton onClick={scrollNext}>
          <img src={arrowIcon} alt="Next slide" />
        </CarouselNextButton>
      </CarouselViewport>
    </CarouselWrapper>
    )
}


const CarouselWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
` 
const CarouselViewport = styled.div`
    overflow: hidden;
    max-width: 1170px;
    height: 400px;
` 
const CarouselContainer = styled.div`
    display: flex;
    gap: 30px;
    padding-inline: 30px;
` 
const CarouselSlide = styled.div`
    height: 390px;
    flex: 0 0 370px;
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
`
const CarouselImage = styled.img`
    width: 370px;
    height: 200px;
`
const CarouselTitle = styled.p`
    padding: 10px 0px 5px 20px;
    font-size: 20px;
    font-weight: 700;
    color: #212130;
`
const CarouselAuthor = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 15px;
    padding-left: 20px;
    font-size: 13px;
    font-weight: 500;
    color: #212130;
`
const CarouselAuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
`
const CarouselAuthorName = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #212130;
`
const CarouselBalance = styled.p`
    font-size: 11px;
    font-weight: 500;
    color: #56566B;
`
const CarouselTarget = styled.p`
    font-size: 11px;
    font-weight: 500;
    color: #56566B;
`

const CarouselNextButton = styled.button`
    border: none;
    padding-left: 45px;
    background: none;
`
const CarouselPrevButton = styled.button`
    border: none;
    padding-right: 45px;
    background: none;
`