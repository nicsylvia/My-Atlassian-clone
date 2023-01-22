import React from 'react'
import styled from 'styled-components';
import first from "./Assets/High-Velocity@2x.jpg";
import second from "./Assets/worklife-ondemand.png";

const Events = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <h3>EVENTS</h3>

                <h2>Hear from today’s<br /> fearless builders and <br /> innovators</h2>

                <a href="https://www.atlassian.com/company/events">Learn More</a>
            </Content>
            <Picture>
                <Image src={first} />
                
            </Picture>
            <Picture>
                <Image src={second} />
                
            </Picture>
        </Wrapper>
    </Container>
  )
}

export default Events;

const Container = styled.div`
    width: 100%;
    height: 500px;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    width: 90%;
    height: 450px;
    /* background-color: red; */
    display: flex; 
    justify-content: space-between;
`;
const Content = styled.div`
    width: 30%;
    height: 300px;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    h3{
        color: #008DA6;
    }
    h2{
        color: #253858;
        font-size: 35px;
    }
    a{
        text-decoration: none;
        color: #3B84F9;
        font-weight: bold;
    }
`;
const Picture = styled.div`
    width: 30%;
    height: 400px;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 350ms;
    :hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
