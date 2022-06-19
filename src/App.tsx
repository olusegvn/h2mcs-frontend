import React from 'react';
import Login from "./components/page-components/Login/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/page-components/Layout";
import Register from "./components/page-components/Register";
import {ThemeProvider} from "@mui/material";
import Theme from "./Theme";

function App() {
    return (
      <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <div className="App">
              <Routes>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                  <Route path={'/'} element={<Layout/>}/>
              </Routes>
            </div>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
