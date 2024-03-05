import { useState ,useEffect } from "react";
import Header from "./Scenes/Header";
import Form from './Scenes/Form';
import { Box, CssBaseline, ThemeProvider , useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const[theme,colorMode]=useMode();
  return (
    <Box>
     <ColorModeContext.Provider value={colorMode}>
      {/* themeprovider mui's theme setting to give mui access */}
      <ThemeProvider theme={theme}>
        {/* cssbaseline reset any default css */}
        <CssBaseline/>
        <div className="app">
        <main className="content" >
          <Header/>
          <Form/>
          </main>
        </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    </Box>
  )
}

export default App
