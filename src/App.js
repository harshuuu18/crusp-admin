import { React, useState } from "react";
import Sidenav from "./Components/Sidenav";
import Topnav from "./Components/Topnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Components/Pages/Content";
// import Programs from './Components/Pages/Programs';
import MyProgram from "./Components/Pages/MyProgram";
import Live from "./Components/Pages/Live";
import Billing from "./Components/Pages/Billing";
// import Main from './Components/Main'
import "./App.css";
import ProgramStateContext from "./Utilities/Context";

function App() {
  return (
    <>
      <Router>
        <Sidenav />
        <Topnav />
        <Routes>
          <Route path="/" exact element={<Content />} /> 
          <Route path="/program" element={<MyProgram />} />
          <Route path="/live" element={<Live />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
