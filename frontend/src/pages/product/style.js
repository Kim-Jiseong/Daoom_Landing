import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";
const FadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
`
const SlideDown = keyframes` 
  0% {
    transform: translate( 0, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
  }
`

export const Container = styled.div`
    width:100%;
    height: 100vh;
    margin:0 auto;
    overflow-y: scroll;
`
export const VideoContainer = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top:0;
  left:0;
  
`

export const Video = styled.video`
  /* @media screen and (max-aspect-ratio: 1920/1080) {
    width: auto;
    height: 100vh;
  } */
  width:100%;
  height:100%;
  object-fit: cover;
  animation: ${FadeIn} 2s;
`

export const ContentContainer = styled.div`
    width:100%;
    height: 100vh;
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* ${(props) =>
            props.color &&
            css`
            background-color: ${props.color} ;
        `} */
    /* background-color: transparent; */
`
export const ContentWrapper = styled.div`
    width: 30%;
    height: 30vh;
    z-index: 2;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
`
export const LabelContainer = styled.div`
    width: 30%;
    height: 30vh;
    background-color: white;
    position: fixed;
    /* position: absolute; */
    z-index: 1;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const YB = styled.div`
    width: 100%;
    height: 600px;
`
export const Divider = styled.div`
  width: 100%;
  height: 5px;

`