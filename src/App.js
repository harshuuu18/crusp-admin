/** @format */

import { React } from "react";
import Sidenav from "./Components/Sidenav";
import Topnav from "./Components/Topnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Components/Pages/Content/Content";
import MyProgram from "./Components/Pages/MyProgram/MyProgram";
import Live from "./Components/Pages/Live/Live";
import Billing from "./Components/Pages/Billing/Billing";
import "./App.css";
import Video from "./Components/Pages/video";

function App() {
	return (
		<>
			<Router>
				<Sidenav />
				<Topnav />
				<Routes>
					<Route path='/' exact element={<Content />} />
					<Route path='/program' element={<MyProgram />} />
					<Route path='/live' element={<Live />} />
					<Route path='/billing' element={<Billing />} />
					<Route path='/content/:id' element={<Video />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
