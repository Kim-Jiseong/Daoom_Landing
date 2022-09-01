import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Fade from 'react-reveal/Fade';

export default function Header() {
    const [click, setClick] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    const menuClick = () => {
        setClick(!click)
        console.log(click)
    }

    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", updateScroll);
    }, []);
  
    return(
        <S.HeaderContainer>
            <S.HeaderPage click={click}>
                <S.PageWrapper click={click}>
                        <S.PageComponents>
                            Test Menu1
                        </S.PageComponents>
                        <S.PageComponents>
                            Test Menu2
                        </S.PageComponents>
                    </S.PageWrapper>
            </S.HeaderPage>
            <S.MenuContainer     
            color={
      scrollPosition > 50
        ? "white"
        : "transparent"
    }>
                <S.Logo onClick={()=> navigate('/')} click={click}>Daoom</S.Logo>
                <div style={{display:"flex", alignItems:"center"}}>
                <S.HamburgerContainer onClick={menuClick} click={click}>
                    <S.Line></S.Line>
                    <S.Line></S.Line>
                </S.HamburgerContainer>
                </div>
                
            </S.MenuContainer>
        </S.HeaderContainer>
    )
}