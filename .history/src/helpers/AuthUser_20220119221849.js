/** @format */

import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
	return (props) => {
		if (typeof window !== "undefined") {
			const navigate = useNavigate();
			/* For Developer's testing use only
        
    */
			let testData = {
				user: {
					firstName: "harsh",
					lastName: "raj",
					email: "harshuuu814@gmail.com",
				},
				token:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU4NDBkODk2YTYwOWE4MmM0YWE3ZmIiLCJjcmVhdG9yRG9tYWlucyI6WyJrZXNoYXZzdW1hbi5jcnVzcG8uY29tIl0sImZpcnN0TmFtZSI6ImhhcnNoIiwibGFzdE5hbWUiOiJyYWoiLCJlbWFpbCI6ImhhcnNodXV1ODE0QGdtYWlsLmNvbSIsInVzZXJUeXBlIjoidXNlciIsImNyZWF0b3IiOiJrZXNoYXZzdW1hbiIsImlhdCI6MTY0MjYxMDkxMCwiZXhwIjoxNjQyNjk3MzEwfQ.1aBCpYeUqwxoceaaRm3P4Ju5e4bPWs4H_k9WHjQpHL4",
			};

			localStorage.setItem("user", JSON.stringify(testData));

			const user = localStorage.getItem("user");
			// console.log({ user });
			if (!user) {
				navigate("/login");
				return null;
			}
			let userData = JSON.parse(user);
			return <WrappedComponent {...props} user={userData} />;
		}

		return null;
	};
};

export default withAuth;
