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
import {
	Button,
	SigninForm,
	Input,
	Label,
} from "./styled/form.styled";
import { Remember } from "./Remember";
import apiUrl from "../../../apis/apiUrl";



export const Signin = () => {
	const [user, setUser] = useRecoilState(userState);
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [remember, setRemember] = useState(false)

	const navigate = useNavigate();
	const emailRef = useRef();
	const { alert, dismiss } = useNotify();

	// clear error messages
	// when toester is on but client trying to type
	// then needed to clear the toester right away
	useEffect(() => {
		// toast.dismiss();
		dismiss();
	}, [email, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();


		console.log("window hostname", window.location.hostname)
		console.log("handle submit");

		// Now check the EMAIL and PWD REGEX here to make sure client has been added the
		// correct type of the email address and password
		// cause the the email & password has been used to create the account has been passed the REGEXES before
		let emailCheck = EMAIL_REGEX.test(email);
		let pwdCheck = PWD_REGEX.test(pwd);

		if (!emailCheck && !pwdCheck) {
			alert("Email & Password", "both are incorrect.");
		} else if (!emailCheck) {
			alert("Email address", "is incorrect.");
		} else if (!pwdCheck) {
			alert("Password", "is incorrect.");
		} else {
			// in this stage means there is no error
			// and ready to call sign in apis
			signInApi({ email, password: pwd, remember: remember })
				.then((result) => {
					console.log("result", result);

					const { user } = result.data

					const updatedUser = produce(user, (draft) => {
						draft = user;
						draft.avatar = apiUrl+'/'+user.avatar;
						return draft
					});

					setUser(updatedUser);
					navigate("/");
					return;
				})
				.catch((err) => {
					alert("Error", err.message);
				});
		}
	};

	const enableSignin = pwd.length > 8 && email.length > 5 ? true : false;

	return (
		<SigninSection className='register signin'>
			<header>
				<h3>LOGIN</h3>
			</header>

			<SigninForm onSubmit={handleSubmit}>
				<section className='section_email'>
					<Label htmlFor='email'>Email address</Label>

					<Input
						type='email'
						id='email'
						placeholder='Enter email address'
						autoComplete='true'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</section>

				<section className='section_password'>
					<Label htmlFor='password'>Password</Label>
					<Input
						type='text'
						id='password'
						placeholder='Enter password'
						autoComplete='true'
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
					/>
				</section>

				<Remember remember={remember} setRemember={setRemember}/>
			
				<Button type='submit' disabled={!enableSignin}>
					Submit
				</Button>
			</SigninForm>

			<SigninFooter>
				<p>
					Dont have an account ?{" "}
					<span className='login' onClick={() => navigate('/register')}>Sign up.</span>
				</p>
			</SigninFooter>
		</SigninSection>
	);
};
