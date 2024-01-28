/* eslint-disable */
// NPM packages
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// states | styled | images | apis
import { userState } from "../authStore/states";
import { EMAIL_REGEX, PWD_REGEX } from "../authStore/regex";
import { signInApi } from "../../../apis/apiCalls";

// shared
import { useNotify } from "../../shared/toast/useNotify";
import { SigninFooter, SigninSection } from "./styled/signin.styled";
import apiUrl from "../../../apis/apiUrl";

import { FormCredentials } from "./FormCredentials";
import { Form } from "./styled/form.styled";

export const Signin = () => {
	const [user, setUser] = useRecoilState(userState);
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [remember, setRemember] = useState(false);

	const navigate = useNavigate();
	const emailRef = useRef();
	const { alert, dismiss } = useNotify();

	useEffect(() => {
		dismiss();
	}, [email, pwd]);

	const credentialsCheck = (email, pwd) => {
		let em = EMAIL_REGEX.test(email);
		let pw = PWD_REGEX.test(pwd);

		// if (!em && !pw) {
		// 	alert("Email & Password", ": typo error!");
		// 	return;
		// } else if (!em) {
		// 	alert("Email address", ": typo error!");
		// 	return;
		// } else if (!pw) {
		// 	alert("Password", ": typo error!");
		// 	return;
		// }

		if (email.length < 5 || pwd.length < 5 ) {
			alert("Email or Password", ": typo error!");
			return;
		} 
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Now check the EMAIL and PWD REGEX here to make sure client has been added the
		// correct type of the email address and password
		// cause the the email & password has been used to create the account has been passed the REGEXES before
		credentialsCheck(email, pwd);

		// in this stage means there is no error
		// and ready to call sign in apis
		signInApi({ email, password: pwd, remember: remember })
			.then((result) => {
				console.log("result", result);

				const { user } = result.data;

				const updatedUser = produce(user, (draft) => {
					draft = user;
					draft.avatar = apiUrl + "/" + user.avatar;
					return draft;
				});

				setUser(updatedUser);
				navigate("/");
				return;
			})
			.catch((err) => {
				alert("Error", err.message);
			});
	};

	return (
		<SigninSection className='register signin'>
			<header>
				<h3>LOGIN</h3>
			</header>

			<Form onSubmit={handleSubmit}>
				<FormCredentials email={email} setEmail={setEmail} pwd={pwd} setPwd={setPwd} remember={remember} setRemember={setRemember} />
			</Form>

			<SigninFooter>
				<p>
					Dont have an account ?{" "}
					<span className='login' onClick={() => navigate("/register")}>
						Sign up.
					</span>
				</p>
			</SigninFooter>
		</SigninSection>
	);
};
