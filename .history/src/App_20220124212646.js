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
					<Route path='/user' exact element={<Content />} />
					<Route path='/user/program' element={<MyProgram />} />
					<Route path='/user/live' element={<Live />} />
					<Route path='/user/billing' element={<Billing />} />
					<Route path='/user/content/:id' element={<Video />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
