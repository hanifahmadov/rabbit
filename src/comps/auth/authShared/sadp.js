/* eslint-disable */
import React, { useRef, useState, useEffect, useHistory } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//: styles
import { SignUpSection } from "./auth.styled";

//: REGEX
import { EMAIL_REGEX, PWD_REGEX } from "../../shared/store/states";

//:  API comps
import { signUp } from "../../../apis/apiCalls";

export const SignUp = () => {
	const navigate = useNavigate();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	//# email
	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email]);

	//# pwd & matchedPwd
	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		setValidPwd(result);

		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd]);

	//# error 
	useEffect(() => {
		setErrMsg("");
	}, [email, pwd, matchPwd]);

	//# handle submit
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(email)
		console.log(pwd)
		console.log(matchPwd)

		const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);

		console.log("v1:::", v1)
		console.log("v2:::", v2)

        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
		// 	console.log("error")
        //     return;
        // }
		
		signUp({email, password: pwd, passwordConfirmation: matchPwd})
		.then((result) => {
			console.log('result is:')
			console.log(result)
			navigate("/auth/signin")
		})
		.catch((err) => {
			console.log(err.response.data)
		})
	};

	return (
		<SignUpSection className='auth signup'>
			<header>
				<h3>Create  <br />New Account</h3>
			</header>

			<form onSubmit={handleSubmit}>

				{/*//# EMAIL */}
				<section className='form email_address'>
					<label htmlFor='email' className='d-none'>
						Email: 
					</label>
					<input
						type='email'
						id='email'
						placeholder='Email address'
						autoComplete='off'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required={false}
						onFocus={() => setEmailFocus(true)}
						onBlur={() => setEmailFocus(false)}
					/>

					<div className='email_instructions d-none'>
						<p className={emailFocus ? "d-block" : "d-none"}>
							<img src='' alt='img' />
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>
					</div>
				</section>


				{/*//# PASSWORD */}
				<section className='form password'>
					<label htmlFor='pwd' className='d-none'>
						Password: x or v{" "}
					</label>
					<input
						type='password'
						id='pwd'
						placeholder='Password'
						autoComplete='off'
						onChange={(e) => setPwd(e.target.value)}
						value={pwd}
						required={false}
						aria-invalid={validPwd ? "false" : "true"}
						aria-describedby='pwdnote'
						onFocus={() => setPwdFocus(true)}
						onBlur={() => setPwdFocus(false)}
					/>

					<div className='password_instructions d-none'>
						<p>
							<img src='' alt='img' />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a
							number and a special character.
							<br />
							Allowed special characters:
							<span>!</span>
							<span>@</span>
							<span>#</span>
							<span>$</span>
							<span>%</span>
						</p>
					</div>
				</section>

				{/*//# CONFIRM PASSWORD */}
				<section className='form confirm_password'>
					<label htmlFor='confirm_pwd' className="d-none">Confirm Password:</label>
					<input
						type='password'
						id='confirm_pwd'
						placeholder="Re-enter Password"
						autoComplete='off'
						onChange={(e) => setMatchPwd(e.target.value)}
						value={matchPwd}
						required={false}
						onFocus={() => setMatchFocus(true)}
						onBlur={() => setMatchFocus(false)}
					/>

					<div className='confirm_password_instructions'>
						<p className={'d-none'}>
							Must match the first password input field.
						</p>
					</div>
				</section>

				<section className='term-and-conditions'>
					<div className='checkbox'>
						<input type='checkbox' required='required' />
					</div>

					<p className='iagree'>
						I agree with{" "}
						<span className='t-and-c-text'>
							Terms & Conditions.
						</span>
					</p>
				</section>

				<button
					className='btn btn-primary btn-block btn-large'
					disabled={!validEmail || !validPwd || !validMatch ? true : false}
				>
					SIGN UP
				</button>
			</form>

			<footer>
				<p>
					Already have an account ?
					<NavLink to='/auth/signin'>Sign in.</NavLink>
				</p>
			</footer>
		</SignUpSection>
	);
};

/* 

			//# THIS WILL GET DISPLAYED WHEN FORM SUBMITED
			<section className='errorSection d-none'>
				<p
					ref={errRef}
					className={errMsg ? "errmsg" : "offscreen"}
					aria-live='assertive'
				>
					{errMsg}
				</p>
			</section>



*/
