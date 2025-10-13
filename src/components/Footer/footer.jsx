import './footer.css'
import Button from '../Button'

export default function Footer(){

    return(
        <section className="footer-wrapper">
            <div className='footer-main'><p className="footer-title">Don’t miss the latest updates</p>
                <div className='footer-form'>
                    <input type="email" placeholder='Your email' />
                    <Button btntext = "Subscribe" variant='purple-button'></Button>
                </div>
            </div>
            <div className='border-footer'></div>
            <div className='footer-info'>
                <div className='footer-logo'>
                    <p>Fundee</p>
                </div>
                <div className='footer-menu'>
                    <p>Customer service</p>
                    <p>Contacts</p>
                    <p>About us</p>
                    <p>Smth else</p>
                </div>
                <div className='privasy'>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}   