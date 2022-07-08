import React from 'react';
import Login from "./components/page-components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/page-components/Register";
import {ThemeProvider} from "@mui/material";
import Theme from "./Theme";
import Layout from "./components/page-components/Browser/Layout";
import {NavigationList, NavigationListItem} from "./assets/NaigationList";
import Form from "./components/common-components/Form";
import {form} from "./assets/Forms";


function App() {

    return (

          <BrowserRouter>
              <ThemeProvider theme={Theme}>
                <div className="App">
                  <Routes>
                      <Route path={'/login'} element={<Login/>}/>
                      <Route path={'/register'} element={<Register/>}/>
                      <Route path={'/'} element={<Form {...form}/>}/>
                      <Route element={<Layout/>}>
                          {
                              NavigationList.map(({name, icon, Component, componentProps}: NavigationListItem) => (
                                    <Route path={name} element={<Component icon={icon} name={name} {...componentProps}/>} />
                                ))
                          }
                      </Route>
                  </Routes>
                </div>
              </ThemeProvider>
          </BrowserRouter>
  );
}

export default App;
