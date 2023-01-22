import React from 'react'
import styled from 'styled-components';
import ThreeCards from './ThreeCards';
import agile from "../Assets/AgileCoach.webp";
import team from "../Assets/TeamPlaybook.webp";
import work from "../Assets/Blog1.webp"

const CardsProps = () => {
  return (
    <Container>
        <Wrapper>
            <ThreeCards 
                img = {work}
                headText = "Work Life"
                paraText1 = "Real-life advice, inspiration, and stories"
                paraText2 = "from the working world today."
                link= "Read our blog"
                links= "https://www.atlassian.com/blog"
                bg = "#EAE6FF"
            />
            <ThreeCards 
                img = {team}
                headText = "Atlassian Team Playbook"
                paraText1 = "Solve common team challenges with"
                paraText2 = "these group exercises."
                link= "Check team health"
                links= "https://www.atlassian.com/team-playbook"
                bg = "#E6FCFF"
            />
            <ThreeCards 
                img = {agile}
                headText = "The Agile Coach"
                paraText1 = "Atlassian's no-nonsense guide to agile"
                paraText2 = "development."
                link= "Visit our resources"
                links= "https://www.atlassian.com/agile"
                bg = "#DEEBFF"
            />
        </Wrapper>
    </Container>
  )
}

export default CardsProps;

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 90%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;