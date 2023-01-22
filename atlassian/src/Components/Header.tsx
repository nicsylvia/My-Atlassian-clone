import React, {useState} from 'react'
import styled from 'styled-components';
import logo from "./Assets/Atlassian.webp";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import Teams from './DropDown/Teams';
import cancel from "./Assets/close-large.svg"

const Header = () => {
    
    const [dropTeam, setDropTeam] = useState<Boolean>(false)
    const [dropSupport, setDropSupport] = useState<Boolean>(false)

    const ToggleTeam = () =>{
        setDropTeam(!dropTeam)
    }
    const ToggleTeamCancel = () =>{
        setDropTeam(!dropTeam)
    }
    const ToggleSupport = () =>{
        setDropSupport(!dropSupport)
    }
    const ToggleSupportCancel = () =>{
        setDropSupport(!dropSupport)
    }

  return (
    <Container>
            <Wrapper>
            <FirstWrap>
                <Logo src={logo}  />
                <NavHold>
                    <Nav>Product</Nav>
                    <Icon>
                        <AiOutlineDown />
                    </Icon>
                </NavHold>
                <NavHold>
                    <Nav onClick={ToggleTeam}>For teams</Nav>
                    <Icon>
                        <AiOutlineDown />
                    </Icon>
                </NavHold>
                <NavHold>
                    <Nav onClick={ToggleSupport}>Support</Nav>
                    <Icon>
                        <AiOutlineDown />
                    </Icon>
                </NavHold>
            </FirstWrap>
            <SecondWrap>
                <Button>Try now</Button>
                <But>Buy now</But>
                <Search>
                    <AiOutlineSearch />
                </Search>
                <UserHold>
                    <Avatar>
                        <HiUserCircle />
                    </Avatar>
                    <select>
                        <option>My Account</option>
                        <option>Find my team</option>
                        <option>Login</option>
                    </select>
                </UserHold>
                
            </SecondWrap>
            
            </Wrapper>
           
            {/* Dropdown */}

            {
                dropTeam ? (
                    <Wrap>
                        <Cont>
                        <Teams
                    tittle = "BY TEAM SIZE"
                    head1= " Startups"
                    para1= "Great for startups, from incubator to IPO"
                    head2= "Small business"
                    para2= "Get the right tools for your growing business"
                    head3= "Enterprise"
                    para3= "Learn how we make big teams successful"
                    head4=''
                    para4=''
                
                    tittle2= "BY TEAM FUNCTION"
                    head11= "Software"
                    para11= "Plan, build, & ship quality products"
                    head22= "Marketing"
                    para22= "Bring together a winning strategy"
                    head33= "HR"
                    para33= "Streamline people management"
                    head44= "Legal"
                    para44= "Operate securely and reliably"
                
                    tittle3= ""
                    head111= "Operations"
                    para111= "Run your business efficiently"
                    head222= "IT"
                    para222= "Provide great service and support"
                    head333= "Finance"
                    para333= "Simplify all finance processes"
                    head444= "Incident Response"
                    para444= "Respond, resolve, & learn from incidents"
            
                    tittle4= ""
                    head1111= "Marketplace"
                    para1111= " Apps that enhance Atlassian products"
                    head2222= "Developers"
                    para2222= " Docs and resources to build Atlassian apps"
                    head3333= "Trust & security"
                    para3333= "Compliance, privacy, platform roadmap, and more"
                    head4444= " Work Life blog"
                    para4444= "  Stories on culture, tech, teams, and tips"
                    
                    />
                    </Cont>
                    {/* <CloseIcon onClick={ToggleTeamCancel}>
                    <img src={cancel} alt="" />
                </CloseIcon> */}
                    </Wrap>
                ) : null
            }
            

            


{
                dropSupport ? (
                    <Wrap>
                        <Cont>
                        <Teams 
                    tittle = "RESOURCES"
                    head1= "Documentation"
                    para1= " Guides to all of our products"
                    head2= "Atlassian Migration Program"
                    para2= "Tools and guidance for migrating"
                    head3= "Cloud roadmap"
                    para3= "Upcoming future releases"
                    head4= "Purchasing & licensing"
                    para4= "FAQs about our policies"
                
                    tittle2= "SUPPORT SERVICES"
                    head11= " Enterprise services"
                    para11= " Personal support for large teams"
                    head22= " Partner support"
                    para22= "Trusted third-party consultants"
                    head33= "Atlassian Support"
                    para33= " A resource hub for teams and admins"
                    head44= ""
                    para44= ""
                
                    tittle3= "  LEARN & CONNECT"
                    head111= "About us"
                    para111= "Our mission and history"
                    head222= "  Careers"
                    para222= " Job openings, values, and more"
                    head333= "Atlassian University"
                    para333= "  Training and certifications for all skill levels"
                    head444= "  Atlassian Community"
                    para444= " A forum for connecting, sharing, and learning"
                
                    tittle4= ""
                    head1111= "Marketplace"
                    para1111= " Apps that enhance Atlassian products"
                    head2222= "  Developers"
                    para2222= "Docs and resources to build Atlassian apps"
                    head3333= "Trust & security"
                    para3333= "Compliance, privacy, platform roadmap, and more"
                    head4444= "  Work Life blog"
                    para4444= "Stories on culture, tech, teams, and tips"
        
                    /> 
                    </Cont>
                    {/* <CloseIcon><p onClick={ToggleSupportCancel}>
                    <img src={cancel} alt="" />
                </p></CloseIcon> */}
                    </Wrap>
                ) : null
            }
            
            
    </Container>
    
    
  )
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    width: 89%;
    position: relative;
    justify-content: space-between;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70px;
    width: 100%;
    position: relative;
    background-color: whitesmoke;
    position: fixed;
`;
const FirstWrap = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
`;
const SecondWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 100px;
    select{
        border: none;
        color: #0047B3;
    }
`;
const Logo = styled.img`
    width: 200px;
    height: 50px;
    object-fit: contain;
    margin-right: 20px;
`;
const NavHold = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    transition: all 350ms;
    padding: 5px 5px;
    color: #253858;

    :hover{
        background-color: silver;
        border-radius: 5px;
        cursor: pointer;
    }
`;
const Nav = styled.div`
    position: relative;
`;
const Icon = styled.div`
    margin-top: 5px;
    margin-left: 2px;
    font-size: 12px;
`;
const Button = styled.div`
    margin-right: 15px;
    height: 35px;
    width: 90px;
    background-color: #0047B3;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const But = styled.div`
    color: #0047B3;
    margin-right: 15px;
    height: 35px;
    width: 90px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;
    cursor: pointer;
    :hover{
        background-color: silver;
    }
`;
const Search = styled.div`
    margin-right: 15px;
    font-size: 25px;
    margin-top: 5px;
    color: gray;
`;
const UserHold = styled.div`
    margin-right: 15px;
    display: flex;
`;
const Avatar = styled.div`
    margin-right: 15px;
    border-left: 1px solid silver;
    padding-left: 10px;
    color: silver;
    font-size: 20px;
`;
const Cont = styled.div``;
const Wrap = styled.div``;
const CloseIcon = styled.div`
    
`;