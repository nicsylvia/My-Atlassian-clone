import React, {useState} from 'react';
import styled from 'styled-components';
import { BsBoxArrowDown } from "react-icons/bs";
import videoIcon from "../Assets/video-play-circle-solid-blue-small.png"
import cancel from "../Assets/close-large.svg"

const Video = () => {

    const [vid, showVid] = useState<boolean>(false)

    const display =()=>{
        showVid(!vid)
    }
    const close =()=>{
        showVid(!vid)
    }
  return (
    <Container>
        <Vids onClick={display} src={videoIcon} />
        <Text >
          <p onClick={display}>  Watch a customer story</p>
        </Text>
            <a href="https://en.savefrom.net/308/#url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6oj8tNjwR68&utm_source=userjs-chrome&utm_medium=extensions&utm_campaign=link_modifier">< BsBoxArrowDown /></a>

         {vid ? (   <Videbg>
                <VideoHold>
                <iframe width="1024" height="576" src="https://www.youtube.com/embed/6oj8tNjwR68" title="Atlassian + Kiva: The Teams Behind Global Impact | Atlassian" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoHold>
                <CloseIcn><p onClick={close}>
                        <img src={cancel} alt="" />
                    </p></CloseIcn>
            </Videbg>) : null}
    </Container>
  )
}

export default Video;

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

const Container = styled.div`
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