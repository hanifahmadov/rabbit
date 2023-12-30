/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";

// styled | apis
import {
	FooterSignup,
	FormAvatar,
	FormCredentials,
	FormLeft,
	FormRight,
	Information,
	SignupContainer,
	SignupForm,
} from "./styled/signup.styled";
import { signUpApi } from "../../../apis/apiCalls";
import { useNotify } from "../../shared/toast/useNotify";
import { AnimatePresence, motion } from "framer-motion";

import info from "../../shared/logos/logos.png";
import default_img from "../../shared/logos/external/default_room_img.png";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");

	// Reveal Passwords states
	const [revealPwd, setRevealPwd] = useState(false);
	const [revealConfirmPwd, setRevealConfirmPwd] = useState(false);
	const [informant, setInformant] = useState("pwd");
	const [avatar, setAvatar] = useState(undefined);

	const avatarRef = useRef();
	const emailRef = useRef();
	const pwdRef = useRef();
	const confirmPwdRef = useRef();
	const navigate = useNavigate();

	const { alert, dismiss } = useNotify();

	let enableSignup =
		email.length > 5 && pwd.length > 8 && confirmPwd.length > 8;

	useEffect(() => {
		dismiss();
	}, [pwd, email, confirmPwd]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = new FormData();

		
		data.append('email', email)
		data.append('password', pwd)
		data.append('passwordConfirmation', confirmPwd)
		data.append("avatar", avatar);

		signUpApi(data)
			.then((response) => {
				if (response?.data?.user._id) {
					alert("Success", "Great, You have signed up successfully");
				}

				setEmail('')
				setPwd('')
				setConfirmPwd('')
				setAvatar(undefined)

				setTimeout(() => {
					navigate("/welcome");
				}, 1000);

			})
			.catch((err) => {
				console.log("ERROR");
				console.log(err);

				if (err.response.status == 422) {
					alert("Error", "This username has already taken!");
				} else {
					alert("Error", "Something went wrong, please try again!");
				}
			});
	};

	const handleAvatarChange = () => {
		const [file] = avatarRef.current?.files;
		setAvatar(file);
	};

	return (
		<SignupContainer className='register signup'>
			<header>
				<h3>REGISTER</h3>
			</header>
			<SignupForm onSubmit={handleSubmit}>
				<FormAvatar>
					<img
						src={avatar ? URL.createObjectURL(avatar) : default_img}
						className='img'
						alt='selected'
					/>
					<input
						type='file'
						id='avatar'
						name='avatar'
						className='d-none'
						ref={avatarRef}
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleAvatarChange}
					/>
					<label htmlFor='avatar' className='label_avatar'>
						Upload Avatar
					</label>
				</FormAvatar>

				<FormCredentials>
					<section className='section_email'>
						<label htmlFor='email'>Email address</label>

						<input
							type='email'
							id='email'
							placeholder='Enter email address'
							autoComplete='true'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onFocus={() => setInformant("email")}
							onBlur={() => setInformant("avatar")}
						/>
					</section>

					<section className='section_password'>
						<label htmlFor='password'>Password</label>
						<input
							type='text'
							id='password'
							placeholder='Enter password'
							autoComplete='true'
							value={pwd}
							onChange={(e) => setPwd(e.target.value)}
							onFocus={() => setInformant("pwd")}
							onBlur={() => setInformant("avatar")}
						/>
					</section>
					<section className='section_confirmPassword'>
						<label htmlFor='confirmPassword'>
							Confirm password
						</label>
						<input
							type='text'
							id='confirmPassword'
							placeholder='Re enter password'
							autoComplete='true'
							value={confirmPwd}
							onChange={(e) => setConfirmPwd(e.target.value)}
							onFocus={() => setInformant("conPwd")}
							onBlur={() => setInformant("avatar")}
						/>
					</section>
					<button disabled={!enableSignup}>Submit</button>
				</FormCredentials>
			</SignupForm>

			<Information>
				<div className='title'>
					{informant == "avatar" && "User Avatar"}
					{informant == "email" && "Email Address"}
					{informant == "pwd" && "Password"}
					{informant == "conPwd" && "Confirm Password"}
				</div>

				<div className='content'>
					{informant == "avatar" && (
						<>
							<div>We got your back.</div>
							<div>
								There is a default avatar <br /> you'll get if
								you dont have one.
							</div>
						</>
					)}

					{informant == "email" && (
						<>
							<div>
								Email name can contains <pre>[ . _ % + - ]</pre>
							</div>
							<div>Must be between 2 and 63 characters long.</div>
							<div>Must contains @ sign.</div>
						</>
					)}

					{informant == "pwd" && (
						<>
							<div>Must be between 8 and 24 characters long.</div>
							<div>
								At least one lowercase letter is required.
							</div>
							<div>At least one digit (0-9) is required.</div>
						</>
					)}

					{informant == "conPwd" && (
						<>
							<div>Make sure the passwords match.</div>
						</>
					)}
				</div>

				<div className='footer_signup'>
					<p>
						Already have an account ?{" "}
						<span className='login' onClick={() => navigate('/welcome')}>Login.</span>
					</p>
				</div>
			</Information>
		</SignupContainer>
	);
};
