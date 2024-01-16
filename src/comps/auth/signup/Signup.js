/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";


import { useNotify } from "../../shared/toast/useNotify";

// styled | apis
import {
	Information,
	SignupContainer,
	SignupForm,
} from "./styled/signup.styled";

import { signUpApi } from "../../../apis/apiCalls";
import { FormCredentials } from "./FormCredentials";
import { FormAvatar } from "./FormAvatar";
import { Informant } from "./Informant";

export const Signup = () => {
	// Reveal Passwords states
	// const [revealPwd, setRevealPwd] = useState(false);
	// const [revealConfirmPwd, setRevealConfirmPwd] = useState(false);
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");

	const [avatar, setAvatar] = useState(undefined);
	const [informant, setInformant] = useState("avatar");

	const navigate = useNavigate();
	const { alert } = useNotify();

	const handleSubmit = (e) => {
		e.preventDefault();

		let data = new FormData();

		data.append("email", email);
		data.append("password", pwd);
		data.append("passwordConfirmation", confirmPwd);
		data.append("avatar", avatar);

		signUpApi(data)
			.then((response) => {
				if (response?.data?.user._id) {
					alert("Success", "Great, You have signed up successfully!", "Navigating to LOGIN page now");
				}

				setEmail("");
				setPwd("");
				setConfirmPwd("");
				setAvatar(undefined);

				setTimeout(() => {
					navigate('/welcome')
				}, 4000)

			})
			.catch((err) => {
				console.log("ERROR");
				console.log(err);

				alert("Error", "Something went wrong, please try again!", '');
			});
	};

	return (
		<SignupContainer className='register signup'>
			<header>
				<h3>REGISTER</h3>
			</header>
			<SignupForm onSubmit={handleSubmit}>
				<FormAvatar avatar={avatar} setAvatar={setAvatar} />
				<FormCredentials
					setInformant={setInformant}
					email={email}
					setEmail={setEmail}
					pwd={pwd}
					setPwd={setPwd}
					confirmPwd={confirmPwd}
					setConfirmPwd={setConfirmPwd}

				/>
			</SignupForm>

			<Informant informant={informant}/>

		</SignupContainer>
	);
};
