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
import { GlobalStyled } from "./comps/shared/styled/global.styled";

//: states
import {
	darkmodeState,
	deviceState,
	displayNavbarAccountState,
} from "./comps/shared/store/states";

// comps
import { Error } from "./comps/shared/error/Error";
import { RegisterLayout } from "./comps/layouts/RegisterLayout";
import { RequireAuthLayout } from "./comps/layouts/RequireAuthLayout";
import { Signin } from "./comps/auth/signin/Signin";
import { Signup } from "./comps/auth/signup/Signup";
import { AppLayout } from "./comps/layouts/AppLayout";
import { PersistentLayout } from "./comps/layouts/PersistentLayout";

import { About } from "./comps/pages/about/About";
import { Projects } from "./comps/pages/projects/Projects";
import { Home } from "./comps/pages/home/Home";
import { Contact } from "./comps/pages/contact/Contact";

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
						<Route path='about' element={<About />} />
						<Route path='projects' element={<Projects />} />
						<Route path='contact' element={<Contact />} />
					</Route>
				</Route>
			</Route>

			<Route path='*' element={<Error />} />
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
