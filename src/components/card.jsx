import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  margin-bottom:1rem;
  color: #444;
  border: 1px solid #1890ff; 
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
`;

const Main = styled.div`
width: 400px;
height: 500px;
display: flex;
flex-direction:column;
border-radius:20px;
overflow:hidden;
margin:auto;
border: 1px solid #636567; 
box-shadow: 1px 4px 11px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 11px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 11px 0px rgba(0,0,0,0.75);
`;
const ContainImg = styled.div`
width: 100%;
height: 380px;
background-image: url('./src/assets/poulet.jpeg');
background-size:cover;
`;

const ContainArticle = styled.div`
width: 100%;
height: 100%;
`;
const Titlerecette = styled.h2`
text-align:center;
font-size:24px;
font-weight:500;
padding-top:1rem;
`;
const Description = styled.div`
width: 100%;
line-height:1.5rem;
padding:1em;
`;
const Callaction = styled.button`
margin-left:50%;
`;


const StyledComponents = () => (
    <>
    <Container>
        <Title>Styled-Components</Title>
    </Container>
    <Main>
        <ContainImg></ContainImg>
        <ContainArticle>
        <Titlerecette>Poulet rôti</Titlerecette>
        <Description><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto qui temporibus sequi amet officia corrupti vitae maxime quis voluptatum! Dolorum neque autem corporis et quis voluptatum, veritatis ullam! Nam minus saepe unde neque eaque porro odit</p>
        </Description>
        <Callaction type="button">Découvrir la recette</Callaction>
        </ContainArticle>
        
    </Main>
    </>
);

export default StyledComponents;