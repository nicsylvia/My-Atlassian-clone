import React from 'react'
import styled from 'styled-components'
import pic from "./Assets/Atlassian.webp"
const Footer = () => {
  return (
    <div>
        <Container>
           <Wrapper>
           <DivOne>
                <Imag>
                    <Img src = {pic}  />
                </Imag>
                <Content>
                    <One>
                        <h4>PRODUCTS</h4>
                        <Nav>
                            <a href="">Jira Software</a>
                        </Nav>
                        <Nav>
                            <a href="">Jira Align</a>
                        </Nav>
                        <Nav>
                            <a href="">Jira Service Management</a>
                        </Nav>
                        <Nav>
                            <a href="">Confluence</a>
                        </Nav>
                        <Nav>
                            <a href="">Trello</a>
                        </Nav>
                        <Nav>
                            <a href="">Bitbucket</a>

                        </Nav>
                        <a href="https://www.atlassian.com/software">View all products</a>
                    </One>
                    <One>
                        <h4>RESOURCES</h4>
                        <Nav>
                            <a href="">Technical SupportS</a>
                        </Nav>
                        <Nav>
                            <a href="">Purchasing & licensing</a>
                        </Nav>
                        <Nav>
                            <a href="">Atlassian Community</a>
                        </Nav>
                        <Nav>
                            <a href="">Knowledge base</a>
                        </Nav>
                        <Nav>
                            <a href="">Marketplace</a>
                        </Nav>
                        <Nav>
                            <a href="">My Account</a>

                        </Nav>
                        <a href="https://www.atlassian.com/software">Create support ticket</a>
                    </One>
                    <One>
                        <h4>EXPAND & LEARN</h4>
                        <Nav>
                            <a href="">Partners</a>
                        </Nav>
                        <Nav>
                            <a href="">Training & Certification</a>
                        </Nav>
                        <Nav>
                            <a href="">Documentation</a>
                        </Nav>
                        <Nav>
                            <a href="">Developer Resources</a>
                        </Nav>
                        <Nav>
                            <a href="">Enterprise services</a>
                        </Nav>

                        <a href="https://www.atlassian.com/software">View all resources</a>
                    </One>
                    
                    <One>
                        <h4>ABOUT ATLASSIAN</h4>
                        <Nav>
                            <a href="">Company</a>
                        </Nav>
                        <Nav>
                            <a href="">Careers</a>
                        </Nav>
                        <Nav>
                            <a href="">Events</a>
                        </Nav>
                        <Nav>
                            <a href="">Blogs</a>
                        </Nav>
                        <Nav>
                            <a href="">Investor Relations</a>
                        </Nav>
                        <Nav>
                            <a href="">Trust & Security</a>

                        </Nav>
                        <a href="https://www.atlassian.com/software">Contact us</a>
                    </One>
                </Content>
            </DivOne>
           </Wrapper>
            <DivTwo></DivTwo>
            <DivThree></DivThree>
        </Container>
    </div>
  )
}

export default Footer


const Wrapper = styled.div`
    width: 100%;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`

display:flex;

width: 80%;
justify-content: space-between;
`

const One = styled.div`
h4{
    font-size: 15px;
}

a{
    text-decoration: none;

    :hover{
        text-decoration: underline;
    }
}
`

const Nav = styled.div`

padding-bottom: 10px;
font-weight: 600;

a{
    text-decoration: none;
    font-size: 12px;
    color: #363535;
    :hover{
        text-decoration: underline;
    }
}


`

const Container = styled.div`
width: 100%;
height: 300px;


`


const DivOne = styled.div`
display: flex;
width: 85%;
height: 100%;
`
const DivTwo = styled.div``
const DivThree = styled.div``


const Imag = styled.div`
width: 35%;
height: 40px;
margin-top: 20px;
margin-right: 30px;
/* background-color: red; */
`

const Img = styled.img`
width: 80%;
height: 80%;
object-fit: cover;
`