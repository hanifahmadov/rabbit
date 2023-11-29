/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";

// styled | apis
import { SignupContainer } from "./Styled";
import { signUpApi } from "../../../apis/apiCalls";

// comps
import { Button } from "../authShared/Button";
import { Input } from "../authShared/Input";
import { RevealPassword } from "./RevealPassword";
import { Footer } from "../authShared/Footer";
import { useNotify } from "../../shared/toast/useNotify";


export const Signup = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");

	// Reveal Passwords states
	const [revealPwd, setRevealPwd] = useState(false);
	const [revealConfirmPwd, setRevealConfirmPwd] = useState(false);


	const emailRef = useRef();
	const { alert, dismiss } = useNotify();

	let enableSignup =
		email.length > 5 && pwd.length > 8 && confirmPwd.length > 8;

	useEffect(() => {
		// toastRef.current.dismiss();
		dismiss()
	}, [pwd, email, confirmPwd])

	const handleSubmit = (e) => {
		e.preventDefault();

		signUpApi({ email, password: pwd, passwordConfirmation: confirmPwd })
		.then(response => {
			if(response?.data?.user._id) {
				alert('Suceess', "Res")

			}
		})
		.catch(err => {
			console.log("ERROR")
			console.log(err)
			alert('Error', "error happend")
		})


	};
	return (
		<SignupContainer className='register signup'>
			<header>
				<h3> Create <br/> New Account</h3>
			</header>
			<form onSubmit={handleSubmit}>
				<Input
					type={"email"}
					ref={emailRef}
					val={email}
					setVal={setEmail}
				/>

				<section>
					<Input type={"pwd"} ref={null} val={pwd} setVal={setPwd} reveal={revealPwd} />
					<RevealPassword val={pwd} reveal={revealPwd} setReveal={setRevealPwd} />
				</section>

				<section>
					<Input
						type={"confirmPwd"}
						ref={null}
						val={confirmPwd}
						setVal={setConfirmPwd}
						reveal={revealConfirmPwd}
					/>

					<RevealPassword
						val={confirmPwd}
						reveal={revealConfirmPwd}
						setReveal={setRevealConfirmPwd}
					/>
				</section>
				<Button disabled={enableSignup} val={"Sign Up"} />
			</form>

			<Footer
				footerContent={"Already have an account?"}
				footerLinkText={" Login."}
				route={"/register"}
			/>
		</SignupContainer>
	);
};

/* 



*/
