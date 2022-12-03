import React from "react";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Display from './Componint/Api/Display/Display';
import User from './Componint/User/User';
import Error from "./Componint/Error/Error";

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={ <User/> } />
        <Route path="/user" element={ <User/> } />
        <Route path="/display" element={ <Display/> } />
        <Route path="*" element={ <Error/>}/>
    </Routes>
    </Router>
  );
};

export default App;