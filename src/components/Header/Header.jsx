import './header.css'
import Button from '../Button'


export default function Header() {
    return(
        <header className="header-wrapper">
            <div className="header-logo">
                <p>Fundee</p>
            </div>
            <div className="header-menu">
                <p>Project</p>
                <p>Creators</p>
                <p>About us</p>
            </div>
            <div className="login-btns">
                <Button btntext={'Log in'} variant='white-button' />
                <Button btntext={'Sign up'} variant='purple-button' />
            </div>
        </header>
    )
}
