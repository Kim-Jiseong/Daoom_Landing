import React, {useState,useRef, useEffect} from 'react'
import Header from '../../components/Header/index'
import * as S from "./style";
import Dots from "./Dots";
import useMoveScroll from '../../hooks/refScroll'
import axios from "axios";
function Product() {
  const src = [
    "/videos/anemoi.mp4",
    "/videos/cloudCotton3.mp4",
    "/videos/sandalWood3.mp4"
  ]
  const outerDivRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const DIVIDER_HEIGHT = 5;
  let temp = 0
  let tDeltaY = 0
  useEffect(() => {

    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0 || tDeltaY > 0) {
        console.log("터치 내림", tDeltaY)
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      tDeltaY = 0
      } else if (deltaY < 0 || tDeltaY < 0){
        // 스크롤 올릴 때
        console.log("터치 올림", tDeltaY)
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(0);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        tDeltaY = 0
      }
    };
    const touchMove = (event) => {
    
      var x = event.touches[0].clientX;
      var touchY = event.touches[0].clientY;
      tDeltaY =  temp- touchY 
      console.log(x, touchY, temp, tDeltaY)
      wheelHandler(event)
      temp = touchY
      
    }
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    outerDivRefCurrent.addEventListener("touchmove", touchMove);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      outerDivRefCurrent.removeEventListener("touchmove", wheelHandler);
    };
  }, []);


  return (
    <div>
      <Header></Header>
      <Dots scrollIndex={scrollIndex} />
      <S.Container ref={outerDivRef} id="container" className='outer'>
        <S.ContentContainer color="grey">
            <S.ContentWrapper>
              아네모이
            </S.ContentWrapper>

        </S.ContentContainer>
        <S.Divider/>
        <S.ContentContainer color="white"  >
          <S.ContentWrapper>
            클라우드 코튼
          </S.ContentWrapper>

        </S.ContentContainer>
        <S.Divider/>
        <S.ContentContainer color="pink">
          <S.ContentWrapper>
            센달 우드
          </S.ContentWrapper>

        </S.ContentContainer>
      </S.Container>

      <S.LabelContainer></S.LabelContainer>
      <S.VideoContainer>
      {(scrollIndex === 0) && 
        <S.Video src="/videos/anemoi.mp4" loop autoPlay muted/>}
      {(scrollIndex === 1) && 
        <S.Video src="/videos/cloudCotton3.mp4" loop autoPlay muted/>}
      {(scrollIndex === 2) && 
        <S.Video src="/videos/sandalWood3.mp4" loop autoPlay muted/>}
</S.VideoContainer>


    </div>
  )
}

export default Product