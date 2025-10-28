import Button from '../Button/index.tsx'
import { styled } from 'styled-components'

export default function HeroSection(){
    return(
        <HeroWrapper>
            <HeroLeft>
                <HeroTitle>Fund the content that you want to see — from the people you want to see it from.</HeroTitle>
                <HeroPodtitle>Fundee aligns what creators want to make with what their fans want to see. </HeroPodtitle>
                    <Button onClick={() => {}} btntext={"Call to action"} variant="purple-button" />
            </HeroLeft>
            <HeroRight>
                <HeroImg src='../images/hero-img.png' alt='Hero Image'></HeroImg>
            </HeroRight>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 41px;
    align-items: center;
    justify-content: center;
    padding-top: 102px;
    padding-bottom: 177px;
`

const HeroLeft = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 620px;
    row-gap: 25px;
` 

const HeroRight = styled.div`
    display: inline-block;
    position: relative;

    &::before {
        content:"";
        position:absolute;
        inset:-2px;                      
        border-radius:150px;
        background: radial-gradient(60% 60% at 40% 40%, #A185EA, #ffffff);
        filter: blur(100px);              
        z-index: -1;
        top: 50px;
        left: 250px;
    }
`

const HeroTitle = styled.p`
    display: flex;
    font-size: 42px;
    font-weight: 700;
    color: #212130;
`

const HeroPodtitle = styled.p`
    display: flex;
    font-size: 13px;
    font-weight: 400;
    color: #56566B;
`

const HeroImg = styled.img`
    display: block;
    width: 593px;
    z-index: 7;
`
