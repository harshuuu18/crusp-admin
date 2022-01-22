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
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUwMzA1NTVmOWQwZDQyMzgyNDBkNjMiLCJjcmVhdG9yRG9tYWlucyI6WyJrZXNoYXZzdW1hbi5jcnVzcG8uY29tIl0sImZpcnN0TmFtZSI6ImhhcnNoIiwibGFzdE5hbWUiOiJyIiwiZW1haWwiOiJoYXJzaHV1dTgxNEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJjcmVhdG9yIjoia2VzaGF2c3VtYW4iLCJpYXQiOjE2NDI1MjA2MTksImV4cCI6MTY0MjYwNzAxOX0.PvNjABq5papReHtBD_TW0li9nEJ6s8fr7ceX3OrJHug",
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
