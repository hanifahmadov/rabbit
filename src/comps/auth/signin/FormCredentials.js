/* eslint-disable */
import React from "react";
import { FormCredentialsSection } from "./styled/formCredentials.styled";
import { Remember } from "./Remember";

export const FormCredentials = ({
	email,
	setEmail,
	pwd,
	setPwd,
	remember,
	setRemember,
}) => {
	const enableSignin = pwd.length >= 5 && email.length >=5  ? true : false;

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
				/>
			</section>

			<section className='section_password'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					placeholder='Enter password'
					autoComplete='true'
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
				/>
			</section>

			<Remember remember={remember} setRemember={setRemember} />

			<button disabled={!enableSignin}>Submit</button>
		</FormCredentialsSection>
	);
};
