import React from 'react';
import Navbar from './components/Navbar'
import MainCard from './components/MainCard'
import ContractBalance from './components/ContractBalance'
import './App.css';
import styled from 'styled-components'
import bgImg from './bgImg.jpg'

const Img = styled.div`
  border: 1px solid #000;
  background-image: url(${bgImg});
  width: 99.8%;
  height: 665px;;
`;


function App() {


  return (
    <Img>
    <Navbar/>

    <ContractBalance/>
    <MainCard>
    </MainCard>


    </Img>              
  )}

export default App;
