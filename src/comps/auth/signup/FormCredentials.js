/* eslint-disable */
import React from "react";
import { FormCredentialsSection } from "./styled/formCredentials.styled";

export const FormCredentials = ({ setInformant, email, setEmail, pwd, setPwd, confirmPwd, setConfirmPwd }) => {
	let enableSignup = email.length >= 5 && pwd.length >= 5 && confirmPwd.length >= 5;

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
					type='password'
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
					type='password'
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
