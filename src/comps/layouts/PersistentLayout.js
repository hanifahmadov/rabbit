/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// states
import { userState } from "../auth/authStore/states";
import { useRefreshAccessApi } from "../../apis/apiCalls";
import { Outlet, useNavigate } from "react-router-dom";
import { socketConnectionDefaults } from "../shared/store/states";
import apiUrl from "../../apis/apiUrl";

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

				const { user: temp } = res?.data;
				
				const tempUser = produce(user, (draft) => {
					draft = temp
					draft.avatar = apiUrl+'/'+temp.avatar
					return draft
				});

				setUser(tempUser);
			} catch (err) {
				console.log("Error from useverifyAccess");
				console.log(err);
				navigate("/welcome");
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
						color: "rgba(255, 255, 255, .2)",
						fontSize: "5rem",
						width: "100%",
						height: "100%",
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontWeight: '600',
						letterSpacing: '2px'
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
