/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useNotify } from "../../shared/toast/useNotify";

import { FormCredentialsSection } from "./styled/formCredentials.styled";

export const FormCredentials = ({
	setInformant,
	email,
	setEmail,
	pwd,
	setPwd,
	confirmPwd,
	setConfirmPwd,
}) => {
	let enableSignup =
		email.length > 5 && pwd.length > 8 && confirmPwd.length > 8;

	const { dismiss } = useNotify();

	// useEffect(() => {
	// 	dismiss();
	// }, [pwd, email, confirmPwd]);

	return (
		<FormCredentialsSection>
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
				<label htmlFor='confirmPassword'>Confirm password</label>
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
		</FormCredentialsSection>
	);
};
