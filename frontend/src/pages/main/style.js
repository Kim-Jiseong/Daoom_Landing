import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";
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
    width:80%;
    min-height: 100vh;
    margin:0 auto;
`
export const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    display:flex;
    align-items: center;
    position:fixed;
    z-index: 3;
    top:0;
    left:0;
`;

export const Test = styled.div`
    width:80%;
    position: absolute;
    z-index: 2;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    height: 100vh;
    background-color: red;
    /* overflow: auto; */
`

export const SlideContainer = styled.div`
  overflow: hidden;
  /* margin-bottom: 20rem; */
  /* width: 100vw; */
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  /* width: 100vw; */
  min-height: 20rem;
  height: 60vh;
  min-height: 360px;
  object-fit: cover;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
  background: rgba(18, 18, 29, 0.6);
  /* background-size: cover; */
  /* margin: 0 16px; */
`;
export const TextWrapper = styled.div`
  position: absolute;
  width: 80%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.div`
  color: #f2f2f2;
  font-weight: 300;
  font-size:1.8rem;
  text-align: center;
  font-weight: 600;
`;
export const SubTitle = styled(Title)`
  font-weight: 300;
  font-size: 2.2rem;
  margin-top: 3.6rem;
`;
export const BlackBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(18, 18, 29, 0.3);
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* max-height:100%; */
`;