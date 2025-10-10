import './header.css'


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
                <button className='login-btn'>Log in</button>
                <button className='signup-btn'>Sign up</button>
            </div>
        </header>
    )
}
