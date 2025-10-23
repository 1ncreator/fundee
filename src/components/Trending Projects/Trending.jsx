
import styled from 'styled-components';
import React from "react";
import TestSlider from './test.jsx';
import Button from '../Button';

export default function TrendingProjects() {
    return(
        <TrendingWrapper>
            <Title>Trending projects</Title>
                <TestSlider />
            <Button btntext={'Explore projects'} variant='white-button' />
        </TrendingWrapper>  
    )
}

const TrendingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 58px;
`

const Title = styled.p`
    font-size: 42px;
    font-weight: 700;
    color: #212130;
`