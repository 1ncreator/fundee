import './hero.css'
import Button from '../Button'

export default function HeroSection(){
    return(
        <div className='hero-wrapper'>
            <div className='hero-left'>
                <p className="hero-title">Fund the content that you want to see — from the people you want to see it from.</p>
                <p className="hero-podtitle">Fundee aligns what creators want to make with what their fans want to see. </p>
                <div>
                    <Button btntext={"Call to action"} variant="purple-button" />
                </div>
            </div>
            <div className='hero-right'>
                <img className='hero-img' src='../images/hero-img.png' alt='Hero Image'></img>
            </div>
        </div>
    )
}