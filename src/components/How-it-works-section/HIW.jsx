import HowItWorks from "./How-it-works.jsx"
import styled from "styled-components"

export default function HIW() {
    return(
        <MainWrapper>
            <Title>How it works</Title>
            <HowItWorks />
        </MainWrapper>
    )
}


const MainWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 17px;
    padding: 150px 0px;
`

const Title = styled.p`
    font-size: 42px;
    font-weight: 700;
    color: #212130;
`