import React from 'react'
import styled from 'styled-components';
import community from "../Assets/Community.webp";

const TeamEssentials = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <h3>TEAM ESSENTIALS</h3>

                <h2>Explore resources to <br /> unleash the potential <br /> of your team</h2>
            </Content>
            <Picture>
                <Image src={community} />
                <Writings>
                    <h4>Atlassian Community</h4>
                    <p>Connect globally and meet locally to get more out of our products.</p>
                   <Link>
                   <a href="https://community.atlassian.com/">Search the forum</a>
                    <a href="https://www.atlassian.com/community">Join our community</a>
                   </Link>
                </Writings>
            </Picture>
        </Wrapper>
    </Container>
  )
}

export default TeamEssentials;

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
`;
const Picture = styled.div`
    width: 65%;
    height: 450px;
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
    height: 250px;
    /* background-color: pink; */
`;
const Writings = styled.div`
    width: 100%;
    height: 200px;
    background-color: #FFEBE5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-weight: bold;
        color: #253858;
    }
    h4{
        color: #253858;
        letter-spacing: 1px;
        font-size: 30px;
        margin: 0;
    }
`;
const Link = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        margin-left: 20px;
        color: #3B84F9;
        font-weight: bold;
    }
`;