/** @format */

import React, { useEffect, useState } from "react";
import { GetSessionsRoute } from "../../../network/services";
import Session from "./Session";
function Live() {
	const [session, setSession] = useState("");
	useEffect(() => {
		let _user = JSON.parse(localStorage.getItem("user"));
		if (_user) {
			GetSessionsRoute({ setSession, token: _user.token });
		}
	}, []);

	return (
		<div className='main'>
			<h1>Upcoming Live Sessions</h1>
			<div className='date'>
				<p>Wednesday, 22 September 2021</p>
			</div>
			<div className='session-wrapper'>
				{session.length ? (
					session.map((data) => {
						return <Session data={data} key={data._id} />;
					})
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
}

export default Live;
