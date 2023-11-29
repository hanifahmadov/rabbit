/* eslint-disable */
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Navigate, Outlet, useLocation } from "react-router-dom";

//: states
import { userState } from "../auth/authStore/states";

export const RequireAuthLayout = () => {
	const [user, setUser] = useRecoilState(userState);

	console.log(user)
	const location = useLocation();

	console.log("Require Auth Layouts");

	return user?.accessToken ? <Outlet /> : <Navigate to='/register' />;
};
