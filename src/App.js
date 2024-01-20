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
import { Error } from "./comps/shared/error/Error";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Fragment>
			<Route element={<RegisterLayout />}>
				<Route path="/welcome" element={<Signin />} />
				<Route path='/register' element={<Signup />} />
			</Route>

			<Route element={<PersistentLayout />}>
				<Route element={<RequireAuthLayout />}>
					<Route path='/' element={<AppLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Route>
			</Route>

			<Route path='*' element={<Error/>}/>
		</Fragment>
	)
);

export const App = () => {
	let [device, setDevice] = useRecoilState(deviceState);
	let [darkmode, setDarkmode] = useRecoilState(darkmodeState);


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
