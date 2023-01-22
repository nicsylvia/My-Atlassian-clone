import React from 'react';
import styled from 'styled-components';
import { BsArrowRightShort } from "react-icons/bs";

interface Buttons{
    mainText1 : string;
    mainText2 : string;
    mainText3 : string;
    link: string;
    img1: any;
    img2?: any;
    img3?: any;
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
    bio5: string;
    bio6: string;
    image: any;
}

const ButtonProps: React.FC<Buttons> = ({
    mainText1, mainText2, mainText3, link, img1, img2, img3, bio1, bio2, image,  bio3,  bio4,  bio5,  bio6
}) => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <Text1>
                {mainText1} <br />{mainText2}<br />{mainText3}
                </Text1>
                <Link>
                        <a href="https://www.atlassian.com/solutions/work-management">{link} &nbsp; <BsArrowRightShort /></a>
                </Link>
                <Holder>
                   <Wrap>
                   <Icon>
                        <img src={img1} alt="" />
                    </Icon>
                    <Bio>
                        <h4>{bio1}</h4>
                        <p>{bio2} </p>
                    </Bio>
                   </Wrap>
                    <Wrap>
                    <Icon>
                    <img src={img2} alt="" />
                    </Icon>
                    <Bio>
                        <h4>{bio3}</h4>
                        <p> {bio4}</p>
                    </Bio>

                    </Wrap>
                    <Wrap>
                    <Icon>
                    <img src={img3} alt="" />
                    </Icon>
                    <Bio>
                        <h4>{bio5}</h4>
                        <p>{bio6}</p>
                    </Bio>
                    </Wrap>
                    
                </Holder>
            </Content>
            <Image src = {image} />
        </Wrapper>
    </Container>
  )
}

export default ButtonProps;

const Container = styled.div`
    width: 100%;
    /* height: 600px; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
`;
const Wrapper = styled.div`
    width: 95%;
    /* height: 500px; */
    display: flex;
    justify-content: space-around;
    /* background-color: yellow; */
`;
const Content = styled.div`
    width: 35%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    /* background-color: orange; */
    flex-direction: column;
`;
const Image = styled.img`
    width: 60%;
    /* height: 500px; */
    object-fit: contain;
    /* background-color: aqua; */
`;
const Text1 = styled.div`
    font-size: 25px;
`;
const Link = styled.div`
    display: flex;
    align-items: center;
    transition: all 350ms;
    margin-top: 20px;
    /* background-color: green; */
    a{
        font-size: 19px;
        color: blue;
        text-decoration: none;
    }
    :hover{
            text-decoration: underline;
            transform: scale(1.01);
        }
`;
const Holder = styled.div`
margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    /* background-color: green; */
    width: 450px;
    height: 350px;
`;
const Wrap = styled.div`
    display: flex;
    width: 400px;
    /* background-color: red; */
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        color: blue;

    }
   
`;
const Icon = styled.div`
    width: 50px;
    height: 50px;
    object-fit: contain;
    display: flex;
    align-items: center;
    
    /* background-color: black; */
`;
const Bio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 300px;
    margin-bottom: 10px;
    /* background-color: pink; */
    h4{
        margin: 0;
    }
    p{
        margin: 0;
    }
`;