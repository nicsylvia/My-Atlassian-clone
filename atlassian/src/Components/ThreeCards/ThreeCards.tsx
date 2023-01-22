import React from 'react'
import styled from 'styled-components';

interface cardProps{
    img: string;
    headText: string;
    paraText1: string;
    paraText2: string;
    link: string;
    links: string;
    bg: string;
}

const ThreeCards: React.FC<cardProps> = ({
    img, headText, paraText1, paraText2, link, links, bg
}) => {
  return (
    <Card bgColor = {bg}>
        <Image src= {img} />
        <Content bgColor = {bg} >
            <h2>{headText}</h2>
            <p> {paraText1}<br /> {paraText2} </p>
            <p><a href={links}>{link}</a></p>
        </Content>
    </Card>
  )
}

export default ThreeCards;

const Card = styled.div<{bgColor: string}>`
    width: 400px;
    height: 450px;
    background-color: ${(props) => (props.bgColor)};
    border-radius: 5px;
    margin: 20px;
    overflow: hidden;
    transition: all 350ms;
    
    :hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 50%;
    background-color: aqua;
    object-fit: cover;
`;
const Content = styled.div<{bgColor: string}>`
     width: 100%;
    height: 50%;
    background-color: ${(props) => (props.bgColor)};
    text-align: center;
    color: #253858;
    a{
        text-decoration: none;
        font-weight: 500;
        color: #0D6CFF;
    }
`;