import React from "react";
//Global Styling
import { GlobalStyles } from "./GlobalStyles";
//Components
import Header from "./components/Header/Header";
import Page from "./components/Page/Page";


const App = () =>  (
    <>
      <GlobalStyles />
      <Header />
      <Page />
    </>
  )

export default App;
