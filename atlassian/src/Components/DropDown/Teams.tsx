import { title } from 'process';
import React from 'react'
import styled from 'styled-components';

interface dropDown{
    tittle: string;
    head1: string;
    para1: string;
    head2: string;
    para2: string;
    head3: string;
    para3: string;

    tittle2: string;
    head11: string;
    para11: string;
    head22: string;
    para22: string;
    head33: string;
    para33: string;
    head44: string;
    para44: string;

    tittle3: string;
    head111: string;
    para111: string;
    head222: string;
    para222: string;
    head333: string;
    para333: string;
    head444: string;
    para444: string;

    tittle4: string;
    head1111: string;
    para1111: string;
    head2222: string;
    para2222: string;
    head3333: string;
    para3333: string;
    head4444: string;
    para4444: string;
    head4: string;
    para4: string;
}

const Teams: React.FC<dropDown> = ({
    tittle, tittle2, tittle3, tittle4, head1111, head2222, head3333, head4444, para1111, para2222, para3333,para4444, para4, head4,
     head1, para1, para2, para11, para111, para22, para222, para3, para33, para333, para44, para444, head11, head111, head2, head22, head222, head3, head33, head333, head44, head444
}) => {
  return (
    <div>
        <Container>
           <Wrapper>
           <PartOne>
                <Tittle>{tittle}</Tittle>
                <Wrap>
                <h4>{head1}</h4>
                <p>{para1}</p>
                </Wrap>
                
                <Wrap>
                <h4>{head2}</h4>
                <p>{para2}</p>
                </Wrap>
               
                <Wrap>
                <h4>{head3}</h4>
                <p>{para3}</p>
                </Wrap>

                <Wrap>
                <h4>{head4}</h4>
                <p>{para4}</p>
                </Wrap>
            </PartOne>
            <PartTwo>
            <Tittle>
                {tittle2}
            </Tittle>
                <Wrap>
                <h4>{head11}</h4>
                <p>{para11}</p>
                </Wrap>
                
                <Wrap>
                <h4>{head22}</h4>
                <p>{para22}</p>
                </Wrap>
               
                <Wrap>
                <h4>{head33}</h4>
                <p>{para33}</p>
                </Wrap>

                <Wrap>
                <h4>{head44}</h4>
                <p>{para44}</p>
                </Wrap>
            </PartTwo>
            <PartThree>
            <Tittle>{tittle3}</Tittle>
                <Wrap>
                <h4>{head111}</h4>
                <p>{para111}</p>
                </Wrap>
                
                <Wrap>
                <h4>{head222}</h4>
                <p>{para222}</p>
                </Wrap>
              
               
                <Wrap>
                <h4>{head333}</h4>
                <p>{para333}</p>
                </Wrap>
                

               <Wrap>
               <h4>{head444}</h4>
                <p>{para444}</p>
               </Wrap>
            </PartThree>
            <Div></Div>
            <PartFour>
            <Tittle>{tittle4}</Tittle>
               <Wrap>
                 <h4>{head1111}</h4>
                <p>{para1111}</p>
               </Wrap>
                
                <Wrap>
                <h4>{head2222}</h4>
                <p>{para2222}</p>
                </Wrap>
                <Div1></Div1>
               
               <Wrap>
               <h4>{head3333}</h4>
                <p>{para3333}</p>
               </Wrap>
               <Div2></Div2>
                
                <Wrap>
                <h4>{head4444}</h4>
                <p>{para4444}</p>
                </Wrap>
            </PartFour>
            
           
           </Wrapper>
        </Container>
    </div>
  )
}

export default Teams;

const Container = styled.div`
    width: 100%;
    justify-content: center;
    /* align-items: center; */
    display: flex;
    right: 0px;
    /* height: 450px; */
    background-color: white;
    position: absolute;
    border-top: 1px solid black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    position: fixed;
`;
const Wrapper = styled.div`
    width: 80%;
    justify-content: space-between;
    /* align-items: center; */
    display: flex;
    right: 0px;
    height: 400px;
    /* background-color: red; */
    border-top: 5px;
    margin-top: 20px;
    color: gray;
   
`;
const Wrap = styled.div`
    margin: 5px;
     h4{
        /* background-color: yellow; */
        margin: 0;
        transition: all 350ms;
        :hover{
            color: blue;
            cursor: pointer;
        }
    }
    p{
        transition: all 350ms;
        margin: 0;
        font-size: 11px;
        :hover{
            cursor: pointer;
        }
    }
`;
const PartOne = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: green; */
    width: 20%;
    margin-top: 20px;
    
`;
const Tittle = styled.div`
    margin-bottom: 30px;
`;
const PartTwo = styled.div`
display: flex;
    flex-direction: column;
    /* background-color: orange; */
    width: 20%;
    margin-top: 20px;
`;
const PartThree = styled.div`
display: flex;
    flex-direction: column;
    /* background-color: brown; */
    width: 20%;
    margin-top: 20px;
`;
const PartFour = styled.div`
display: flex;
    flex-direction: column;
    /* background-color: purple; */
    width: 20%;
    margin-top: 20px;
`;
const Div = styled.div`
    width: 1px;
    height: 350px;
    background-color: gray;
    margin-top: 20px;
`;
const Div1 = styled.div`
    width: 100px;
    height: 1px;
    background-color: gray;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Div2 = styled.div`
    width: 100px;
    height: 1px;
    background-color: gray;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Cancel = styled.div`
    width: 50px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
`;