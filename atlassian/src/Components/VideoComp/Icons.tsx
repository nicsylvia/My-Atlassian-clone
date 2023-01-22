import React from 'react'
import styled from 'styled-components';
import kiva from "../Assets/kiva.png";
import redfin from "../Assets/redfin.png";
import nasa from "../Assets/nasa.png";
import castlight from "../Assets/castlight.png";
import twitter from "../Assets/twitter.png"
import robobo from "../Assets/robobo.png"

const Icons = () => {
  return (
    <Container>
      <Wrapper>
        <img src={kiva} alt="" />
        <img src={twitter} alt="" />
        <img src={redfin} alt="" />
        <img src={nasa} alt="" />
        <img src={robobo} alt="" />
        <img src={castlight} alt="" />
      </Wrapper>
    </Container>
  )
}

export default Icons;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #F6FAFF, #E2EDFF);
`;
const Wrapper = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;