import React, { Component } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "./constants";
import AnimationRoute from "./AnimationRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className=" bg-blue-shade-500 text-blue-shade-100">
            <Navbar />
          </div>
          <AnimationRoute />
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}
