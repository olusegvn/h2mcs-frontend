import React from 'react';
import Index from "./components/page-components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/page-components/Layout";

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path={'/login'} element={<Index/>}/>
              <Route path={'/'} element={<Layout/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
