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
import { SigninSection } from "./Styled";

// comps
import { RememberMe } from "./RememberMe";
import { Google } from "./Google";
import { Button } from "../authShared/Button";
import { Input } from "../authShared/Input";
import { Footer } from "../authShared/Footer";

// shared
import { CustomToaster } from "../../shared/toast/CustomToaster";
import { useNotify } from "../../shared/toast/useNotify";

export const Signin = () => {
	const [user, setUser] = useRecoilState(userState);
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");

	const navigate = useNavigate();
	const emailRef = useRef();
	const { alert, dismiss } = useNotify();

	// when this component renders
	// cursor automatically focu on email
	// couse of the email ref using useRef()
	useEffect(() => {
		emailRef.current.focus();
	}, []);

	// clear error messages
	// when toester is on but client trying to type
	// then needed to clear the toester right away
	useEffect(() => {
		// toast.dismiss();
		dismiss();
	}, [email, pwd]);

	// Toester for notifications errors also
	// useEffect(() => {}, [alert]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Now check the EMAIL and PWD REGEX here to make sure client has been added the
		// correct type of the email address and password
		// cause the the email & password has been used to create the account has been passed the REGEXES before
		let emailCheck = EMAIL_REGEX.test(email);
		let pwdCheck = PWD_REGEX.test(pwd);

		if (!emailCheck && !pwdCheck) {
			alert("Email & Password", "are incorrect.");
		} else if (!emailCheck) {
			alert("Email address", "is incorrect.");
		} else if (!pwdCheck) {
			alert("Password", "is incorrect.");
		} else {
			// in this stage means there is no error
			// and ready to call sign in apis
			signInApi({ email, password: pwd })
				.then((result) => {
					let temp = result?.data?.user;

					const tempUser = produce(user, (draft) => {
						draft._id = temp._id;
						draft.avatar = temp.avatar;
						draft.blocked = temp.blocked;
						draft.email = temp.email;
						draft.role = temp.role;
						draft.accessToken = temp.accessToken;
					});

					setUser(tempUser);
					navigate("/");
					return;
				})
				.catch((err) => {

					if (err.code == "ERR_NETWORK") {
						alert("Internal server error!");
						return;
					} else {
						alert(
							"Credentials are incorrect.","Please enter valid credentials."
						);
						return;
					}
				});
		}
	};

	const enableSignin = pwd.length > 8 && email.length > 5 ? true : false;

	return (
		<SigninSection className='register signin'>
			<header>
				<h3>SIGN IN</h3>
			</header>

			<form onSubmit={handleSubmit}>
				<Input
					type={"email"}
					ref={emailRef}
					val={email}
					setVal={setEmail}
				/>

				<Input type={"pwd"} ref={null} val={pwd} setVal={setPwd} />
				{/* TODO: add reveal pwd for sign in */}

				<RememberMe />

				<Button disabled={enableSignin} val={"Login"} />
			</form>

			<section className='or'>
				<span>OR</span>
			</section>

			<Google />

			<Footer
				footerContent={"Dont have an Account ?"}
				footerLinkText={"Sign up."}
				route={"/register/welcome"}
			/>
		</SigninSection>
	);
};
