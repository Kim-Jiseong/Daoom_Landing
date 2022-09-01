import styled, { css, keyframes } from "styled-components";

const SlideUp = keyframes` 
  0% {
    transform: translate( 0, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
  }
`

export const Logo = styled.div`
    font-size: 3rem;
    margin-top: 40px;
    color: #252525;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: grey;

    }
    ${(props) =>
            props.click &&
            css`
            color: white;
        `}
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
    right:0;
    background-color: ${(props) => (props.color)};

`;
export const MenuContainer = styled.div`
    width: 80%;
    margin:0 auto;
    height: auto;   
    display: flex;
    flex-direction: column;
    z-index: 5;
    justify-content: space-between;
    align-items: center;
`;
export const MenuWrapper = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    margin-right:10rem;
    color: #252525;
    ${(props) =>
            props.click &&
            css`
            color: white;
        `}
`;
export const HeaderComponents = styled.div`
    margin-left: 2rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 200%;
    display:flex;
`;
export const PageComponents = styled(HeaderComponents)`
    font-size: 4rem;
`
export const HamburgerContainer = styled.div`
    margin-top: 20px;
    width: 4rem;
    cursor: pointer;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & div{
        transform: translate(0,0) rotate(0deg);
        transition: 0.3s;
        background-color: #252525;
        ${(props) =>
            props.click &&
            css`
            background-color: white;
        `}

    }
    & div:first-child{
        ${(props) =>
            props.click &&
            css`
            width: 80%;
            transform: translate(0%, calc(0.5rem - 2px)) rotate(315deg) ;
            /* transform: translate(-50%, 50%) rotate(45deg) ; */
        `}
    }
    & div:last-child{
        ${(props) =>
            props.click &&
            css`
            width: 80%;
            transform: translate(0, -0.5rem) rotate(-315deg) ;
            /* transform: translate(50%, -50%) rotate(-45deg) ; */
        `}
    }
    
`
export const Line = styled.div`
    width: 100%;
    height:2px;
    /* padding: 2px 0 2px 0; */
    border-radius: 2px;


`
export const HeaderPage = styled.div`
    position: absolute;
    z-index: 3;
    top:-100vh;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: #252525;
    transition: 0.4s;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${(props) =>
            props.click &&
            css`
            top:0;
        `}
`
export const PageWrapper = styled.div`
    height: 30vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s;
    & div{
        ${(props) =>
            props.click &&
            css`
            animation: ${SlideUp} 1.5s forwards;

            color: white;
        `}
    }

`

