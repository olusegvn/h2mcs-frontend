import React, { useEffect, useRef } from 'react';
import Login from "./components/page-components/Login";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Register from "./components/page-components/Register";
import {ThemeProvider} from "@mui/material";
import Theme from "./Theme";
import Layout from "./components/page-components/Browser/Layout";
import {NavigationList, NavigationListItem} from "./assets/NaigationList";
import Form from "./components/common-components/CustomForm/Form";
import {form} from "./assets/Forms";
import { useDispatch, useSelector } from 'react-redux';
import { getPermissoions, setPermissions } from './Slices/permissions';
import {ROUTES} from "./assets/consts";


function App() {
  const permissions = useSelector(getPermissoions);
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Routes>
              <Route path={ROUTES.LOGIN} element={<Login/>}/>
              <Route path={ROUTES.REGISTER} element={<Register/>}/>
              <Route path={'/'} element={permissions.length < 1? <Navigate to={ROUTES.REGISTER} replace />: <Navigate to={`/Overview`} replace />}/>
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
