import React from 'react';
import Login from "./components/page-components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./components/page-components/Register";
import {ThemeProvider} from "@mui/material";
import Theme from "./Theme";
import Browser from "./components/page-components/Browser";

function App() {
    return (
      <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <div className="App">
              <Routes>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                  <Route path={'/'} element={<Browser/>}/>
              </Routes>
            </div>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
