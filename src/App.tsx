import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from 'Theme';
import { NavBar } from 'Components/NavBar';
import { Home } from 'Views/Home';
import firebase from 'firebase';


firebase.initializeApp({

})
function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
