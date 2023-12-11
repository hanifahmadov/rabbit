/* eslint-disable */
import React, { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

// styles
import { GlobalStyled } from "./styled";

//: states
import {
	darkmodeState,
	deviceState,
	displayNavbarAccountState,
} from "./comps/shared/store/states";

// comps
import { Home } from "./comps/home/Home";
import { Signin } from "./comps/auth/signin/Signin";
import { Signup } from "./comps/auth/signup/Signup";


// layouts
import { PersistentLayout } from "./comps/layouts/PersistentLayout";
import { AppLayout } from "./comps/layouts/AppLayout";
import { RequireAuthLayout } from "./comps/layouts/RequireAuthLayout";
import { RegisterLayout } from "./comps/layouts/RegisterLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Fragment>
			<Route path='/register' element={<RegisterLayout />}>
				<Route index element={<Signin />} />
				<Route path='welcome' element={<Signup />} />
			</Route>

			<Route element={<PersistentLayout />}>
				<Route element={<RequireAuthLayout />}>
					<Route path='/' element={<AppLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Route>
			</Route>
		</Fragment>
	)
);

export const App = () => {
	let [device, setDevice] = useRecoilState(deviceState);
	let [darkmode, setDarkmode] = useRecoilState(darkmodeState);
	let [displayNavbarAccount, setDisplayNavbarAccount] = useRecoilState(
		displayNavbarAccountState
	);

	//: mobile
	const mobile = useMediaQuery({
		query: "(max-device-width: 576px)",
	});

	//: tablet
	const tablet = useMediaQuery({
		query: "(max-device-width: 768px)",
	});

	//: laptop
	const laptop = useMediaQuery({
		query: "(max-device-width: 992px)",
	});

	//: desktop
	const desktop = useMediaQuery({
		query: "(max-device-width: 1200)",
	});

	useEffect(() => {
		device = JSON.parse(JSON.stringify(device));
		device = {
			...device,

			mobile,
			tablet,
			laptop,
			desktop,
		};

		setDevice(device);
	}, [mobile, tablet, laptop, desktop]);

	return (
		<ThemeProvider theme={{ device, darkmode }}>
			<ToastContainer />
			<GlobalStyled />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
