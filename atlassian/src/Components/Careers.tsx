import React from 'react'
import styled from 'styled-components';
import career1 from "./Assets/Careers_Mobile_320x280@2x.png";
import career2 from "./Assets/careers image footer right_540x450px@2x.png";

const Careers = () => {
  return (
    <Container>
        <Image>
            <img src={career1} alt="" />
        </Image>
        <Content>
            <h3>CAREERS</h3>
            <h1>We can’t do it alone</h1>
            <p> We have an ambitious road ahead, and we’re looking for people to          join       <br /> our global team to help shape the future of Atlassian.</p>
            <a href="https://www.atlassian.com/company/careers"><Button>
                Join the team
            </Button></a>
        </Content>
        <Image>
            <img src={career2} alt="" />
        </Image>
    </Container>
  )
}

export default Careers;

const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
`;
const Image = styled.div`
    width: 20%;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Content = styled.div`
    width: 60%;
    height: 300px;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #253858;
    a{
            text-decoration: none;
            color: white;
        }
    h3{
        color: #008DA6;
    }
    h1{
        font-size: 40px;
        margin: 0;
    }
    p{
        font-size: 20px;
        text-align: center;
    }
`;
const Button = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 40px;
        background-color: #156ae9;
        color: white;
        transition: all 350ms;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        :hover{
            background-color: #0047B3;
        }
`;