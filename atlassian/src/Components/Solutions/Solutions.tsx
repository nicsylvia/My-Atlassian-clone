import React, { useState } from 'react'
import styled from 'styled-components';

import work from "../Assets/WorkManagement.webp";
import work2 from "../Assets/Solutions_2.png";
import work3 from "../Assets/Solutions_3_ADO_928x728@1-5x.png";
import trello from "../Assets/trello.png" 
import confluence from "../Assets/cof.png" 
import jira from "../Assets/jira.png";
import jira2 from "../Assets/jiras.png";
import ButtonProps from './ButtonProps';
import jira3 from "../Assets/jirasoft.png"
import jira4 from "../Assets/jiraall.png"
import compass from "../Assets/compass2.png"

const Solutions = () => {

    const [show1, setShow1] = useState<Boolean>(true);
    const [show2, setShow2] = useState<Boolean>(false);
    const [show3, setShow3] = useState<Boolean>(false);

    const Toggle1 = () =>{
        setShow1(true);
        setShow2(false);
        setShow3(false);
    }
    const Toggle2 = () =>{
        setShow1(false);
        setShow2(true);
        setShow3(false);
    }

    
    const Toggle3 = () =>{
        setShow1(false);
        setShow2(false);
        setShow3(true);
    }

  return (
    <Container>
        <h1>Atlassian solutions are designed for all types of work</h1>
        <ButtonHold>
            <Button onClick={Toggle1} bg = {show1 ? "bg" : ""}>Work Management</Button>
            <Button onClick={Toggle2} bg = {show2 ? "bg" : ""}>IT Service Management</Button>
            <Button onClick={Toggle3} bg = {show3 ? "bg" : ""}>Agile and DevOps</Button>
        </ButtonHold>

       {
        show1 ? 
        <ButtonProps 
        mainText1  =  "Make work flow across teams "
        mainText2  =  "while connecting back to company "
        mainText3  =  " goals"
        link =  "Work differently, together"
        img1 =  {confluence}
        bio1 =  "Confluence"
        bio2 =  "Content collaboration"
        img2 =  {trello}
        bio3 =  "Trello"
        bio4 =  "Visual project management"
        img3 =  {jira}
        bio5 =  "Jira Work Management"
        bio6 =  "Business team collaboration"
        image =  {work}
        /> : null
       }

{
        show2 ? 
        <ButtonProps 
        mainText1  =  "Enable your dev, IT ops, and"
        mainText2  =  "business teams to deliver great"
        mainText3  =  "service experiences"
        link =  "Deliver at high velocity"
        img1 =  {jira2}
        bio1 =  "Jira Service Management"
        bio2 =  "High-velocity ITSM"
        img2 =  ""
        bio3 =  ""
        bio4 =  ""
        img3 =  ""
        bio5 =  ""
        bio6 =  ""
        image =  {work2}
        /> : null
       }

       {
        show3 ? 
        <ButtonProps 
        mainText1  =  "Run a world-class agile software"
        mainText2  =  "company—from discovery to"
        mainText3  =  "delivery and operations"
        link =  "Explore Open DevOps"
       img1 =  {jira3}
        bio1 =  "Jira Software"
        bio2 =  "Project and issue tracking"
        img2 =  {jira4}
        bio3 =  "Jira Align"
        bio4 =  "Enterprise Agile planning"
        img3 =  {compass}
        bio5 =  "Compass"
        bio6 =  "Developer experience platform"
        image =  {work3}
        /> : null
       }


       

    </Container>
  )
}

export default Solutions;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    color: #253858;
    flex-direction: column;
    h1{
        font-size: 40px;
    }
`;
const ButtonHold = styled.div``;
const Button = styled.button<{bg: string}>`
    width: 320px;
    height: 80px;
    border-radius: 50px;
    border: 0;
    background-color: ${({bg}) => bg ? "#0052CC": "#DEEBFF"};
    color: ${({bg}) => bg ? "#DEEBFF": "#0052CC"};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 350ms;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
    /* :hover{
        transform: scale(1.0);
        background-color: #DEEBFF;
        color: #0052CC;
    } */
`;