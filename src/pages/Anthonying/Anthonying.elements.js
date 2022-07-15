import styled from "styled-components";
import {keyframes} from 'styled-components';


const BreathAnimation = keyframes`
 100% { height: 100%; width: 100%; }
 75% { height: 75%; width: 75%; }
 50% { height: 50%; width: 50%; }
 25% { height: 25%; width: 25%;}
 0% { height: 0%; width: 0%; }
`


export const AnthonyPic = styled.img`
display: flex ;
margin: 0 auto;
animation-name: ${BreathAnimation};
animation-duration: 5s;
animation-iteration-count: infinite;
`
