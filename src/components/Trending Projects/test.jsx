import styled from "styled-components"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Projects_cards_data = [
    {
        id: 1,
        image: "../images/carousel-img-1.png",
        title: "Name of the project",
        authorlogo: "../images/slider-author-1.png",
        author: "Jean Smith",
        balance: "253",
        target: "700",
    },
    {
        id: 2,
        image: "../images/carousel-img-2.png",
        title: "Name of the project could be in two lines but not three ...",
        authorlogo: "../images/slider-author-2.png",
        author: "Jhon Smith",
        balance: "581",
        target: "700",
    },
    {
        id: 3,
        image: "../images/carousel-img-3.png",
        title: "Name of the project could be in two lines but not three ...",
        authorlogo: "../images/slider-author-2.png",
        author: "Jhon Smith",
        balance: "253",
        target: "700",
    },
    {
        id: 4,
        image: "../images/carousel-img-1.png",
        title: "Name of the project",
        authorlogo: "../images/slider-author-1.png",
        author: "Jean Smith",
        balance: "253",
        target: "700",
    },
    {
        id: 5,
        image: "../images/carousel-img-2.png",
        title: "Name of the project could be in two lines but not three ...",
        authorlogo: "../images/slider-author-2.png",
        author: "Jhon Smith",
        balance: "563",
        target: "700",
    },
    {
        id: 6,
        image: "../images/carousel-img-3.png",
        title: "Name of the project could be in two lines but not three ...",
        authorlogo: "../images/slider-author-2.png",
        author: "Jhon Smith",
        balance: "253",
        target: "700",
    }
    
]

export default function TestSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: 'start' }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return(
        <SliderWrapper>  
            <BtnPrev onClick={scrollPrev}><BtnPrevImg src='../images/slider-arrow.png' /></BtnPrev> 
            <EmblaViewport ref={emblaRef}>
                <EmblaContainer>
                    {Projects_cards_data.map((card) => {
                        const percent = Math.round((card.balance / card.target) * 100)
                        return (
                            <EmblaSlide key={card.id}>
                                <div>
                                    <EmblaSlideImage src={card.image} alt={card.title} />
                                    <SliderTitle>{card.title}</SliderTitle>
                                    <SliderAuthor><SliderAuthorLogo src={card.authorlogo} alt={card.author} />{card.author}</SliderAuthor>
                                </div>
                                <ProgressWrapper>
                                    <ProgressTrack>
                                        <ProgressFill style={{ width: `${percent}%` }} />
                                    </ProgressTrack>

                                    <ProgressMeta>
                                        <span>${card.balance} / ${card.target}</span>
                                        <span>{Math.round(percent)}% raised</span>
                                    </ProgressMeta>
                                </ProgressWrapper>
                            </EmblaSlide>
                        )
                    })}
                </EmblaContainer>   
            </EmblaViewport>
            <BtnNext onClick={scrollNext}><BtnNextImg src='../images/slider-arrow.png' /></BtnNext>
        </SliderWrapper>
    )
}




const SliderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1170px;
`

const BtnPrev = styled.button`
    border: none;
    background: none;
    position: absolute;
    left: -50px;
`

const BtnPrevImg = styled.img`
    transform: rotate(180deg);
    width: 20px;
    color: gray;
`

const BtnNext = styled.button`
    border: none;
    background: none;
    position: absolute;
    right: -50px;
`

const BtnNextImg = styled.img`
    width: 20px;
    color: gray;
`

const EmblaViewport = styled.div`
    overflow: hidden;
    height: 400px;
    width: 100%
`

const EmblaContainer = styled.div`
    display: flex;
    gap: 30px;
    padding-inline: 30px;
`

const EmblaSlide = styled.div`
    height: 390px;
    flex: 0 0 370px;
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
`

const EmblaSlideImage = styled.img`
    width: 370px;
`

const SliderTitle = styled.p`
    padding: 10px 0px 5px 20px;
    font-size: 20px;
    font-weight: 700;
    color: #212130;
`

const SliderAuthor = styled.p`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 15px;
    padding-left: 20px;
    font-size: 13px;
    font-weight: 500;
    color: #212130;
`

const SliderAuthorLogo = styled.img`
    width: 40px;
    height: 40px;
`
const DonationInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    font-size: 11px;
    font-weight: 500;
    color: #56566B;
    border: 1px solid blue;
`

const ProgressWrapper = styled.div`
  display: grid;
  gap: 12px;
`

const ProgressTrack = styled.div`
  height: 6px;
  width: 100%;
  border-radius: 999px;
  background: #ebeaf3;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  border-radius: inherit;
  transition: width 0.4s ease;
  background: linear-gradient(90deg, #f6b09e 0%, #826cf0 60%, #5660ff 100%);
`

const ProgressMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4b4a67;
  font-weight: 500;
  font-size: 11px;
`
