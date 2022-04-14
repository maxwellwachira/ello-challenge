import React from "react";
//dependency - Modal
import { ModalProvider } from 'styled-react-modal'
//Global Styling
import { GlobalStyles } from "./GlobalStyles";
//Components
import Header from "./components/Header/Header";
import Page from "./components/Page/Page";


const App = () =>  (
  
    <ModalProvider>
      <GlobalStyles />
      <Header />
      <Page />
    </ModalProvider>
  
  )

export default App;
