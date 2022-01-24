/** @format */

import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
	return (props) => {
		if (typeof window !== "undefined") {
			const navigate = useNavigate();
			/* For Developer's testing use only
        
    */

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
