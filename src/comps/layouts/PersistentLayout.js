/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// states
import { userState } from "../auth/authStore/states";
import { useRefreshAccessApi } from "../../apis/apiCalls";
import { Outlet, useNavigate } from "react-router-dom";
import { socketConnectionDefaults } from "../shared/store/states";

export const PersistentLayout = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useRecoilState(userState);
	const navigate = useNavigate();



	useEffect(() => {
		// console.log("USER INSIDE USEFFECT", user);

		let mounted = true;

		const fetchData = async () => {
			try {
				let res = await useRefreshAccessApi();

				/* 	cookies refresh token expires in a day
					if keep login is on, this will return a already signed in user
					and we can pass the login page.

					if keep login is not selelected, we have to clear cookies
					for not to use Refresh Token to retrieve user data
				*/

				let temp = res?.data?.user;
				
				const tempUser = produce(user, (draft) => {
					draft._id = temp._id;
					draft.avatar = temp.avatar;
					draft.blocked = temp.blocked;
					draft.email = temp.email;
					draft.role = temp.role;
					draft.accessToken = temp.accessToken;
				});

				setUser(tempUser);
			} catch (err) {
				console.log("Error from useverifyAccess");
				console.log(err);
				navigate("/register");
			} finally {
				mounted && setIsLoading(false);
			}
		};

		!user?.accessToken ? fetchData() : setIsLoading(false);

		return () => {
			// Cleanup logic, if needed
			mounted = false;
		};
	}, []);

	return (
		<>
			{isLoading ? (
				<p
					style={{
						color: "black",
						fontSize: "5rem",
						width: "100%",
						height: "100%",
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					Loading...
				</p>
			) : (
				<Outlet />
			)}
		</>
	);
};
