import React from 'react'
import styled from 'styled-components';
import heroR from "./Assets/hero.webp";
import heroL from "./Assets/hero_left_700x450px@2x.png"

const Hero = () => {
  return (
    <Container>
        <One>
        <First>
            <Text>It’s possible <br /> <span> with teamwork</span> </Text>
        </First>
        <Second>
            <BgImage src={heroR} />
        </Second>
        </One>
        
    </Container>
  )
}

export default Hero;

const Container = styled.div`
    width: 100%;
    background-image: url(${heroL});
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #253858;
`;
const One = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Second = styled.div``;
const First = styled.div`
    margin-left: 20px;
`;
const Text = styled.div`
    font-size: 60px;
    font-weight: bold;
    line-height: 1.05;
    span{
        margin-left: 50px;
    }
`;
const BgImage = styled.img`
    height: 450px;
`;
