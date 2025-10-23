
import Button from '../Button'
import styled from 'styled-components'

export default function Footer(){

    return(
        <FooterWrapper>
            <FooterMain>
                <FooterTitle>Don’t miss the latest updates</FooterTitle>
                <FooterForm>
                    <Input type="email" placeholder='Your email' />
                    <Button btntext = "Subscribe" variant='purple-button'></Button>
                </FooterForm>
            </FooterMain>
            <BorderFooter></BorderFooter>
            <FooterInfo>
                <FooterLogo>
                    <p>Fundee</p>
                </FooterLogo>
                <FooterMenu>
                    <p>Customer service</p>
                    <p>Contacts</p>
                    <p>About us</p>
                    <p>Smth else</p>
                </FooterMenu>
                <Privacy>
                    <p>Privacy Policy</p>
                </Privacy>
            </FooterInfo>
        </FooterWrapper>
    )
}   


const FooterWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    background-color: #182135;
    padding-bottom: 30px;
    row-gap: 50px;
`

const FooterMain = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
`

const FooterTitle = styled.p`
    color: #FFFFFF;
    font-size: 42px;
    font-weight: 700;
    padding-top: 56px;
`

const FooterForm = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 10px;
    height: 40px;
`

const BorderFooter = styled.div`
    display: flex;
    border-top: 1px solid #B7B7CC;
`

const FooterInfo = styled.div`
    display: flex;
    width: 1170px;
    max-width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`

const FooterLogo = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`

const FooterMenu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 72px;
    color: #B7B7CC;
    font-size: 13px;
`

const Privacy = styled.div`
    display: flex;
    flex-flow: row nowrap;
    color: #B7B7CC;
    font-size: 13px;
`

const Input = styled.input`
    width: 270px;
    border: none;
    border-radius: 10px;
    background-color: rgb(183, 183, 204, 0.2);
    padding-left: 15px;
    outline: none;
    color: #FFFFFF;
    `