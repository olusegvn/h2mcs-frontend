import React from 'react';
import Login from "./components/page-components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./components/page-components/Register";
import {ThemeProvider} from "@mui/material";
import Theme from "./Theme";
import Layout from "./components/page-components/Browser/Layout";
import {NavigationList, NavigationListItem} from "./assets/NaigationList";

function App() {
    return (
      <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <div className="App">
              <Routes>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                  <Route element={<Layout/>}>
                      {NavigationList.map(({name, icon, Component, componentProps}: NavigationListItem) => (
                            <Route path={name} element={<Component icon={icon} name={name} {...componentProps}/>} />
                        ))}
                  </Route>
              </Routes>
            </div>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
