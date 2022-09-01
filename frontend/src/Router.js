import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/index";
import Product from "./pages/product/index";
import ScrollTop from "./components/ScrollTop/index";
function Router() {
  // // 반응형 헤더를 위한 데스크탑 여부 확인
  const isDesktop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
  return (
        <BrowserRouter>
         <ScrollTop />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      );
}
export default Router;
