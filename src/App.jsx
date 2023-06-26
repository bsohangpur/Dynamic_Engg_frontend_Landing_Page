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
          <div className=" fixed z-50 shadow-md backdrop-blur-md top-0 left-0 w-full bg-blue-shade-500 bg-opacity-40 text-blue-shade-100">
            <Navbar />
          </div>
          <div className=" mt-24">
            <AnimationRoute />
            <Footer />
          </div>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}
