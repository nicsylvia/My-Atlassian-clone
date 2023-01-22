import React, {useState} from 'react'
import styled from 'styled-components';

import { BsBoxArrowDown } from "react-icons/bs";
import videoIcon from "../Assets/video-play-circle-solid-blue-small.png"
import cancel from "../Assets/close-large.svg"

import kiva from "../Assets/kiva.png";
import redfin from "../Assets/redfin.png";
import nasa from "../Assets/nasa.png";
import castlight from "../Assets/castlight.png";
import twitter from "../Assets/twitter.png"
import robobo from "../Assets/robobo.png"


const Join:React.FC = () => {

  const [vid, showVid] = useState<Boolean>(false)

    const display =()=>{
        showVid(!vid)
    }
    const close =()=>{
        showVid(!vid)
    }

  return (
    <Container>
        <h1>
        Join the teams that achieve the impossible every day
        </h1>
        <Container1>
        <Vids onClick={display} src={videoIcon} />
        <Text >
          <p onClick={display}>  Watch a customer story</p>
        </Text>
            <a href="https://en.savefrom.net/308/#url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6oj8tNjwR68&utm_source=userjs-chrome&utm_medium=extensions&utm_campaign=link_modifier" target="blank">< BsBoxArrowDown /></a>

         {vid ? (   <Videbg>
                <VideoHold>
                <iframe width="1024" height="576" src="https://www.youtube.com/embed/6oj8tNjwR68" title="Atlassian + Kiva: The Teams Behind Global Impact | Atlassian" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoHold>
                <CloseIcn><p onClick={close}>
                        <img src={cancel} alt="" />
                    </p></CloseIcn>
            </Videbg>) : null}
    </Container1>
    <Container2>
      <Wrapper>
        <img src={kiva} alt="" />
        <img src={twitter} alt="" />
        <img src={redfin} alt="" />
        <img src={nasa} alt="" />
        <img src={robobo} alt="" />
        <img src={castlight} alt="" />
      </Wrapper>
    </Container2>
    </Container>
  )
}

export default Join;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;
    background-image: linear-gradient(to top,#E2EDFF, #F6FAFF);
    margin-bottom: 20px;
    
    h1{
        font-size: 20px;
        color: #635758;
        
    }
`;

const Videbg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0000005c;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    color: #0052CC;
    cursor: pointer;
    
`
const VideoHold = styled.div`
    width: 70%;
    height: 70vh;
    /* background-color: red; */

`
const CloseIcn = styled.div`
    width: 5%;
    height: 70vh;
    /* background-color: green; */
    margin-left: 90px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        color: white;
    }
p{
    cursor: pointer;
}
`

const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: green;
    }
`;
const Vids = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    color: #0052CC;
    cursor: pointer;
`;
const Text = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0052CC;
    cursor: pointer;
    font-weight: bold;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;