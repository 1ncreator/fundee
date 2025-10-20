
import Button from '../Button'
import styled from 'styled-components'


export default function Header() {
    return(
        <HeaderWrapper>
            <HeaderLeft>
            <HeaderLogo>
                <p>Fundee</p>
            </HeaderLogo>
            <HeaderMenu>
                <p>Project</p>
                <p>Creators</p>
                <p>About us</p>
                </HeaderMenu>
            </HeaderLeft>
            <LoginBtns>
                <Button btntext={'Log in'} variant='white-button' />
                <Button btntext={'Sign up'} variant='purple-button' />
            </LoginBtns>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 37px 0px 0px 0px;
`

const HeaderLeft = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 120px;
    align-items: center;
`

const HeaderLogo = styled.div`
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 700;
    width: 96px;  
    color: black;
    align-items: center;
`

const HeaderMenu = styled.div`
    display: flex;
    flex-flow: row wrap;
    column-gap: 52px;
    font-weight: 600;
    font-size: 13px;
    color: #212130;
    align-items: center;
`

const LoginBtns = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 20px;
    align-items: center;
`