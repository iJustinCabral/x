import styled from "styled-components";
import {keyframes} from 'styled-components';


const BreathAnimation = keyframes`
 0% { height: 0%; width: 0%; }
 25% { height: 25%; width: 25%; }
 50% { height: 50%; width: 50%; }
 75% { height: 75%; width: 75%;}
 100% { height: 100%; width: 100%; }
`


export const AnthonyPic = styled.img`
display: flex ;
margin: 0 auto;
animation-timing-function: linear;
animation: ${BreathAnimation} 5s ease-in-out infinite;
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const HaHaText = styled.h1`
  display: flex;
  margin: 0 auto;
  z-index: 99;
  font-family: "Monacao", sans-serif;
  color: white;
  position: fixed;
`
